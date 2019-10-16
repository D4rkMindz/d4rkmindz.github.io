## Mock the Unmockable
In der PHP Community wird Codequalität immer wichtiger. Manchmal gibt es jedoch Klassen oder Methoden, welche mit PHPUnit sehr schwer zu testen sind. Solche Methoden haben meistens eine Zugriff auf ein File System oder verwenden interne Methoden wie ''time()'' oder ''exec()''. Nun stellt sich die Frage, wie man Zugriffe auf ein File System testet, ohne es dabei mit Testdaten zu überschwemmen und es sogar so zu manipulieren, dass die Applikation Bugs produziert. Man müsste also nach jedem Unit-Test das Filesystem zurücksetzen, was ziemlich Zeitaufwändig ist. 


Nimmt man das Beispiel eines Caches zum Testen. Dieser Cache hat eine ''warmUp()'' Methode zum initialisieren des Cache-Verzeichnisses. Normalerweise würde dieses Verzeichnis in der Applikation in irgend einem Unterverzeichnis erstellt werden. Genau hier kommt die Test-Library [vfsStream (Virtual File System Stream)](https://github.com/mikey179/vfsStream) ins Spiel. Diese erstellt ein virtuelles File System welches nach dem Test einfach verworfen wird. Zusätzlich ist das "Mocken" des File Systemes auch noch schneller. 


```php
<?php
namespace My
App;

use RuntimeException;

class CacheWarmer
{
  private $cacheDirectory;
  
  public function __construct(string $cacheDirectory)
  {
    $this-cacheDirectory = $cacheDirectory;
  }
  
  public function warmUp() 
  {
    if (!is_dir($this->cacheDirectory) && !mkdir($this->cacheDirectory))  {
      throw new RuntimeException('Could not create cache directory!');
    }
    // ...
  }
}
```
Für diese Klasse würde ein Test mit vfsStream in etwa so aussehen:


```php
<?php
namespace My
App
Test;

use My
App
CacheWarmer;
use org
bovigo 
vfs
vfsStream;
use PHPUnit
Framework
TestCase;

class CacheWarmerTest extends TestCase
{
    private $root;

    public function setUp()
    {
        $this->root = vfsStream::setup();
    }

    public function testCanCreateCacheDirectoryOnWarmUp()
    {
        $cacheWarmer = new CacheWarmer($this->root->url() . '/cache');
        $cacheWarmer->warmUp();
        $this->assertTrue($this->root->hasChild('cache'));
    }
}
```
Wenn nun jedoch ein Unit Test die ''CacheWarmer::warmUp()'' Methode verwendet, ist es sinnvoll nicht jedes Mal das Virtuelle File System zu erstellen. Stattdessen verwendet man den von PHPUnit mitgebrachten [MockBuilder](https://phpunit.de/manual/current/en/test-doubles.html). Mit diesem kann man Klassen Mocken und Methodenrückgabewerte verändern (und noch vieles mehr).
```php
<?php
namespace My
App;

use RuntimeException;

class PDFCreator 
{
  // ...
  public function execute(string $htmlFile, string $pdfFile) 
  {
    $output = [];
    $returnValue = 0;
    exec(sprintf('/usr/bin/wkhtmltopdf %s %s', $htmlFile, $pdfFile), $output, $returnValue);
    
    if ($returnValue !== 0) {
      throw new RuntimeException('Could not create PDF File');
    }
    
    return $output;
  }
}
```
```php
<?php 
namespace My
App
Test;

use My
App
PDFCreator;
use PHPUnit
Framework
TestCase;

class PDFCreatorTest extends TestCase
{
  use 
phpmock
phpunit
PHPMock;
  
  /**
   * test exec() method
   */
  public function testExecuteReturnsAnExceptionOnFailure() 
  {
    $exec = $this-getFunctionMock('My
App', 'exec');
    $exec->expects($this->once())->willReturnCallback(
      function ($command, &$output, &$returnValue) {
        $this->assertEquals('/usr/bin/wkhtmltopdf file.html file.pdf', $command);
        
        $output = ['failure'];
        $returnValue = 1;
      }
    );
    
    $pdfCreator = new PDFCreator();
    $pdfCreator->execute('file.html', 'file.pdf');
  }
}
```