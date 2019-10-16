## Data Mapper
Der [Data Mapper Pattern](https://en.wikipedia.org/wiki/Data_mapper_pattern) ist ein Pattern, welcher für die Übersetzung eines Datensatzes aus einer Datenbank in die Objektorientierte Welt verantwortlich ist.

 
Man kann sagen, dass man mittels eines Data Mappers eine Zeile aus einer Tabelle in ein Objekt umwandeln kann.


[Martin Fowler](https://martinfowler.com/eaaCatalog/dataMapper.html) beschreibt diesen Pattern als "eine Schicht von Mappern, die Daten zwischen Objekten und einer Datenbank verschiebt, während diese unabhängig voneinander und vom Mapper selbst bleiben".


Der Data Mapper Pattern kommt hauptsächlich bei Domain Driven Design (DDD) vor. Dabei wird dieser Pattern im Repository Pattern verwendet.


Eine Implementation des Data Mapper Pattern in PHP ist das [Informative Präsentation](/de/http/**ocramius.github.io/doctrine-best-practices/#/1)). 
