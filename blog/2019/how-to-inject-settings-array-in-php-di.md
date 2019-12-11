# How To Inject A Settings Array In PHP DI

[Auch in Deutsch verfügbar](how-to-inject-settings-array-in-php-di_de.md)

That was a question a colleague from school asked me the other day. 
So I explained to him that you can't inject configurations into a class as an array.
So the following example does NOT work:

```php
<?php
namespace App\Service;

class MyService {
  public function __construct(UserRepository $userRepository, array $settings) {
    // The array is not recognized as settings by PHP DI
  }
}
```

But how do you then give a class certain configuration data (such as the database configuration or an API key)?

With PHP DI you can configure the return value of the container to a key (if necessary).
This can be done as follows:

```php
<?php

// e.g. config/container.php

$container = [];
$container['settings'] = static function () {
  $settings = [
    database' => [/* ... */],
    API_KEY' => 'some_key',
  ];
  
  return $settings;
};
```

That's great. So you can get a configuration array.
And how do you do that now in a service (or controller, etc)?
Quite simple. You "only" pass the whole container in the constructor, then read out the key 'settings' and tadaaa, Problem solved.

```php
<?php
namespace App\Service;

use DI\Container;
use App\Repository\UserRepository;

class MyService {
  private array $settings;

  public function __construct(UserRepository $userRepository, Container $container) {
    $this->settings = $container->get('settings'); // anti-pattern !!!
  }
}
```

But isn't that actually the [Service Locator Pattern](https://en.wikipedia.org/wiki/Service_locator_pattern)? But exactly.
And unfortunately that is an anti-pattern. The reason can be found on the Wikipedia page: "The registry hides the class' dependencies, causing run-time errors instead of compile-time errors when dependencies are missing".
So we need another alternative which allows us to reach the array of settings with a typed parameter.
An interface is the easiest way to work in this situation.

```php
<?php

namespace App;

interface SettingsInterface {}
```

After that you only have to change the key of the settings array container from 'settings' to `SettingsInterface::class` and you can always reach the settings via this key.

```php
<?php

use App\SettingsInterface;

// e.g. config/container.php

$container = [];
$container[SettingsInterface::class] = static function () {
  $settings = [
    database' => [/* ... */],
    API_KEY' => 'some_key',
  ];
  
  return $settings;
};
```

Now just declare the `SettingsInterface` as class dependency in the constructor of our service and we are done.
Although...

```php
<?php
namespace App\Service;

use App\Repository\UserRepository;
use App\SettingsInterface;

class MyService {
  private array $settings;

  public function __construct(UserRepository $userRepository, SettingsInterface $settings) {
    $this->settings = $settings;
  }
}
```

Unfortunately, there's an exception. You cannot declare an interface as a class dependency (so that PHP DI recognizes it) and pass an array at the same time.
This is a PHP language feature that cannot be bypassed.
To make it work now, I recommend the following way.

You create another class, called `Settings`, which works similar to a container.
Additionally you define the `get()` method in the `SettingsInterface` and let the `Settings` class implement the `SettingsInterface`.

```php
namespace App;

/**
 * Class Settings
 */
class Settings implements SettingsInterface
{
  /** @var array */
  private $settings;
  
  /**
   * Settings constructor.
   *
   * @param array $settings
   */
  public function __construct(array $settings)
  {
    $this->settings = $settings;
  }
  
  /**
   # Get settings by key
   *
   * @param string $key
   *
   * @return mixed
   */
  public function get(string $key)
  {
    return $this->settings[$key];
  }
}
```

Now the container with the key `SettingsInterface::class` has to be adapted a bit, so that it effectively returns a `SettingsInterface` as well.

```php
<?php

use App\Settings;
use App\SettingsInterface;

// e.g. config/container.php

/**
 * @return Settings
 */
$container[SettingsInterface::class] = static function (): SettingsInterface {
  $settings = [
  database' => [/* ... */],
  API_KEY' => 'some_key',
  'some' => ['nested' => ['example' => 'value']],
  ];
  return new Settings($settings);
};
```

Now you can easily read the database settings from the `Settings` object in the controller.

```php
<?php
namespace App\Service;

use App\Repository\UserRepository;
use App\SettingsInterface;

class MyService {
  private array $databaseSettings;
  private string $apiKey;
  private string $nested;

  public function __construct(UserRepository $userRepository, SettingsInterface $settings) {
    $this->databaseSettings = $settings->get('database');
    $this->apiKey = $settings->get('API_KEY');
    $this->nested = $settings->get('some')['nested']['example'];
  }
}
```

With this solution you can add an object-oriented array of configuration data in PHPDI.

