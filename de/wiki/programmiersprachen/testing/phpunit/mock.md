## Mock
"Mocks are objects that register calls they receive. In test assertion we can verify on Mocks that all expected actions were performed."





//Mocks sind Objekte, welche bekommene Aufrufe registrieren. In einer Test-Behauptung (Assertion) kann man an Hand von Mocks überprüfen, ob alle erwarteten Aktionen (Methoden) ausgeführt wurden.


[Dev.to](https://dev.to/milipski/test-doubles---fakes-mocks-and-stubs)//





Wenn man Code testen möchte welcher z. B. keinen Return-Wert hat, dann kann man Mocks brauchen um zu registrieren, ob der gewünschte Code ausgeführt wurde. Ein Praxisbeispiel wäre das senden einer Email. Man nicht bei jedem Test eine Email versenden. Man kann sich dann auf das Prüfen des Aufrufs der Mailversandsmethode reduzieren.


![No alt text available](/wiki/programmiersprachen/testing/phpunit/unit-testing-mock.png)


### Mocking in PHP
Im [PHPUnit Framework](https://phpunit.de/manual/current/en/test-doubles.html#test-doubles.mock-objects) kann man auch mocken. Folgende Klassen (Subject, Observer) sehen wie folgt aus:


```php
<?php
use PHPUnit
Framework
TestCase;

class Subject
{
    protected $observers = [];
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function attach(Observer $observer)
    {
        $this->observers[] = $observer;
    }

    public function doSomething()
    {
        // Do something.
        // ...

        // Notify observers that we did something.
        $this->notify('something');
    }

    public function doSomethingBad()
    {
        foreach ($this->observers as $observer) {
            $observer->reportError(42, 'Something bad happened', $this);
        }
    }

    protected function notify($argument)
    {
        foreach ($this->observers as $observer) {
            $observer->update($argument);
        }
    }

    // Other methods.
}

class Observer
{
    public function update($argument)
    {
        // Do something.
    }

    public function reportError($errorCode, $errorMessage, Subject $subject)
    {
        // Do something
    }

    // Other methods.
}
?>
```
Der Test, welcher überprüft ob eine Interaktion zwischen Observer und Subject stattgefunden hat sieht wie folgt aus:
```php
<?php
use PHPUnit
Framework
TestCase;

class SubjectTest extends TestCase
{
    public function testObserversAreUpdated()
    {
        // Create a mock for the Observer class,
        // only mock the update() method.
        $observer = $this->getMockBuilder(Observer::class)
                         ->setMethods(['update'])
                         ->getMock();

        // Set up the expectation for the update() method
        // to be called only once and with the string 'something'
        // as its parameter.
        $observer->expects($this->once())
                 ->method('update')
                 ->with($this->equalTo('something'));

        // Create a Subject object and attach the mocked
        // Observer object to it.
        $subject = new Subject('My subject');
        $subject->attach($observer);

        // Call the doSomething() method on the $subject object
        // which we expect to call the mocked Observer object's
        // update() method with the string 'something'.
        $subject->doSomething();
    }
}
?>
```