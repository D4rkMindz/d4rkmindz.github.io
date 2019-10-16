## Database testing
In PHP oder Java kann man Datenbanken mittels DbUnit testen. DbUnit in PHP jedoch eine Erweiterung von PHPUnit. Mit DbUnit kann man folgende Datenbanken vom folgenden Typ testen:


  - MySQL
  - PostgreSQL
  - Oracle
  - SQLite



### Tests=
Wenn man Datenbankopertationen testen möchte, kann man dafür logischerweise nicht die produktiv Datenbank verwenden. Auch dürfen die Tests sich nicht gegenseitig beeinflussen. Dies bedeutet, dass nach jedem Test die Datenbank bereinigt werden muss (alle Daten zurücksetzen). Ein Datenbanktest erfordert deshalb vier Schritte:


  * Fixture erstellen
  * Datenbanktest durchführen
  * Resultate überprüfen
  * Daten bereinigen



> Das Fixture ist der Zustand indem die Applikation für den Test sein muss



### Datenbank bereinigung
PHPUnit bereinigt die Datenbank automatsch mittels TRUNCATE. Eine Alternative dazu ist auch, jedes mal das Datum der lezten Änderung einzutragen und danach alle Einträge, welche nach dem Startdatum verändert wurden, löschen. Diese Methode ist jedoch fehleranfälliger, aber effizienter und ressourcensparender.





### Fixture aufsetzen
PHPUnit übernimmt das setzen der Werte in die entsprechenden Tabellen. Die Daten werden über ein Array übergeben.





### Testen=
Nun testet man die verschiedenen Methoden und überprüft deren Resultate. Anschliessend erfolgt wieder die Bereingung der Daten.





### Methoden implementieren
In den Datenbanktests gibt es zwei wichtige Methoden, welche von DbUnit benötigt werden.





#### getConnection 
Diese Methode liefert DbUnit die Datenbankverbindung für die Tests. Diese wird gebraucht um die TRUNCATE oder andere Funktionen auszuführen. Diese Methode muss in jedem Test vorkommen. Um jedoch redundanten Code zu vermeiden kann man die Datenbanktests von einer Basis Testklasse ableiten (z. B. DbBaseTest.php)





#### getDataSet
In dieser Funktion muss die Datenbank, wie sie vor dem Test aussehen muss, übermittelt werden. Diese Daten können mittels XML oder eines Arrays übermittelt werden.





#### XML DataSet
Das XML-DataSet muss mittels der createFlatXmlDataSet($path) Funktion innerhalb der getDataSet() Methode geladen werden. 


```php
<?php
use PHPUnit
Framework
TestCase;
use PHPUnit
DbUnit
TestCaseTrait;
 
class DbUnitTestCase extends TestCase
{
    use TestCaseTrait;
 
    public function getDataSet()
    {
        // xml filename is not predefined
        return $this->createFlatXmlDataSet('path/to/xmlFixture.xml');
    }
}
```
```xml
?xml version="1.0" ?>
<dataset>
    <table name="guestbook">
        <column>id</column>
        <column>username</column>
        <column>firstname</column>
        <column>lastname</column>
        <column>created</column>
        <row>
            <value>1</value>
            <value>JonSnow1</value>
            <value>Jon</value>
            <value>Snow</value>
            <value>2010-04-24 17:15:23</value>
        </row>
        <row>
            <value>2</value>
            <value>QueenCersei</value>
            <value>Cersei</value>
            <value>Lannister</value>
            <value>2010-04-26 12:14:20</value>
        </row>
        <row>
            <value>3</value>
            <value>Bloodhound</value>
            <value>Sanor</value>
            <value>Clegane</value>
            <value>2011-09-26 08:04:30</value>
        </row>
    </table>
</dataset>
```





#### Array DataSet
Das Array DataSet wird in PHP wie folgt erstellt.





```php
<?php
use PHPUnit
Framework
TestCase;
use PHPUnit
DbUnit
TestCaseTrait;
 
class DbUnitTestCase extends TestCase
{
    use TestCaseTrait;
 
    public function getDataSet()
    {
        $data = [
            'tablename' => [
                [
                    'id' => '1',
                    'username' => 'JonSnow1',
                    'firstname' => 'Jon',
                    'lastname' => 'Snow',
                    'created' => '2010-04-24 17:15:23'
                ],
                [
                    'id' => '2',
                    'username' => 'QueenCersei',
                    'firstname' => 'Cersei',
                    'lastname' => 'Lannister',
                    'created' => '2010-04-26 12:14:20'
                ],
                [
                    'id' => '3',
                    'username' => 'Bloodhound',
                    'firstname' => 'Sander',
                    'lastname' => 'Clegane',
                    'created' => '2011-09-26 08:04:30'
                ],
            ],
        ];
        return $this->ArrayDataSet($data);
    }
}
```
### Datenbankschema
PHPUnit geht bei der Datenbank bereits davon aus, dass ein Datenbankschema existiert.
### Links
[phpunit](https://phpunit.de/manual/current/en/database.html)


[Database tests with phpunit](https://qafoo.com/blog/090_database_tests_with_phpunit.html)


[Database fixture setup in phpunit](https://qafoo.com/blog/091_database_fixture_setup_in_phpunit.html)