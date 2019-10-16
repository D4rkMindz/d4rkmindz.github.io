### REST in Future
[REST](/de/wiki/divers/api/rest) ist [CRUD](/de/wiki/programmiersprachen/php/crud) über [HTTP](/de/wiki/divers/protokolle/http). REST steht dabei für REpresentional State Trandfer und wird von Webanwendungen zum lesen und manipulieren von Daten verwendet. Es stehen insgesamt 8 HTTP-Methoden zur Verfügung. Jedoch werden hauptsächlich folgende vier Methoden verwendet:
  * GET zum laden von Daten ([CSS-Dateien](/de/wiki/programmiersprachen/css), [JavaScript-Dateien](/de/wiki/programmiersprachen/javascript), Bilder, etc.)
  * POST zum erstellen von Daten
  * PUT zum aktualisieren von Daten (Kompletter Datensatz, die Aktualisierung kleiner Teile eines Datensatzes erfolgt über PATCH)
  * DELETE zum löschen von Daten

Alle Daten werden entweder mittels XML oder JSON übermittelt.


Wichtig bei einer API ist auch die Authentifizierung um [XSRF Attacken](/de/wiki/hacking/xsrf) zu vermeiden.





### Endpunkte
Die REST-API funktioniert mittels verschiedener HTTP-Methoden auf unterschiedliche [URLs](/de/wiki/url). Die Struktur der URL definiert dabei, um welchen Datensatz es sich bei der Abfrage handelt.

 
Ein Beispiel für den Aufbau der URL.


| URL (Endpunkte)               |
| ----------------------------- | Zweck                                                                      ^
| **               | für Beiträge                                                               |
| **               | für Seiten                                                                 |
| **               | für Medieninhalte                                                          |
| **               | listet registrierte POST-Types                                             |
| **            | listet registrierte POST-Status                                            |
| **            | für Kommentare                                                             |
| **          | listet registrierte [Taxonomien](https://de.wikipedia.org/wiki/Taxonomie) |
| **          | für Kategorien                                                             |
| **                | für Stichworte                                                             |
| **               | für Benutzer                                                               |
| **          | Profil des Benutzers mit der ID {id} (ID ist eine Zahl)                    |
| **     | Bearbeiten des Benutzers mit der ID {id} (ID ist eine Zahl)                |
| **   |Löschen des Benutzers mit der ID {id} (ID ist eine Zahl)                    |



### Fazit
REST ist grundsätzlich eine gute API-Architektur und durchaus empfehlenswert. Es ist sehr von Vorteil, wenn sogar [CMS](/de/wiki/cms) wie Wordpress eine REST-API unterstützen. 
