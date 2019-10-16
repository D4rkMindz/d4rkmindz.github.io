## Mastering Object-Oriented PHP
Seit PHP 4 gibt es ein Objektmodell in PHP. Richtige Objektorientierung kam dann erst mit PHP 5. Vor PHP 5 bestand nie das Verlangen nach einer Objektorientierung. PHP war eine Prozedurale ("[Spaghetti Code](/wiki/programmiersprachen/php/function)") Skriptingsprache. Viele Leute, welche damals PHP verwendet haben, waren nicht einmal Programmierer.


Als Objektorientierung in PHP eingeführt wurde, wurden auch die entsprechenden Begriffe immer wie wichtiger. Hier ein paar davon:


  * **Class** - Code, welcher das Verhalten eines Objektes spezifiziert. Auch definiert der Begriff ''class'' in PHP eine neue Klasse
  * **Objekt** - Eine Instanz einer Klasse. "Non-Static" Klassen müssen zuerst mit dem Schlüsselwort ''new'' instantiiert werden, bevor man diese Verwenden kann.
  * **Property** - Eine Variable, welche in einer spezifischen Klasse gespeichert ist (kann auch von Aussen abgerufen werden).
  * **Method** - Eine Funktion einer Klasse (deutsch: Methode), welche in einer spezifischen Klasse gespeichert ist (kann auch von Aussen abgerufen werden).

