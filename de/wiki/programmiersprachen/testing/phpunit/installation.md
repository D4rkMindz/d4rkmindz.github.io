# Installation PHPUnit

Um PHPUnit verwenden zu können, muss man es logischerweise erst installieren. Dies funktioniert ganz einfach mittels Composer. PHPUnit muss in jedem Projekt neu installiert werden, da es mit einer globalen Funktion nicht funktioniert:
```
composer require phpunit/phpunit
```

Nun registrieren wir ein neues Namespace App/Test für das Verzeichnis "tests/".

```json
"autoload-dev": {
  "psr-4": {
    "App

Test

": "tests"
  }
},
```

Weiterhin erstellen wir ein neues Composer script namens "test".

```json
"scripts": {
  "test": "phpunit",
}
```

Um den neu angelegten Namespace nun zu registrieren, muss der Composer aktualisiert werden.
```composer update```

#### build.xml

Nun fügen wir der build.xml zwei neue Tasks hinzu. Einmal der Task phpunit und einmal phpunit-coverage. Diese Tasks können auch anderst benannt werden.

```xml
<directory name="phpunit" description="Run unit tests with PHPUnit">
  <exec executable="${basedir}/vendor/bin/phpunit${ext}" searchpath="true" resolveexecutable="true" failonerror="true" taskname="phpunit">
    <arg value="--configuration" />
    <arg path="${basedir}/phpunit.xml" />
  </exec>
</directory>

<directory name="phpunit-coverage" description="Run unit tests with PHPUnit with coverage">
  <delete dir="${basedir}/build/coverage" />
  <mkdir dir="${basedir}/build/coverage" />
  <exec executable="${basedir}/vendor/bin/phpunit${ext}" searchpath="true" resolveexecutable="true" failonerror="true" taskname="phpunit-coverage">
    <arg value="--configuration" />
    <arg path="${basedir}/phpunit.xml" />
    <arg value="--coverage-clover" />
    <arg path="${basedir}/build/logs/clover.xml" />
    <arg value="--coverage-html" />
    <arg path="${basedir}/build/coverage" />
  </exec>
</directory>
```

Doch nun wird dies noch nicht funktionieren, da die Datei phpunit.xml noch gar nicht existiert. Also erstelen wir auch diese:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="tests/bootstrap.php" colors="true" backupGlobals="false" backupStaticAttributes="false" syntaxCheck="false">
  <testsuites>
    <testsuite name="Tests">
      <directory suffix="Test.php">tests</directory>
    </testsuite>
  </testsuites>
  <filter>
    <whitelist processUncoveredFilesFromWhitelist="true">
      <directory suffix=".php">src</directory>
      <exclude>
        <directory>bin</directory>
        <directory>build</directory>
        <directory>docs</directory>
        <directory>public</directory>
        <directory>resources</directory>
        <directory>src/View</directory>
        <directory>tmp</directory>
        <directory>vendor</directory>
      </exclude>
    </whitelist>
  </filter>
</phpunit>
```

#### File system

Nun erstellen wir einen neuen Unterordner namens "tests" und erstellen und diesem eine Datei namens bootstrap.php mit dem Inhalt
```php
<?php

require_once _DIR_ . '/../config/bootstrap.php';
```

#### Test Klasse

Nun erstellen wir eine erste Testklasse. diese nennen wir der Einfach heit halber "ExampleTest.php" und legen sie ebenfalls im "tests" Ordner ab.

```php
 <?php

 namespace App
Test;

 use PHPUnit
Framework
TestCase;

/**
 * ExampleTest
 */
 class ExampleTest extends TestCase
 {
    /**
     * Test create object.
     * 
     * @return void
     */
    public function testInstance()
    {
      $this->assertTrue(true);
    }
 }
```

#### Erster Test

Nun sind wir soweit, dass wir unseren ersten test ausführen können.
  composer test
oder
  ant phpunit
  ant ohounit-coverage
