## Begriffe
Begriffe, welche im Umgang mit Datenbanken verwendet werden.





#### ERM
Das Entity Relationship Model ist eine visuelle Darstellungsmöglichkeit einer relationalen Datenbank. Man kann ERMs mit dem Tool [MySQL Workbench](https://www.mysql.com/products/workbench/) erstellen.





#### Entität
Eine Entität ist ein Datensatz (Data-Record) aus einem Entitätstyp (eine Zeile)





#### Entitätstyp
Ein Entitätstyp ist eine Ansammlung von Entitäten (Tabelle)





#### Attribut
Das Attribut beschreibt eine Eigenschaft einer Entität (z.B. user_name ist ein Attribut der Entität User)





#### Attributswert
Ein Attributswert ist der Wert eines Attributes (z.B. 'Bjoern.Pfoster' bei dem Attribut user_name)





#### Relation
Eine Relation ist die Beziehung zwischen zwei Entitätstypen. Die Menge der Relation wird über die Kardinalität festgehalten. Der Name der Relation wird über den Foreign Key definiert.





#### Kardinalität
Die Kardinalität bestimmt die Beziehung zwischen zwei Entitätstypen in einer Menge. Diese Menge kann 0,1 oder M(any) sein.


Z.B. hat der Entitätstyp Wohnung und der Entitätstyp Mensch eine 1:M (engl. gesprochen  one to many) Beziehung (EIN Mensch kann in EINER Wohnung wohnen, jedoch können VIELE (engl. many) Menschen in EINER Wohnung wohnen).


Eine weitere, gute Beschreibung der Kardinalitäten findet man auf der Seite von [HS Augsburg](https://glossar.hs-augsburg.de/Beziehungstypen).





#### Transformation
Eine Transformation wird bei einer M:N (many to many) Beziehung vorgenommen. Diese Beziehung wird in eine Tabelle mit zwei starken Beziehungstypen zu den Start-Tabellen umgewandelt. In der Transformations-Tabelle (zwischen den beiden Start-Tabellen) werden nun zwei Foreign Keys zu einem Primary Key zusammengefasst.


Start-Tabelle 1 user:


^id (PK)^username^password^
|1|bjoern|password|
|2|bjoern-pfoster|password|
Start-Tabelle 2 car:


^id (PK)^name^age^
|1|toyota yaris|12|
|2|lamborghini Aventador|3|
Transformations-Tabelle user_has_car:


|user_id|car_id|
|1|2|
|2|2|
|1|1|
|2|1|



#### Primary Key
Der Primary Key (PK) identifiziert eine Entität eindeutig. Dieser setzt sich aus einem oder mehreren Attributen zusammen.





#### Foreign Key
Der Foreign Key (FK) ist ein Attribut, welches auf den Primary Key einer anderen Entität zeigt. Zwischen dem FK und dem PK ist nun eine Relation (Beziehung).





#### Starker Beziehungstyp
Ein starker Beziehungstyp entsteht, wenn der Foreign Key einer Tabelle ein Primary Key ist. Im englischen wird diese Beziehung "identifying Relationship" genannt.





#### Schwacher Beziehungstyp
Ein starker Beziehungstyp entsteht, wenn der Foreign Key einer Tabelle kein Primary Key ist. Im englischen wird diese Beziehung "non-identifying Relationship" genannt. Dieser Beziehungstyp ist der "Standard".





#### Referentielle Intregrität
Die Referentielle Integrität (RI) sorgt dafür, dass man keinen Primary Key löschen kann, bei zu noch ein Foreign Keyverknüpft ist. Wenn ich also folgende Tabellen habe, kann ich den Datensatz mit der ID 2 nicht löschen, da dieser über den Foreign Key mit der anderen Tabelle verknüpft ist:
Tabelle 1 user:
^id (PK)^name^
|1|bjoern|
|2|bjoernpfoster|
Tabelle 2 house:
^id (PK)^user_id (FK)^name^
|1|1|schulhaus|
|2|1|turnhalle|
|3|2 (<- Dieser FK verhindert das löschen des Datensatzes users mit der id 2)|Theater|