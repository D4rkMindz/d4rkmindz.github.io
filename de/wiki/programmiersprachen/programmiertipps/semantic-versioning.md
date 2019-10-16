## Sematic Versioning (SemVer)
Beim Sematic Versioning geht es um die Regulierung der Versionen. Es ist auf der Webseite von [Sematic Versioning](http://semver.org/lang/de/) genauer beschrieben, wie bei der Versionierung eines Projektes vorzugehen ist. Hier eine kurze Zusammenfassung:





   2.3.5(-0041)
   │ │ │   └───── (Buildnummer)
   │ │ └───────── Revisionsnummer
   │ └─────────── Nebenversionsnummer
   └───────────── Hauptversionsnummer

Auf Grundlage einer Versionsnummer von MAJOR.MINOR.PATCH (bsp: 2.0.0) werden die einzelnen Elemente folgendermaßen erhöht:





MAJOR wird erhöht, wenn API-inkompatible Änderungen veröffentlicht werden,


MINOR wird erhöht, wenn neue Funktionalitäten, welche kompatibel zur bisherigen API sind, veröffentlicht werden, und


PATCH wird erhöht, wenn die Änderungen ausschließlich API-kompatible Bugfixes umfassen.





Außerdem sind Bezeichner für Vorveröffentlichungen und Build-Metadaten als Erweiterungen zum MAJOR.MINOR.PATCH Format verfügbar.

