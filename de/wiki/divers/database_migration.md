## Datenbank Migration
Wenn man eine Webapplikation entwickelt oder betreut, kommt es hin und wieder vor, dass man seine Datenbank ändert. Man kann dabei viel Zeit (und Geld) sparen, indem man ein Datenbank Migrations Libraries braucht. Ein Beispiel dafür wäre [Phinx](https://phinx.org/). Diese Library kann man mittels [Composer](/installationen/composer) ganz einfach über folgende Zeile im Terminal in seinem Projekt installieren:


```
composer require robmorgan/phinx
```



### Initialisierung
Anschliessend geht man im Terminal in den config/ Ordner des Projektes (cd config). Dort führt man folgenden Befehl aus:


unter Linux lässt man das "call" weg.
```
call ../vendor/bin/phinx init
```
Damit initialisiert man Phinx in seinem Projekt. Es wird im config/ Ordner automatisch eine phinx.yml Datei erstellt. Diese braucht (in diesem Fall) nicht und kann sie deshalb direkt wieder löschen. Danach erstellt man eine phinx.php Datei. Diese Datei muss folgenden Code enthalten: 
```php
//alle Funktionen (db(), config()) werden hierdurch geladen.
require_once _DIR_ . "/bootstrap.php";

// ein Datenbank Objekt wird erzeugt
$db = db();

// alle Werte, welche in der config.php Datei gespeichert sind, werden abrufbar gemacht.
$config = config();

// Das PDO Objekt wird geholt.
$pdo = $db->getDriver()->connection();

return array(
    'paths' => array(
        // in diesem Fall _DIR_ . "/../resources/migration"
        'migrations' => $config->get("db.migrationsPath")
    ),
    'environments' => array(
        'default_database' => 'local',
        'local' => array(
            // Datenbank name (bsp test_datenbank)
            'name' => $config->get("db.database"),
            // Verbindung des vorher erzeugten PDO Objektes
            'connection' => $pdo
        )
    )
);
```
Von hier aus muss jeder Aufruf auf Phinx geschehen, sonst wird Phinx nicht funktionieren (keine Konfiguration vorhanden).





### Setup=
Es ist wichtig, dass man Phinx direkt von Anfang an in seinem Projekt installiert. Alternativ würde es sonst sehr anstrengend werden. Nach der Initialisierung von Phinx kann man dann folgenden Befehl (ebenfalls vom config/ Ordner aus) ausführen.


```
call ../vendor/bin/phinx generate DatabaseNameSetup
(Linux:)
../vendor/bin/phinx DatabaseNameSetup
```
Mit diesem Befehl erzeugt man eine Datei (PHP Klasse), welche {timestamp}_DatabaseNameSetup.php heisst. Den Namen (DatabaseNameSetup) kann man jedoch frei wählen, es dürfen jedoch nur Buchstaben verwendet werden. Auch ist wichtig, dass der erste Buchstabe ein Grossbuchstabe ist. Diese PHP-Klasse findet man unter dem in der phinx.php definierten Pfad (_DIR_ . "/../resources/migration") und diese sieht dann wie folgt aus:


```php
use Phinx
Migration
AbstractMigration;

class DatabaseNameSetup extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {

    }
}
```
In dieser Klasse kann man in der change() Funktion die Datenbank definieren. Dies ist jedoch sehr mühsam. Man kann sich diesen Code auch generieren lassen.





### Code generieren
Man viel Zeit einsparen kann, indem man sich den Code für die change() Funktion generieren lässt. Dies ist mit der Library von [Odan](https://github.com/odan/phinx-migrations-generator) möglich. Man installiert diese ebenfalls mit [Composer](/installationen/composer) im Root Ordner des Projektes.
```
composer require odan/phinx-migrations-generator
```
Danach kann wechselt man im Terminal in den config/ Ordner (cd config/). Dort gibt man dann folgenden Befehl ein:
```
call vendor/bin/phinx-migrations.bat generate DatabaseNameSetup
(Linux:)
../vendor/bin/phinx-migrations generate DatabaseNameSetup
```
Danach wird man zuerst gefragt, welchen Name man vergeben möchte. Dabei verwendet man DatabaseNameSetup. Genau wie im Abschnitt Setup beschrieben. Die zweite Abfrage ist, ob man das schema.php File ändern möchte. Da antwortet man mit Yes (y). Jetzt findet man in dem Ordner, welchen man in der phinx.php definiert hat (_DIR_ . "/../resources/migration") die gleiche PHP-Klasse, wie im Abschnitt Setup beschrieben. Diesmal ist sie jedoch bereits unter change() befüllt.


Jetzt muss man nur noch alles auf den Server laden (und die Zugangsdaten für die Datenbank ändern (Benutzername und Passwort)) und via [SSH](/wiki/divers/ssh) in den config/ Ordner navigieren. Dort führt man dann folgenden Behfehl aus (Linux Umgebung, da die meisten Server unter Linux laufen).
```
../vendor/bin/phinx migrate
(Windows:)
call ../vendor/bin/phinx migrate
```
Jetzt ist das Setup der Datenbank abgeschlossen. In der Datenbank befindet sich neben den vom Entwickler erstellten Tabellen auch eine Tabelle "phinxlog". In dieser Tabelle speichert Phinx, was bei der letzten Migration gemacht wurde.





### Migration
Bei einer Migration wird alles genau gleich gemacht wie unter [Code generieren](/wiki/divers/database_migration#code_generieren) beschrieben. Jedoch muss man DatabaseNameSetup umbennen. Am besten ist es, wenn man die Änderungen, welche man vorgenommen hat, beschreibt. (z. B.: "RemovedTableUsers").





### Daten einfügen
Phinx bietet auch die Funktion, Daten in eine Tabelle zu übergeben. Bei kleineren Tabellen kann man das anhand einer neuen Migrationsdatei, welche man manuell beschribt, machen.
```php
// Von phinx generierte klasse
public function change()
    {
        // Array mit allen Einträgen.
        // id: jede Tabelle muss eine Spalte mit einer eindeutigen id haben
        // title: muss mit dem jeweiligen Titel in der Datenbank übereinstimmen
        $rows = [
            [
                'id'    => 1,
                'title'  => 'erster Eintrag'
            ],
            [
                'id'    => 2,
                'title'  => 'zweiter Eintrag'
            ],
            [
                'id' => 3,
                'title' => 'dritter Eintrag'
            ],
            [
                'id' => 4,
                'title' => 'vierter Eintrag'
            ]
        ];
        $issueTypes = $this->table('tabellen_name');
        // Tabelle leeren und auto increment wert zurücksetzen
        $issueTypes->truncate();
        $issueTypes->insert($rows)->save();
    }
```
Hat man grosse Datenmängen, ist dies so natürlich nicht umsetzbar. In diesem Fall sollte man die Daten aus der lokalen Datenbank auslesen und diese als json Datei an den Server mitgeben.


Hierfür erstellen wir zuerst eine neue Klasse. Wie Ihr diese nennt, ist prinzipiell egal, doch der einfachheit halber nennen wir diese in unserem Beispiel einfach getJson.php.


getJson.php:
```php
<?php
/*
 * Zuerst müsst Ihr alle Daten aus eurer Datenbank holen und in das $rows Array abspeichern.
 * Da dies variieren kann, lasse ich diesen Punkt weg.
 */
// $rows Array wird zum json Objekt
$json = json_encode($rows);
// Json Code in ein .json File schreiben
file_put_contents("/path/to/migrations/folder/myJsonFile.json", $json);
```
Dann legen wir, wie zuvor, eine neue Migrationsdatei an und füllen diese mit folgendem Code:
```php
// Json in Array speichern
$rows = json_decode(file_get_contents("path/to/json/file/myJsonFile.json"), true);
$table = $this->table("table_name");
// Tabelle leeren
$table->truncate();
$table->insert($rows)->save();
```
Nun nur noch auf den Server laden und das deployment Skript ausführen.