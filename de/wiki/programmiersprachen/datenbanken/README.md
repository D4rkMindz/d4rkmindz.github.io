## Datenbanken

Im Web ist es sehr wichtig, dass man seine Daten speichert. Eine Datenbank (DB) ist schlussendlich der Speicher in einem Datenbank System (DBS). Ein DBS besteht aus einer Datenbank, einer Verwaltungssoftware und einem Datenbank Management System (DBMS).

 
Der Begriff Datenbanksystem wird oft Synonym mit dem Begriff Datenbank verwendet. Tatsächlich ist die Datenbank zusammen mit dem Datenbankmanagementsystem die beiden Teilen aus dem sich ein Datenbanksystem zusammensetzt. Erreicht werden soll mit einem Datenbanksystem vor allem zwei Dinge:


  - Datenunabhängigkeit
  - Datenintegrität
Dafür werden Daten zum einen durch ein Datenmodell beschrieben, zum anderen bieten Datenbanksysteme allerlei Grundfunktionen, durch diese die beiden oben aufgeführten Punkte erreicht werden können. 



TODO: fix indexmenu>:wiki:programmiersprachen:datenbanken#2|js#tango.png}}

----

### Anforderungen

Die Anforderungen für ein Datenbank System sind sehr hoch. Da meistens nicht nur ein Benutzer, sondern grad mehrere Benutzer auf die Datenbank zugreifen müssen, spielen folgende Faktoren eine wichtige Rolle in der Auswahl der Datenbank:


  * CPU-Zeiten
  * RAM-Verbrauch
  * Antwortezeiten
  * Anzahl Festplattenzugriffe
  * Verbrauchter Festplattenspeicher

----

### Datenbank Modelle

Es gibt sechs verschieden Datenbank Modelle. Jedes Modell ist geeigent für gewisse Zwecke:
  * [Hirarchisch](/de/wiki/programmiersprachen/datenbanken/hierarchisch) - Nur Eltern->Kind Beziehungen
  * [Netzwerkartig](/de/wiki/programmiersprachen/datenbanken/netzwerkartig) - Datenobjekte werden miteinander in Netzen verbunden
  * [Relational](/de/wiki/programmiersprachen/datenbanken/relational) - Daten werden in Tabellen gespeichert. Diese können Beziehungen zwischen einander haben.
  * [Objektrational](/de/wiki/programmiersprachen/datenbanken/objektrational) - Kommt zum Einsatz, wo Mengen von Objekten in Beziehung zu anderen Daten oder Objekten gebracht werden.
  * [Objektorientiert](/de/wiki/programmiersprachen/datenbanken/objektorientiert) - Beziehungen werden automatisch verwaltet. Objekte können Daten und Eigenschaften erben.
  * [Dokumentorientiert](/de/wiki/programmiersprachen/datenbanken/dokumentorientiert) - Objekte werden als Dokument gespeichert. Es gibt keine Strukturgleichheit.

----

### Datenbank Begriffe

##### Attribut
Ein Attribut oder auch Eigenschaft ist in einer Datenbank eine Tabellenspalte. In dem dargestellten [Beispiel](/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key) wäre das z.B. die Spalte Lohn. Auch die Spalte Name ist ein Attribut.
##### Relation
Eine Relation ist eine Tabelle. Wichtig in einer Tabelle ist, dass alle Datensätze in eine Relation miteinander gebracht werden können.
##### Datenbankschema
Bei einem Datenbankschema geht es darum, dass redundanz vermieden wird. Es ist ein Schema, nachdem die Datenbank aufgebaut ist.
