# How To Inject A Settings Array In PHP DI

[Also available in english](how-to-inject-settings-array-in-php-di.md)

Das war eine Frage, welche mir ein Kollege aus der Schule neulich gestellt hat. 
Daraufhin habe ich ihm erklärt, dass man Konfigurationen nicht als array in eine Klasse injecten kann.
Folgendes Beispiel funktioniert also NICHT:

```php
<?php
namespace App\Service;

class MyService {
  public function __construct(UserRepository $userRepository, array $settings) {
    // The array is not recognized as settings by PHP DI
  }
}
```

Aber wie gibt man dann einer Klasse gewisse Konfigurationsdaten (wie Beispielsweise die Datenbankkonfiguration oder ein API Key) mit?

Bei PHP DI kann man selbst den Rückgabewert des Containers zu einem Key (falls nötig) konfigurieren.
Dies kann wie folgt machen:

```php
<?php

// e.g. config/container.php

$container = [];
$container['settings'] = static function () {
  $settings = [
    'database' => [/* ... */],
    'API_KEY' => 'some_key',
  ];
  
  return $settings;
};
```

Das ist doch super so. So kann man einen Konfigurationsarray bekommen.
Und wie macht man das jetzt in einem Service (oder Controller, etc)?
Ganz einfach. Man übergibt "nur" den ganzen Container im Constructor, liest danach den Key 'settings' aus und tadaaa, Problem solved.

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

Aber ist das nicht eigentlich der [Service Locator Pattern](https://en.wikipedia.org/wiki/Service_locator_pattern)? Doch exakt.
Und dummerweise ist das ein Anti-Pattern. Der Grund dafür findet sich auf der Wikipedia-Seite: "The registry hides the class' dependencies, causing run-time errors instead of compile-time errors when dependencies are missing"
Also brauchen wir eine andere Alternative, welche es uns ermöglicht, mit einem Typed Parameter den array der Settings zu erreichen.
Mit einem Interface lässt sich in dieser Situation am einfachsten arbeiten.

```php
<?php

namespace App;

interface SettingsInterface {}
```

Danach muss man nur noch den Key des Container des settings array von 'settings' zu `SettingsInterface::class` ändern und man kann die Settings über diesen Key immer erreichen.

```php
<?php

use App\SettingsInterface;

// e.g. config/container.php

$container = [];
$container[SettingsInterface::class] = static function () {
  $settings = [
    'database' => [/* ... */],
    'API_KEY' => 'some_key',
  ];
  
  return $settings;
};
```

Jetzt nur noch im Contstructor unseres Services das `SettingsInterface` als Klassendependency deklarieren und wir sind fertig.
Obwohl...

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

Dummerweise gibt es eine Exception. Man kann nicht ein Interface als Klassendependency deklarieren (so dass PHP DI es erkennt) und gleichzeitig einen Array übergeben.
Das ist ein PHP Sprachfeature, was nicht umgangen werden kann.
Um es nun zum laufen zu bringen, empfehle ich folgenden Weg.

Man erstellt noch eine weitere Klasse, Namens `Settings`, welche ähnlich wie ein Container funktioniert.
Zusätzlich definiert man noch die `get()`-Methode im `SettingsInterface` und lässt die `Settings` Klasse das `SettingsInterface` implementieren.

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
   * Get settings by key
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

Nun muss noch der Container mit dem Key `SettingsInterface::class` ein wenig angepasst werden, dass dieser effektiv auch ein `SettingsInterface` retourniert.

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
  'database' => [/* ... */],
  'API_KEY' => 'some_key',
  'some' => ['nested' => ['example' => 'value']],
  ];
  return new Settings($settings);
};
```

Jetzt kann man im Controller die Settings der Datenbank recht einfach aus dem `Settings` Objekt auslesen.

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

Mit dieser Lösung kann man Objekt-Orientiert einen array von Konfigurationsdaten in PHPDI mitgeben.
