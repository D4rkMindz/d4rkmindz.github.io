## Hirachische Datenbank
Ein [Hierarchisches Datenbankmodell](https://de.wikipedia.org/wiki/Hierarchisches_Datenbankmodell) ist das älteste Datenbankmodell; es bildet die reale Welt durch eine hierarchische Baumstruktur ab. Jeder Satz (Record) hat also genau einen Vorgänger, mit Ausnahme genau eines Satzes, nämlich der Wurzel der so entstehenden Baumstruktur.


![No alt text available](/de/wiki/programmiersprachen/datenbanken/240px-hierarchisches_datenbankmodell.svg.png)


Die Daten werden in einer Reihe von Datensätzen gespeichert, mit denen verschiedene Felder verknüpft sind. Die Instanzen eines bestimmten Datensatzes werden als Datensatzabbild zusammengefasst. Diese Datensatzabbilder sind vergleichbar mit den Tabellen einer relationalen Datenbank.



Verknüpfungen zwischen den Datensatzabbildern werden in hierarchischen Datenbanken als Eltern-Kind-Beziehungen (Parent-Child Relationships, PCR) realisiert, die in einer Baumstruktur abgebildet werden. Der Nachteil von hierarchischen Datenbanken ist, dass sie nur mit einem solchen Baum umgehen können. Verknüpfungen zwischen verschiedenen Bäumen oder über mehrere Ebenen innerhalb eines Baumes sind nicht möglich.


