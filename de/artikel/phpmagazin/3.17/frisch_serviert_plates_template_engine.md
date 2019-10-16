## Frisch serviert
Die relativ junge Library[Twig](/http/**twig.sensiolabs.org/) oder [Smarty](http://www.smarty.net/) zu entscheiden:


  * Einfachere Syntax für Personen, welche die PHP-Syntax nicht kennen
  * Die Syntax der Templatesprache hat den Fokus auf der Ausgabe von Daten
  * Hohe Wiederverwendbarkeit
  * Durch den Sandbox Modus kann man [Session-Hijacking](/wiki/hacking/session-hijacking) und [SQL Injection](/wiki/hacking/sql-injection) verhindern
  * Automatisches Escapen verhindert [Cross Site Scripting](/wiki/hacking/xss)

Der Nachteil bei den genannten Template-Engines ist, dass der Code zuerst kompiliert und in nativen PHP-Code gerendert werden muss.





Template-Engines wie Plates oder [[https://framework.zend.com/manual/2.4/en/modules/zend.view.quick-start.html|Zend
View]] welche mit nativem PHP-Code Templates bauen haben gegenüber den anderen Template-Engines folgende Vorteile:


  * PHP-Entwickler müssen keine neue Syntax lernen
  * Unerfahrene Webentwickler können die Syntax, welche sie lernen müssen auch für andere Kontrollstrukturen verwenden
  * Keine Kompilierung
  * Einfaches [Escaping](/wiki/escaping)

Leider haben die Template-Engines, welche in nativem PHP-Code geschrieben sind keinen Sandbox Modus.





### Installation und Beispiel
Um Plates installieren zu können braucht man mindestens [PHP 7.0](http://www.php.net/) und [Composer](/installationen/composer).


Danach gibt man im Root Verzeichnis des Projektes folgenden Befehl ein:
```
$ composer require league/plates
```
Es wird automatisch eine ** Datei sowie ein **Ordner erstellt. Danach erstellt man im **Ordner eine ** Datei. Diese Datei ist wie folgt aufgebaut:
```php
<?php
// load Plates engine
use League
Plates
Engine;

// Define project root folder
define('PROJECT_ROOT', realpath(_DIR_ . "/"));

// load autoload.php (file from composer, load this in every file you need something from composer)
require_once PROJECT_ROOT . '/vendor/autoload.php';

// Make engine object
$engine = new Engine();

// Define fileendings
$engine->setFileExtension('phtml');

// Define template folder
$engine->addFolder('pages', PROJECT_ROOT . '/templates/pages');

// Process simple-page.phtml
$template = $engine->make('pages::simple-page');

// Output (render template)
// You can hand over an array with values to render into the template
echo $template->render(
  [
    'title' => 'Plates - Make PHP Template Rendering Great Again'
  ]
);
```
Dies ist nun die Basis, auf der man aufbauen kann. Jetzt braucht man noch die Datei, welche gerendert werden soll.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Simple escaping with $this->e()-->
        <?= $this->e($title) ?>
    </head>
    <body>
        <h1><?= $this->e($title) ?></h1>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
            et ea rebum. 
        </p>
    </body>
</html>
```
In dem Beispiel wird die Short-Echo-Syntax ** in Kombination mit der Escape Funktion $this->e() verwendet.


### Mehrstufige Layouts
Wie sich vermuten lässt, ist das ** Layout nicht die beste Wahl. Der Grund dafür ist, dass der ganze Template-Code in einer Datei liegt und die Wiederverwendbarkeit ist relativ gering. Um dem entgegenzuwirken kann man Teil-Layouts erstellen, welches je einen wichtigen Teil wie die Navigation oder den Footer beinhaltet. Diese Teile kann man dann mittels <?= $this->fetch('layouts::header') ?> laden. Wichtig ist, dass man in der ** zuerst noch einen weiteren Template-Pfad mittels $engine->addFolder() bestimmt, in dem dann die Layout Dateien abgelegt sind.


Man kann auch Sektionen rendern mittels <?= $this->section('content') ?>. Der Content kann dann dynamisch in das Template hereingeladen werden.


Der Code für eine Seite, welche dynamisch in die Sektion "content" geladen werden kann, sieht wie folgt aus.
```php
<?php
$this->layout(
  // Define default layout
  'layouts::default',
  // Hand over values to render into the page
  [
    'title' => $title,
    'page' => $pages
  ]
);
?>
<h1><?= $this->e($title) ?></h1>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
  et ea rebum. 
</p>
```



### Weitere Features
Plates bietet weitere Möglichkeiten. Man kann relativ einfach eine Extension schreiben. Standardmässig sind bereits sogar zwei Extensions vorinstalliert:
  * [URI-Exstension](http://platesphp.com/extensions/uri/)
  * [Asset-Extension](http://platesphp.com/extensions/asset/)

Plates lässt sich auch zusammen mit den Frameworks Zend, Slim und Laravel verwenden.





### Fazit
Die Verwendung von Plates ist für einen PHP-Entwickler sehr einfach. Plates empfiehlt sich jedoch auch für andere Webentwickler, welche sich nicht sehr gut mit der PHP-Syntax auskennen, da man durch das erlernen von PHP auch die Kontrollstruktur einfacher erstellen kann. Auch spart es am Memory-Load, da eine native PHP Tempalte-Engine den Code nicht erst kompilieren muss.


Grundsätzlich bleibt die verwendung von Plates jedoch eine Geschmackssache.
