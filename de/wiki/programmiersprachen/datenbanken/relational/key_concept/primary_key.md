## Primärschlüssel (Primary Key)
### TL;DR
Ein Primary Key (Primärschlüssel) ist ein eindeutiger Wert aus einem oder mehreren Attributen, welcher auf einen Datensatz (Entität) verweist
### PKs in RDBMS
In den oft verwendeten RDBMS ist der [Primärschlüssel](https://www.youtube.com/watch?v=Mpkg0RnkMkw) sehr wichtig. Da man (meistens) eine Zeile aus einer Datenbank abfragen möchte muss das RDBMS diese Zeile auch eindeutig identifizieren können. Genau aus diesem Grund braucht man eben den Primärschlüssel. Um das sinnvoll zu erklären sieht man unten eine Tabelle


^Name       ^Vorname      ^Anstellung            ^Lohn  ^Soz. Vers. Nr. |
^(text)     ^(text)       ^(text)                ^(int) ^(text, unique) |
|Lustig     |Peter        |Wissenschaftler       |4550  | 123-45-69-001 |
|Schwarzer  |Alice        |Frauenrechtlerin      |3750  | 123-65-96-156 |
|Thatcher   |Maragret     |Iron Lady             |8630  | 356-45-86-126 |
|Fist       |Peter        |Wissenschaftler       |5560  | 456-78-91-234 |
|Schwarzer  |Herbert      |Finanzangestellter    |8630  | 785-23-35-789 |
|Lustig     |Schantall    |Sekretärin            |4550  | 123-45-65-001 |



Wenn ich jetzt die Zeile von Peter Lustig möchte, wird es schwer, nur diese aus der Datenbank zu holen.


Wenn ich alle Datensätze mit **Peter** (Vorname) hole bekomme ich:
|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |
|Fist       |Peter        |Wissenschaftler      |5560  | 456-78-91-234 |
Wenn ich alle Datensätze mit **Lustig** (Nachname) hole bekomme ich:


|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |
|Lustig     |Schantall    |Sekretärin           |4550  | 123-45-65-001 |
Wenn ich alle Datensätze mit **Wissenschaftler** (Anstellung) hole bekomme ich:


|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |
|Fist       |Peter        |Wissenschaftler      |5560  | 456-78-91-234 |
Wenn ich alle Datensätze mit **4550** (Lohn) hole bekomme ich:


|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |
|Lustig     |Schantall    |Sekretärin           |4550  | 123-45-65-001 |
Wenn ich alle Datensätze mit **Lustig** (Sozialversicherungsnummer ) hole bekomme ich nun endlich nur Peter Lustig:


|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |



Das Problem hierbei ist, dass man, wenn man zum Beispiel eine Angestelltenidentitätskarte drucken möchte, man nich die (einzig) einzigartige Sozialversicherungsnummer darauf drucken kann, da diese Daten ja privat sind. Deshalb empfielt es sich immer, eine ID (oder bei Büchern ISBN) zu vergeben. Eine Angestellten ID kommt immer nur einmal in einer Datenbank vor. Ausserdem ist der Vorteil, dass man über die ID die Datensätze auch mit einer Anderen Datenbank verbinden kann. Am Schluss würde die Datenbank dann wie folgt aussehen:
^ID            ^Name       ^Vorname      ^Anstellung            ^Lohn  ^Soz. Vers. Nr. |
^(int, unique) ^(text)     ^(text)       ^(text)                ^(int) ^(text, unique) |
|123           |Lustig     |Peter        |Wissenschaftler       |4550  | 123-45-69-001 |
|452           |Schwarzer  |Alice        |Frauenrechtlerin      |3750  | 123-65-96-156 |
|785           |Thatcher   |Maragret     |Iron Lady             |8630  | 356-45-86-126 |
|109           |Fist       |Peter        |Wissenschaftler       |5560  | 456-78-91-234 |
|128           |Schwarzer  |Herbert      |Finanzangestellter    |8630  | 785-23-35-789 |
|002           |Lustig     |Schantall    |Sekretärin            |4550  | 123-45-65-001 |
So verhindert man, dass man falsche Daten bekommt (und z.B. den Lohn doppelt an einen Angestellten überweist).