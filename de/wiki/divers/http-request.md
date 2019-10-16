## HTTP-REQUESTS
Um Daten abzufragen gibt es verschiedene Übermittlungsmethoden. Insgesamt gibt es neun dieser Methoden. Unterhalb werden jedoch nur die wichtigsten Requests beschrieben.



----

### Funktion
Ein Request wird durch einen [Browser](/de/wiki/browser) ([Clientseitig](/de/wiki/server-_und_client-seitig)) ausgelöst. Das Ziel dabei ist, dass der Server einem die gewünschten Daten übermittelt oder entsprechende Operationen (z. B.: ein Eintrag in eine [Datenbank](/de/wiki/programmiersprachen/datenbanken/)) ausführt.



----

### GET-Request
Der GET-Request ist der gebräuchlichste Request. Wenn ein Benutzer eine Webseite öffnet, schickt der Browser eine Anfrage auf die Webseite. Es wurde noch nichts ausgelöst oder verändert. Ein GET-Request kann zwar in der [URL](/de/wiki/url) gewisse Parameter übergeben, das sollte jedoch wenn möglichst verhindert werden ([XSS-ATTACKE](/de/wiki/hacking/xss) möglich!).


Laut Standard soll ein GET-Request nur Daten abfragen.



----

### POST-Request
Dieser Request-typ schickt Daten an den Server. Das Programm auf dem Server muss dann diese Daten verwerten und dementsprechend verarbeiten. Wenn man in seiner Webapplikation einen neuen Benutzer erstellen und in die [Datenbank](/de/wiki/programmiersprachen/datenbanken/) einspeichern möchte, sollte man dies über einen POST-Request machen. POST-Daten werden im Allgemeinen nicht von Caches zwischengespeichert.



----

### PUT-Request
Der PUT-Request dient dazu eine Ressource (zum Beispiel eine Datei) unter Angabe des Ziel-URIs auf einen Webserver hochzuladen. Besteht unter der angegebenen Ziel-URI bereits eine Ressource, wird diese ersetzt, ansonsten neu erstellt.



----

### DELETE-Request
Der DELETE-Request löscht die angegebene Ressource auf dem Server.