Neben diesen Schlüsselbegriffen gibt es noch ein paar wichtige Begriffe im Zusammenhang mit PHPs Object-Model:


  * Der Begriff ''public'' erstellt eine Variable oder Methode, welche von jeder Instanz des Objektes aufgerufen werden kann.
  * ''protected'' stellt sicher, dass jegliche Variablen oder Methoden nur von abgeleiteten (vererbten, engl.: inherited) Klassen und der Klasse, welche die Variable oder Methode definiert aufgerufen werden können.
  * Wenn eine Variable oder Methode nur in der Klasse, welche sie definiert, sichtbar sein soll, dann muss man diese auf ''private'' setzen. Der Aufruf einer privaten Variable/Methode in der selben Klasse, jedoch auf eine andere Instanz ist somit auch möglich (siehe Codebeispiel unterhalb).
  * In PHP 4 gab es noch die Möglichkeit Instanzvariablen mittels ''var'' zu erstellen, jedoch verursacht diese [Art der Erstellung](https://stackoverflow.com/questions/1206105/what-does-php-keyword-var-do) von Variablen eine ''E_STRICT''-Warnung seit PHP 5.3.

```php
class CustomerId
{
  private $id;
  
  public function __construct($id)
  {
    $this->id = $id;
  }
  
  public function equals(CustomerId $customerId)
  {
    return $this->id == $customerId->id;
  }
  
  public function __toString()
  {
    return (string)$this->id;
  }
}
```

Auf der [Webseite von PHP](http://php.net/manual/de/language.oop5.visibility.php) wird dies noch einmal genauer erklärt.





Wie in vielen Programmiersprachen gibt es auch in PHP den Begriff von ''this''. Jedoch wird in PHP ''$this'' und nicht ''this'' verwendet, das ''$this'' eine Variable ([Pseudovariable](https://en.wiktionary.org/wiki/pseudovariable)) ist. Variablen werden in PHP bekanntermassen mit einem ''$''-Zeichen Angeführt.


Im Gegensatz zu JavaScript, bei dem ''this'' auf den [Execution Context](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e) verweist, repräsentiert [$this](/wiki/programmiersprachen/this) in PHP die Instanz des aufgerufenen Obejktes. Meistens ist dies die Klasse selbst sowie deren ''parent''-Klassen. Jedoch ist es auch möglich, dass ''$this'' nicht auf das Objekt, welchem die Methode oder Variable gehört, referenziert. Dies ist der Fall, wenn die Methode [statisch](http://php.net/manual/de/language.oop5.basic.php) aus dem Kontext eines anderen Objektes aufgerufen wird.





Elternklassen (''parent''-Klassen) sind Klassen von welcher die Originalklasse abgeleitet (''extended'', ''inherited'') ist. Eine Ableitung bedeutet, dass alle ''public'' und sogar ''protected'' Properties  und Methoden einer Klassen in der Instanz selbst über ''$this'' verfügbar sind.





Um auf eine Property oder Methode eines Objektes zu verweisen braucht man den Object-Operator ''->''. So kann man beispielsweise eine Property der Klasse mittels ''$instance->property'' abrufen. Der Aufruf einer Methode erfolgt ebenfalls mit dem gleichen Operator ''$instance->method($parameter)''.





In PHP 5.3 wurden dann endlich auch Namespaces eingeführt. Diese ermöglichen die Strukturierung von der Verschiedenen Klassen einer Applikation über den Namespace-Operator ''
''. So kann eine Klasse ''UserModel'' im Namespace ''
App
Model'' abgelegt sein. Klassen im gleichen Namespace müssen nicht mittels ''use''-[Operator ](https://secure.php.net/manual/de/language.namespaces.importing.php) importiert werden. Um auch auf Dateiebene eine gute Struktur zu haben gibt es von PHP-FIG zwei Standards zu diesem Thema: [PSR-0: Autoloading Standard](https://www.php-fig.org/psr/psr-0/) und [PSR-4: Autoloader](https://www.php-fig.org/psr/psr-4/).





Konstanten sind Properties welche über die ganze Zeit der Ausführung von PHP unverändert bleiben. Eine Klassenkonstante wird mit dem Schlüsselwort ''const'' definiert. Konstanten werden immer (laut Konvention) in ALL_UPPERCASE geschrieben. Eine Kleinschreibung ist jedoch auch möglich (''but just because you can doesn't mean you should'').





Es kann einmal passieren, dass man folgenden Fehler sieht: ''T_PAAMAYIM_NEKUDOTAYIM''. Das Paamayim Nekudotayim (hebräisch) ist der Dopppel-Doppelpunkt-Operator (::). Diesen verwendet man um statische Methoden eines Objektes aufzurufen.


```
<?php
// Namespace definition
namespace 
App
Model;

// import of a class without the current namespace
use 
App
Database
Connection;

// definition of the class that inherits all public and protected methods of ParentModel
class UserModel extents ParentModel
{
  // definition of a constant
  const MY_CONSTANT = 'Some value';
  public $canEveryoneSee = 'This string is accessible from everywhere';
  protected $onlyForInheritants = 'To see this string you have to extend from this class or any of its child classes';
  private $nobodyCanSeeThis = 'You can not see this Value';
  
  // definition of a public class method. public can be replaced with protected or private
  public funtion doSomething(string $parameter): string {
    // Concatenate $parameter with the value in the property canEveryoneSee and nobodyCanSeeThis 
    // (possible because nobodyCanSeeThis is within the same object)
    $parameter .= $this->canEveryoneSee . $this->nobodyCanSeeThis;
    return trim($parameter);
  }
  
  public static function echoSomething() {
    echo $this->onlyForInheritants  . UserModel::MY_CONST;
  }
}

// use paamayim nekudoayim to call static method of UserModel
UserModel::echoSomething();
```

### Visibility Scopes und Vererbung
Wie vorher bereits erläutert gibt es mehrere Visibility Scopes (Sichtbarkeitsbereiche) wie ''public'', ''protected'' oder ''private''. Diese definieren, ob und wie eine Property, respektive eine Methode von aussen aufgerufen werden kann. Zusätzlich zu diesen Möglichkeiten die Sichbarkeit von Properties und Methoden zu konfigurieren gibt es auch die Option dass man die Abgeleitete Kindklasse dazu zwingen kann eine Methode mit genau definierten Parametern und Visibility Scope zu implementieren.


[Abstrakt](http://php.net/manual/de/language.oop5.abstract.php) definierte Klassen dürfen nicht instanziiert werden. Jede Klasse, die wenigstens eine abstrakte Methode enthält, muss ebenso abstrakt sein. Abstrakt definierte Methoden deklarieren nur die Signatur der Methode - sie können nicht die Implementierung definieren. Wenn eine abstrakte Klasse abgeleitet wird, müssen alle in der Deklaration der Elternklasse abstrakt bezeichneten Methoden durch das Kind definiert werden.





Dies passiert mit dem Schlüsselwort ''abstract''. Definiert man die Klasse selbst mittes ''abstract class <classname>'' als Abstrakt. Danach kann man Methoden ebenfalls als Abstrakt definierten: ''abstract protected function <method_name>(<method_parameter_list>): <method_return_type>''. Eine abgeleitete Klasse wird nun gezwungen diese Methode mit genau diesen Werten, Visibility Scopes und Rückgabetypen zu implementieren.


```
abstract class Parent 
{
  abstract public function doSomething(string $parameter): array;
}

class ChildOne extends Parent
{
  // this will work
  public function doSomething(string $parameter): array {
    return [$parameter];
  }
  // this will not work
  protected funtion doSomething($parameter): string {
    return $parameter;
  }
}
```
Bei diesen Einschränkungen durch ''protected'' oder sogar ''private'' kommen manche Entwickler auf den Gedanken "Hey, wieso mache ich nicht alles ''public''?". Die Antwort ist: mittels der Visibility Scopes schützt man sich selbst und auch andere Entwickler vor Missbrauch. So kann man Methoden definieren, welche nur in einer Klasse selbst verwendet werden sollen.


Gerade wenn man eine Library oder ein Plugin schreibt ist dies sehr sinnvoll.





### Traits
Ein Trait ist ein Codeschnipsel, welches man in einer oder mehrerer Klassen mittels use direkt implementieren kann. Diese Traits sind nicht [typhintable](http://php.net/manual/en/language.oop5.typehinting.php). Eine korrekte Implementierung von Interfaces ist hier gefragt.


Traits sind heutzutage eher ein ''don't'' als ein ''do''.


```
trait SayHelloWorld 
{
  public $property = 'a property';

  function sayHelloWorld() {
    echo 'Hello World!';
  }
  
  abstract public function saySomething();
}

class HelloWorld 
{
  use SayHelloWorld;

  // defined in the trait
  public function saySomething() {
    echo $this->property; // echoes 'a property' from the trait
    $this->sayHelloWorld();
  }
}
```

### Magische Methoden
Magische Methoden sind Methoden welche durch gewisse Aktionen automatisch aufgerufen werden. Wenn man beispielsweise probiert eine Klasse als Methode aufzurufen wird der Code in der magischen Methode ''̲ ̲ invoke()'' aufgerufen.
```
<?php
class onlyMagicMethods {
  public function __construct() {
    // Returns the instantiated object
  }
  public function __destruct() {
    // Run right before the object is destroyed
  }
  public function __call($name, array $arguments =
  array()) {
    // Called when accessing an inaccessible method in
    // an object
  }
  public static function __callStatic($name, array
  $arguments = array()) {
    // Called when accessing an inaccessible static
    // method in an object
  }
  public function __get($name) {
    // Governs the return of inaccessible properties
    // in the object
  }
  public function __set($name, $value) {
    // Governs the setting of inaccessible properties
    // in the object
  }
  public function __isset($name) {
    // Returns true if the property is set; false if
    // not.
  }
  public function __unset($name) {
    // Invoked when unset() is used on a property.
  }
  public function __sleep() {
    // When an object is serialized, this code is
    // executed.
  }
  public function __wakeup() {
    // Used when an object is unserialized
  }
  public function __toString() {
    // Used when an object is cast to a string, by
    // print, echo or (string)
  }
  public function __invoke() {
    // Used when an object is used like a function.
    // Used mainly in anonymous functions.
  }
  public static function __set_state(array $properties =
  array()) {
    // Called by var_export(), and can be used to set
    // state on an object
  }
  public function __clone() {
    // Called when an object is cloned with
    // $obj2 = clone $obj1
  }
}
```

### Typehinting
Typehinting ist, wenn man einer Variable einen klaren Datentyp (Objekttyp) zuweist. Dies ist in Java bereits seit Beginn so. Eine Property wird in Java beispielsweise so gesetzt:


```
public class JavaExample {
  private String myString;
  
  public void setString(String stringToSet) {
    this.myString = stringToSet;
  }
  
  public String getString() {
    return this.myString;
  }
}
```
Falls hier ein anderer Datentyp als ein String übergeben wird schlägt das Programm fehl. Das gleiche ist seit PHP 5.3 auch möglich. PHP wird einen Fatal Error (E_ERROR) ausgeben, wenn dieser Datentyp nicht eingehalten wird. Neben den [primitiven Datentypen](/wiki/programmiersprachen/php/datentypen) kann man auch eigens erstellte Klassen (Objekte) typehinten.
```
class PhpExample 
{
  // still impossible on object properties
  private $string;
  
  // but works on method parameters and return types
  public setString(string $stringToSet): void {
    $this->string = $stringToSet;
  }
  
  public getString(): string {
    return $this->string;
  }
}
```
Jedoch muss man bedenken, dass Klassen, welche von einer anderen Klasse vererbt sind ebenfalls als die Elternklasse akzeptiert werden.


Folgender Code würde als keinen Fehler proudzieren.


```
class MyClass {}
class MySecondClass extends MyClass {}
class MyThirdClass extends MySecondClass {}

class Tester 
{
  public function __construct(MyClass $class) {
    echo get_class($class);
  }
}

$class = new MyThirdClass();
// this is valid and will echo 'MyThirdClass'
new Tester($class); 
```
Neben diesen Methoden kann man Entwicklerkollegen (oder auch fremde Entwickler, falls man eine Library o. Ä. entwickelt hat) dazu zwingen genau ein spezifisches Objekt zu verwenden.


Dies kann in vielen Situationen starke Kopfschmerzen vermeiden.





### Abstraktion
Durch Abstraktion kann man seinen Code sehr stark verschönern und lesbarer machen. Gerade wenn es um die Einhaltung der [SOLID](/wiki/programmiersprachen/php/solid)-Prinzipien geht ist dies besonders hilfreich. Auch sollte man sich an folgendes Prinzip halten: ''one class, one job'' (single responsibility principle)


Auch der Aufbau einer Applikation mit [Model View Controller (MVC)](/wiki/programmiersprachen/php/mvc) wird durch Abstraktion von Code ermöglicht. Bei der Umsetzung von MVC sollte man darauf achten, dass man [skinny controllers and fat models](http://de.slideshare.net/damiansromek/thin-controllers-fat-models-proper-code-structure-for-mvc) hat.


Die Implementierung von Interfaces ermöglicht ebenfalls schöneren Code. Man kann sich dank der Implementierung eines Interfaces sicher sein, dass eine Methode immer genau gleich heisst, egal ob diese jetzt in einer MysqlAdapter oder PostgresqlAdapter Klasse ist.


Ein [Interface](http://php.net/manual/de/language.oop5.interfaces.php) lässt sich als Vertrag sehen, welcher die Klasse dazu zwingt eine **öffentliche** Methode mit genauen Parametern und Rückgabetypen zu implementieren.





Auch das Testing wird durch das Erstellen von Mocks, welche Interfaces implementieren einfacher gestaltet. Eine Methode, welche im Interface hinzukommt muss automatische in den Implementierten Klassen sowie im Mock angepasst werden.


Wichtig ist, dass man bei Abstraktion von Code immer daran denkt, dass man dies nicht sofort perfekt lernen kann. Eine gute Code Abstraktion wird über Jahre hinweg entwickelt.


Jedoch sollte man, genau wie Spaghetticode, auch Lasagnacode vermeiden. Lasagnacode ist Code, welche durch übermässige Abstrahierung entstanden ist. Bei Lasagnacode gibt es sehr viele (teiweise unnütze) Layer in einer Applikation.





### Anonyme Funtktionen
Eine Anonyme Funktion ist eine Funktion welcher einer Variable zugewiesen wird. Dies geschieht wie folgt:


```
// create anonymous function
$myFunction = function (string $string) {
  echo $string;
};

// invoking the anonymous function
$myFunction('Hello World!'); // echoes 'Hello World!'
```
Wenn man jetzt die Variable ''$myFunction'' mittels ''var_dump()'' analysieren würde, würde man bemerken, dass diese Variable eine Instanz der Klasse ''Closure'' ist.


Ein Closure macht intern dann Gebrauch der magischen Methode ''̲ ̲ invoke()''. Der grösste Nachteil der Verwendung von Anonymen Funktionen, also von Closures ist, dass man diese fast nicht testen kann. Deshalb sollte man Closures nur für kleine, lokale Funktionen verwenden.





### Exceptions
Um ein Programm zu Stoppen gab es vor PHP 5 keine kluge Möglichkeit dies zu erreichen. Man konnte eventuell bewusst eine Error einbauen.


Seit PHP 5 gibt es nun das Exception-Modell. Das Ziel dieses Modells ist, dass man den Flow eines Programms noch besser steuern kann.


Exceptions sind für ganz spezielle, unerwartete Situationen. Wenn man beispielsweise eine Klasse wie folgt instantiieren möchte, jedoch einen fehlerhaften Wert übergibt, kann man die Ausführung des Programms verändern, indem man eine Exception mittels ''throw'' wirft.


Falls eine Exception nicht (mittels eines ''try {  } catch () { }''-Blocks) gefangen wird, wird die Ausführung des Skripts beendet.


Um die Beendung zu Verhinden kann man einen Codeblock im ''catch'' Block definieren, welcher im Fehlerfall ausgeführt wird. Dies kann beispielsweise für das Retournieren einer 500-Response verwendet werden.


```
class Tester
{
  public function __construct($var) {
    if (empty($var)) {
      throw new Exception("var is not defined");
    }
  }
}

try {
  $tester = new Tester();
  // the code below won't be executed
  if ($tester instanceof Tester) {
   echo 'Ja';
  }
  // typehint to catch an Exception matching the Exception class (nearly any Exception)
} catch (Exception $e) {
  echo 'there was an exception';
}
```
Der gezeigte Codeblock würde jetzt in diesem Fall 'there was an exception' anzeigen und nicht 'Ja', obwohl ''$tester'' eine Instanz von ''Tester'' ist.


Jeglicher Code nach dem Werfen einer Exception wird nicht mehr ausgeführt.


Exceptions sind eine sehr mächtiges Tool. Jedoch muss man sich dessen bewusst sein, ansonsten können Exceptions sehr schnell zu ungewolltem Verhalten führen.





### Autoloading
Da PHP-Dateien während der Ausführung kompiliert (interpretiert) werden, muss man aufpassen, welche Datei man wann lädt, da es sonst zu unnötigem Verbrauch von Rechenkapazitäten kommt. Dank [Composer](/installationen/composer) ist dieses Thema nicht mehr so wichtig wie es früher einmal war, jedoch ist es trotzdem gut zu wissen, wie das Autoloading funktioniert.


Früher (PHP 4) konnte man einer Klasse eine magische Methode ''̲ ̲ autoload()'' hinzufügen, und in dieser Methode definieren, wie man diese Datei lädt. Diese Methode ist inzwischen veraltet und wurde durch ''spl_autoload_register()'' ersetzt. [Diese Methode](http://php.net/manual/de/function.spl-autoload-register.php) registriert eine Funktion, welche das Laden einer (oder mehrere) Datei(en) handelt. Zusätzlich kann man mehrere funktionen als Autoloader registrieren. Es werden alle in der Reihenfolge abgearbeitet, wie diese registriert wurden (FIFO).





### Gutes Objekt Orientiertes "Verhalten"
Jeder kann maschinenlesbaren Code schreiben. Schwieriger ist es jedoch Code zu schreiben, welcher auch von Menschen verstanden werden kann. Auch Fehleranfälligkeiten werden damit verhindert. Hier ein paar wichtige Regeln dazu:


  - Vermeide statische Methoden und Properties (auch Klassenkonstanten sind statisch(!), jedoch sind diese best practices, siehe Codebeispiel)
  - Retourniere immer einen Wert
  - Lasse den Code so schnell es geht fehlschlagen (wenn möglich im Konstruktor)
  - Erhöhe die Testbarkeit
  - Verschiebe die Business- und Validierungslogik in den Modellayer
  - Verwende Libraries (OpenSource) für dein Projekt
  - Verwende Interfaces um die Testbarkeit zu erhöhen
  - Werfe eine Exception wenn etwas unerwartetes eintritt
  - Werfe eine Exception wenn etwas logisches, jedoch unmögliches erfordert ist (bsp.: eine Datenbankabfrage soll ohne bestehende Verbindung gemacht werden)
  - Logge, aber logge nur gute Informationen

```
// bad
if ($genderType == 1) {
  // do something...
}

// good
class GenderTypes {
  const MEN = 1;
  const WOMAN = 2;
}

if ($genderType == GenderTypes::MEN) {
  // do something...
}
```

Wenn man sich an diese paar Regeln hält wird es für sich selbst (wenn man eventuell mal Code von vor einem Jahr liest) sowie für die Entwicklerkollegen um einiges einfacher den Code zu verstehen. Die Codequalität steigt und jeder ist zufrieden.





### Du, der Meister
Es ist noch nie ein Meister vom Himmel gefallen. Ganz besonders nicht in der Informatik. Wenn man besseren Code entwickeln möchte muss man auch etwas dafür machen.


Zusätzlich stellt sich dann auch die Frage, was die Definition von Meister ist. Allgemein lässt sich sagen, dass man im Bereich der Entwicklung nie aus gelernt ist. Auch wird man nie alleine zum Meister. Hilfe holen ist normal und das macht jeder. Es ist kein Zeichen von Schwäche, sich Hilfe zu holen.


Folgende Punkte sollte man auf dem Weg zum "Meister" beachten:
  * Lese sehr sehr viel Code
  * Schreiben noch mehr Code
  * Lasse deinen Code von einem Meister durchlesen
  * Behebe Bugs in unbekannten Sprachen und Systemen

Wenn man diese Punkte einhält, kommt man schneller ans Ziel. Jedoch gibt es keine Abkürzung für den Lerneffekt. Man muss Fehler machen um vorwärts zu kommen.





### Fazit
Es sollte von jedem Entwickler erwartet werden, dass dieser perfekten Code abliefert. Dies ist jedoch unmöglich. Ein guter Entwickler sollte nach der Philosophie leben, dass Code niemals perfekt ist. Das ist auch gut so, sonst würde man nie zum Ziel kommen.


Auch sollte man sich bewusst sein, dass Best Practices "nur" Best Practices sind und dementsprechend Tipps, welche zu sauberem, schönen Code führen. Niemand ist perfekt und jeder kann nicht immer und überall den besten Code schreiben. Manchmal steht man unter Zeitdruck und kann keinen schönen Code schreiben. Wichtig ist dann, dass man trotzdem das Beste herausholt.

