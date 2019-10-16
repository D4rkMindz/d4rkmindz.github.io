## Data Access Object (DAO)
Das [DAO](https://de.wikipedia.org/wiki/Data_Access_Object) ist ein [Design Pattern (Entwurfsmuster)](https://de.wikipedia.org/wiki/Entwurfsmuster) welches für die Abstrahierung der Zugriffe auf Datenquellen verantwortlich ist. Dabei sind diese Zugriffe so gekapselt, dass die Datenquelle ausgetauscht werden kann, ohne dass der entsprechende Code angepasst werden muss (also der Code, welcher das DAO aufruft).


### Eigenschaften
Wikipedia definiert die Eigenschaften eines DAOs wie folgt:
  * "**" => Ein DAO retourniert die Daten als Array und nicht als bsp. [UserEntity](/de/wiki/programmiersprachen/php/dto)
  * "**" => Ein DAO pro Speichermedium (SQLDao, FileSystemDAO, etc...)
  * "**" => Der Austausch der Datenbanktechnologie (SQL => NoSQL) muss mit möglichst geringen Aufwand zu bewältigen sein.
