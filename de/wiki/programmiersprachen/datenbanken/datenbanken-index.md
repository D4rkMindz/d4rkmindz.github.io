# Index
Ein Datenbank-Index kann man sich vorstellen wie eine Ansammlung von Referenzen auf verschiedene Werte in einer Datenbank.
Diese Indexe können die Effizienz eines RDBMS enorm steigern. Jedoch muss man damit bedacht umgehen.


Ein gutes Beispiel für die Verwendung von Indexen im "echten Leben" ist ein Lexikon. Auf den letzten Seiten von jedem Lexikon findet man die Auflistung aller Themen und deren Seitenzahlen. Die Themen sind alphabetisch sortiert. Wenn man also nach "Internet" sucht, fängt man nicht auf der vordersten Seite (respektive der ersten Seite des Inhaltsverzeichnisses) an, sondern durchforstet zuerst alles unter "I", dann innerhalb von "I" sucht man nach "n" und so weiter. Eine solche Suche ist einiges effizienter.


Man muss jedoch bedenken, dass das erstellen eines Inhaltsverzeichnisses sehr viel Zeit kostet. Man muss jedes Thema mit der entsprechenden Seitenzahl herausschreiben und diese dann nach dem Alphabet sortieren. Falls ein neues Thema hinzukommt muss man dann dies an der richtigen Stelle einfügen.


Ein Index ist wie ein Inhaltsverzeichnis auf eine Tabelle. Bei mehreren Millionen an Datensätzen steigert dies die Effizienz enorm. Durch die Verwendung von Indexen wird die Lese-Zeit logarithmisch gesteigert (es besteht IMMER Potenzial für Verbesserung).


Wo ist also der Haken? Dieser befindet sich dann nicht bei Lese-Zugriffen, sondern bei den Schreib-Zugriffen. Jeder Index, welcher erstellt wird, muss bei einem Schreib-Zugriff mit den neuen Daten angepasst werden.


Man sollte also für ein Query, welches tausende Male pro Tag ausgeführt wird eher ein Index machen, als für eines, welches nur alle X Monate ausgeführt wird.





Ein gutes Video zu diesem Thema findet man [auf YouTube](https://www.youtube.com/watch?v=HubezKbFL7E).