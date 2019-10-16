## Repository
Ein [Repository](https://de.wikipedia.org/wiki/Repository_(Entwurfsmuster)) kapselt die Zugriffe auf einen Datenspeicher so, dass man diese Austauschen kann, ohne dass man den Aufruf des Repository ändern muss. Somit kann man (extremes Beispiel) einen MySQL Datenbank Speicher mit einer JSON Datei auf dem Server austauschen, ohne dass man den Code anpassen muss. Im Prinzip ist das Repository (fast) das gleiche wie ein [Data Access Object (DAO)](/wiki/programmiersprachen/programmiertipps/dao), jedoch kümmert sich das DAO nicht um die Konvertierung der Daten in ein Objekt Orientiertes Format ([Objekt](https://de.wikipedia.org/wiki/Objekt_(Programmierung))).


Weitere Informationen zum Repository sind [hier](https://github.com/odan/glossar/blob/master/repository.md) zu finden