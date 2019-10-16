## SQL
In SQL wird eine Datenbankabfrage ausgeführt. Das Wort SQL steht für Structured Query Language. Früher hiess diese Sprache SEQUEL (Structured English QUery Language).


SQL bietet mehrere Datenbankoperationen an. Ein Teil davon ist unten aufgelistet.
### INSERT
Dieser Befehl fügt Daten in eine Tabelle ein.
```
INSERT [INTO] table[(attribute1, attribute2)] VALUES(value1, value2);
```
### UPDATE
Aktualisiert Daten.
```
UPDATE table SET attribute1 = newValue1, attribute2 = newValue2 [WHERE condition];
```
### DELETE
Löscht Daten.
```
-- ACHTUNG, ohne "WHERE condition" wird die ganze Tabelle geleert! 
DELETE FROM table [WHERE condition];
```
### JOINS
Da man Tabellen aus Effizienzgründen [normalisiert](/wiki/programmiersprachen/datenbanken/relational/normalisierung) muss man irgendwann diese Daten wieder zusammenführen. Dazu gibt es den JOIN Befehl in verschiedenen Arten. Einen sehr guten Überblick findet man [hier](https://www.linux-tips-and-tricks.de/de/datenbanken/10-sql-joins-einfach-erklaert) und [hier](https://glossar.hs-augsburg.de/Verbundoperatoren_(Join)).


![No alt text available](/wiki/programmiersprachen/datenbanken/sql_joins.png)
#### INNER JOIN
Der Inner Join verbindet Datensätze aus zwei Tabellen bei denen die Werte in beiden Tabellen gleich sind. Es gibt keine leeren Datensätze.
```
SELECT customer.id, customer.name, order.id, order.brutto FROM customer INNER JOIN order ON order.id = customer.order_id;
```
#### LEFT JOIN
Bei diesem Join werden alle Datensätze aus der linken (ersten; customer) Tabelle genommen und mit Datensätzen aus der rechten (zweite; order) Tabelle verknüpft. Wenn keine Verknüpfung erstellt werden kann, dann bleiben die zu ergänzenden Werte leer.
```
SELECT customer.id, customer.name, order.id, order.brutto FROM customer LEFT JOIN order ON order.id = customer.order_id;
```
#### RIGHT JOIN
Dieser Join ist das genaue Gegenteil des Left Joins. Hier werden die Datensätze aus der rechten (zweite; order) Tabelle genommen und mit Daten aus der linken (erste; customer) Tabelle ergänzt.


<color #ed1c24>Dieser Join sollte nicht verwendet werden</color>.


MySQL empfiehlt den SQL-Query so zu schreiben, dass man aus einem RIGHT JOIN einen LEFT JOIN macht.
```
SELECT customer.id, customer.name, order.id, order.brutto FROM customer RIGHT JOIN order ON order.id = customer.order_id;
```
#### FULL JOIN
Der Full Join (auch Full Outer Join genannt) ist eine Kombination von Left Join und Right Join. Die zu vergleichenden Spalten müssen explizit Angegeben werden. 


<color #ed1c24>UNTER MySQL nicht verfügbar</color>
```
SELECT customer.id, customer.name, order.id, order.brutto FROM customer RIGHT JOIN order ON order.id = customer.order_id;
```
#### CROSS JOIN
Dieser Join ist eine Mischung aus LEFT JOIN und RIGHT JOIN. Es werden alle Datensätze verknüpft. Es gibt keine Bedingungen. Das Resultat würde dann wie folgt aussehen:


<color #ed1c24>UNTER MySQL nicht verfügbar</color>
```
SELECT * FROM TableA JOIN TableB;
```
| id |
| -- | name      | nation  |
| ------- | table | id |
| -- | name   | nation |
| ------ | table |
|  1 | Albert    | Germany | A     |  1 | Marc   | China  | B     |
|  2 | Elizabeth | England | A     |  1 | Marc   | China  | B     |
|  3 | Paul      | Spain   | A     |  1 | Marc   | China  | B     |
|  4 | Julia     | Denmark | A     |  1 | Marc   | China  | B     |
|  1 | Albert    | Germany | A     |  2 | Albert | France | B     |
|  2 | Elizabeth | England | A     |  2 | Albert | France | B     |
|  3 | Paul      | Spain   | A     |  2 | Albert | France | B     |
|  4 | Julia     | Denmark | A     |  2 | Albert | France | B     |
|  1 | Albert    | Germany | A     |  3 | Peter  | Japan  | B     |
|  2 | Elizabeth | England | A     |  3 | Peter  | Japan  | B     |
|  3 | Paul      | Spain   | A     |  3 | Peter  | Japan  | B     |
|  4 | Julia     | Denmark | A     |  3 | Peter  | Japan  | B     |
|  1 | Albert    | Germany | A     |  4 | Paul   | Poland | B     |
|  2 | Elizabeth | England | A     |  4 | Paul   | Poland | B     |
|  3 | Paul      | Spain   | A     |  4 | Paul   | Poland | B     |
|  4 | Julia     | Denmark | A     |  4 | Paul   | Poland | B     |

