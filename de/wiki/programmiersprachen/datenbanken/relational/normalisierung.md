## Normalisierung
Bei der Normalisierung geht es darum, ein sinnvolles [Datenbankschema](/de/wiki/programmiersprachen/datenbanken/#datenbankschema) zu haben. Das Hauptziel dabei ist, Redundanzen zu vermeiden. Wenn man zum Beispiel in einer Datenbank mehrere gleiche Attribute in einer Zeile hat, und man das Schema ändert, kann es zu fehlerhaften Daten kommen. Diese nennt man dann Anomalien.


Um gegen Anomalien vorzugehen gibt es verschieden Datenbankschemen. Hierbei spricht man von Normalformen (NF). Eine Normalform kann nur gegeben sein, wenn die vorherige Normalform auch gegeben ist. Es gibt sieben Normalformen:


  * 0NF
  * 1NF
  * 2NF
  * 3NF
  * BCNF
  * 4NF
  * 5NF
Die genannten Normalformen werden weiter unten genauer erklärt.

----
### 0NF - Nullte Normalform
Die nullte Normalform wird auch unnormalisiert genannt. Eine Tabelle in der nullten normalform sieht wie folgt aus:


^CD_ID           ^Album                                  ^Erscheinungsjahr ^Titelliste |
|@#BEE3FF:4711 |@#FFB4B4:Anastacia – Not That Kind       |2000             |@#FFB4B4:{1. Not That Kind, 2. I’m Outta Love, 3. Cowboys & Kisses}|
|@#BEE3FF:4712 |@#FFB4B4:Pink Floyd – Wish You Were Here |1975             |{1. Shine On You Crazy Diamond}|
|@#BEE3FF:4713 |@#FFB4B4:Anastacia – Freak of Nature     |2001             |{1. Paid my Dues}|

----

### 1NF - Erste Normalform
Auf [Wikipedia](https://de.wikipedia.org/wiki/Normalisierung_(Datenbank)#Erste_Normalform_.281NF.29) ist die erste Normalform wie folgt definiert:





**





Wenn man das ein wenig verständlicher beschreiben möchte, kann man sagen, dass kein Attribut eine "Liste" von Daten enthalten darf. Das bedeutet, wenn ich in einer Datenbank eine Adresse speichern muss, muss ich die Adresse aufteilen in Land, Kanton, Dorf/Stadt, PLZ, Strasse, Hausnummer, etc. Auf die oben gezeigte Tabelle würde sich das so auswirken, dass man pro Titel eine Zeile hat. Jedoch weiss man danach nicht mehr, in welcher Reihenfolge die Titel auf dem Album sind. Ebenso gibt es keinen [eindeutigen Schlüssel](/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key) mehr. Deshalb fügt man ein neues Attribut für die Position des Tracks im Album ein (und der Lesbarkeit halber wird Titelliste in Titel umbenannt). Auch das Attribut Album wird aufgeteilt in Albumtitel und Interpret. Nach der ersten Normalform normalisiert, würde diese Tabelle wie folgt aussehen:





Tabelle: **CD_Liste**
^CD_ID         ^Interpret ^Album                ^Erscheinungsjahr ^Track     ^Titel                          |
|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:1|{1. Not That Kind,}            |
|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:2|{2. I’m Outta Love}            |
|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:3|{3. Cowboys & Kisses}          |
|@#BEE3FF:4712 |Pink Floyd| Wish You Were Here  |1975             |@#BEE3FF:1|{1. Shine On You Crazy Diamond}|
|@#BEE3FF:4713 |Anastacia | Freak of Nature     |2001             |@#BEE3FF:1|{1. Paid my Dues}              |

----

### 2NF - Zweite Normalform
Auf [HDM-Stuttgart](https://www.hdm-stuttgart.de/~riekert/lehre/db-kelz/chap4.htm#Chap4.4) ist die zweite Normalform wie folgt definiert:





**





Anders beschrieben: Wenn manche Einträge Redundant sind, kann man diese in eine Neue Tabelle einfügen, jedoch mit einem klar zugewiesenen Primärschlüssel (bsp.: CD_ID).


2NF wird in dem unten dargestellten Beispiel verletzt:





Tabelle: **CD_Liste**
^CD_ID^Interpret          ^Album                 ^Erscheinungsjahr ^Track     ^Titel                          |
|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:1|{1. Not That Kind,}            |
|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:2|{2. I’m Outta Love}            |
|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:3|{3. Cowboys & Kisses}          |
|2    |Pink Floyd         | Wish You Were Here   |1975             |@#BEE3FF:1|{1. Shine On You Crazy Diamond}|
|3    |Anastacia          | Freak of Nature      |2001             |@#BEE3FF:1|{1. Paid my Dues}              |



Die richte Aufteilung der Attribute nach der zweiten Normalform ist dann wie folgt:


Tabelle: **CD**
^CD_ID      ^Interpret ^Album                ^Erscheinungsjahr |
|@#BEE3FF:1 |Anastacia |Not That Kind         |2000            |
|@#BEE3FF:2 |Pink Floyd| Wish You Were Here   |1975            |
|@#BEE3FF:3 |Anastacia | Freak of Nature      |2001            |



Tabelle: **Liste**


^CD_ID      ^Track     ^Titel                     |
|@#BEE3FF:1 |@#BEE3FF:1|Not That Kind             |
|@#BEE3FF:1 |@#BEE3FF:2|I’m Outta Love            |
|@#BEE3FF:1 |@#BEE3FF:3|Cowboys & Kisses          |
|@#BEE3FF:2 |@#BEE3FF:1|Shine On You Crazy Diamond|
|@#BEE3FF:3 |@#BEE3FF:1|Paid my Dues              |

----

### 3NF - Dritte Normalform
**





Die 3NF wird erreicht, indem man Attribute, welche nicht von dem [Primärschlüssel (CD_ID)](/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key) abhängig sind, in eine neue Tabelle einfügt. Das heisst, dass man in der Tabelle CD den Interpret entfernt. Damit die CD aber immer noch einem Interpreten zugewiesen ist, vergibt man eine Interpreten_ID. In der Tabelle Interpret fügt man zusätzlich noch Merkmale hinzu, damit der Interpret unverwechselbar ist.





Tabelle: **Album**


^ID           ^Titel               ^Erscheinungsjahr |
|@#BEE3FF:1   |Not That Kind        |2000            |
|@#BEE3FF:2   |Wish You Were Here   |1975            |
|@#BEE3FF:3   |Freak of Nature      |2001            |



Tabelle: **Interpret**


^ID           ^Interpret ^Gründungsjahr |
|@#BEE3FF:1   |Anastacia |1999          |
|@#BEE3FF:2   |Pink Floyd|1960          |



Tabelle: **Tracks**


^ID           ^Interpret_ID ^Album_ID   ^Track          ^Titel                     |
|@#BEE3FF:1   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:1     |Not That Kind             |
|@#BEE3FF:2   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:2     |I’m Outta Love            |
|@#BEE3FF:3   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:3     |Cowboys & Kisses          |
|@#BEE3FF:4   |@#FFFCA8:2   |@#FFFCA8:2 |@#FFFCA8:1     |Shine On You Crazy Diamond|
|@#BEE3FF:5   |@#FFFCA8:1   |@#FFFCA8:3 |@#FFFCA8:1     |Paid my Dues              |

----

### BCNF - Boyce-Codd-Normalform
Ein Relationenschema ist in BCNF, wenn es in der 3NF ist. 





**





Das heisst, man sortiert jeden Daten aus, welche voneinander abhängig sind, jedoch nur einer ist abhänging vom Primärschlüssel. Um hier wieder ein Beispiel zu machen, wird eine andere Tabelle dargestellt. Wichtig: Ein Spieler kann mehrere Sportarten in verschiedenen Klubs mache, jedoch nie in zwei Klubs Sport machen, welche die gleiche Sportart anbieten. Ausserdem kann nur ein Klub eine Sportart anbieten:





##### 3. Normalform
Tabelle: **Sport**
^Nachname         ^Klub                     ^Sportart           |
|@#BEE3FF:Mbolo   |@#BEE3FF:FC Basel        |@#FFB4B4:Fussball  |
|@#BEE3FF:Meier   |@#BEE3FF:FC Basel        |@#FFB4B4:Fussball  |
|@#BEE3FF:Federer |@#BEE3FF:TC Basel        |@#FFB4B4:Tennis    |
|@#BEE3FF:Büetz   |@#BEE3FF:SSK Chur        |@#FFB4B4:Ski       |
|@#BEE3FF:Meier   |@#BEE3FF:SEHC Winterthur |@#FFB4B4:Eishockey |



Tabelle: **Spieler**
^Nachname         ^Vorname |
|@#BEE3FF:Mbolo   |Loris   |
|@#BEE3FF:Meier   |Peter   |
|@#BEE3FF:Federer |Roger   |
|@#BEE3FF:Büetz   |Michael |



Da nun aber die Sportart überflüssig ist in der 3. Normalform, schreibt man diese in eine eigene Tabelle in der BCNF:





Tabelle: **Sport**
^Nachname         ^Klub                     |
|@#BEE3FF:Mbolo   |@#BEE3FF:FC Basel        |
|@#BEE3FF:Meier   |@#BEE3FF:FC Basel        |
|@#BEE3FF:Federer |@#BEE3FF:TC Basel        |
|@#BEE3FF:Büetz   |@#BEE3FF:SSK Chur        |
|@#BEE3FF:Meier   |@#BEE3FF:SEHC Winterthur |



Tabelle: **Spieler**
^Nachname         ^Vorname |
|@#BEE3FF:Mbolo   |Loris   |
|@#BEE3FF:Meier   |Peter   |
|@#BEE3FF:Federer |Roger   |
|@#BEE3FF:Büetz   |Michael |



Tabelle: **Klubs**
^Klub                     ^Sportart  |
|@#BEE3FF:FC Basel        |Fussball  |
|@#BEE3FF:FC Basel        |Fussball  |
|@#BEE3FF:TC Basel        |Tennis    |
|@#BEE3FF:SSK Chur        |Ski       |
|@#BEE3FF:SEHC Winterthur |Eishockey |

----

### 4NF/5NF - Vierte und Fünfte Normalform
Die vierte Normalform wird nicht verwendet. Bei der Erstellung relationaler Datenmodelle hat sich die 3. NF als praxistauglich erwiesen und wird in der überwältigenden Mehrheit relationaler Datenmodelle eingesetzt. 1. und 2. NF kommen dann zum Einsatz, wenn Daten in Systeme geladen werden (z. B. im DWH Bereich) oder eine Normalisierung, aufgrund einer geringeren Relevanz und zugunsten von besserer Performance, in den Hintergrund tritt (z. B. Reporting).


Die fünfte Normalform kann nicht angewendet werden, da schon die vierte Normalform nicht gebraucht wird.


