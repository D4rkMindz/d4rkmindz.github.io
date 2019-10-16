## Stub
"Stub is an object that holds predefined data and uses it to answer calls during tests. It is used when we cannot or don’t want to involve objects that would answer with real data or have undesirable side effects."





//Ein Stub ist eine Objekt, welches vordefinierte Daten enthält und diese zum Antworten auf Aufrufe durch den Nutzer verwendet. Es (Stub) wird verwendet wenn wir Objekte, welche mit echten Daten antworten oder unerwünschte Nebeneffekte ereugen würden, nicht verwenden können oder wollen. 


[Dev.to](https://dev.to/milipski/test-doubles---fakes-mocks-and-stubs)//





Ein Beispiel, welches Daten aus einer Datenbank holen muss und damit auf einen Methodenaufruf antwortet. Anstatt mit dem echten Objekt zu antworten wird ein Stub mit vordefinierten Daten retourniert.


![No alt text available](/de/wiki/programmiersprachen/testing/phpunit/unit-testing-stub.png)



```java
public class GradesService {

   private final Gradebook gradebook;

   public GradesService(Gradebook gradebook) {
       this.gradebook = gradebook;
   }

   Double averageGrades(Student student) {
       return average(gradebook.gradesFor(student));
   }
}
```
Anstatt die Datenbank mit den echten Noten abzufragen, werden die Werte, welche geliefert werden, bereits vordefiniert. Dabei werden genau soviel Daten vordefiniert, wie gebraucht werden.


```java
public class GradesServiceTest {

   private Student student;
   private Gradebook gradebook;

   @Before
   public void setUp() throws Exception {
       gradebook = mock(Gradebook.class);
       student = new Student();
   }

   @Test
   public void calculates_grades_average_for_student() {
       when(gradebook.gradesFor(student)).thenReturn(grades(8, 6, 10)); //stubbing gradebook

       double averageGrades = new GradesService(gradebook).averageGrades(student);

       assertThat(averageGrades).isEqualTo(8.0);
   }
}
```



### Stubs in PHP
Im [PHPUnit Framework](https://phpunit.de/manual/current/en/test-doubles.html#test-doubles.stubs) lassen sich sehr einfach Stubs erzeugen. Folgender Code zeigt den Test der Klasse "SomeClass". Die Methode "doSomething" macht irgendetwas. Jedoch wird jetzt im Test definiert, dass sie 'foo' retourniert. Danach wird der Test bestanden.


```php
<?php
use PHPUnit
Framework
TestCase;

class StubTest extends TestCase
{
    public function testStub()
    {
        // Create a stub for the SomeClass class.
        $stub = $this->createMock(SomeClass::class);

        // Configure the stub.
        $stub->method('doSomething')
             ->willReturn('foo');

        // Calling $stub->doSomething() will now return
        // 'foo'.
        $this->assertEquals('foo', $stub->doSomething());
    }
}
?>
```
