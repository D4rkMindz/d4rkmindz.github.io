## Object Relational Mapper (ORM)
Der Layer zwischen der Applikation und der Datenbank ist der ORM. In vielen Frameworks ist dieser bereits beinhaltet (bsp. Laravel mit Eloquent).


Den ORM kann man auf viele Arten implementieren, die bekanntesten sind jedoch der [Data Mapper](https://en.wikipedia.org/wiki/Data_mapper_pattern) sowie der [Active Record](https://de.wikipedia.org/wiki/Active_Record).


### Active Record
Der Active Record Pattern ist der bekannteste (und nicht unbedingt der beste). Dieser basiert darauf, dass man ein Object mit den Daten hat. Dieses Object wird dann von einer Basisklasse abgeleitet, welche diverse Funktionen hat. Ein Beispiel für eine solche Funktion ist die save() Funktion, welche die geänderten Daten in die Datenbank speichert.


```php
$produkt = new Produkt();
$produkt->name = "Beispielprodukt";
$produkt->preis = 1.99;
$produkt->save();
```
Der dazugehörige SQL Befehl wäre





```sql
INSERT INTO products (name, price) VALUES ('Beispielprodukt', 1.99);
```



Der AR Pattern verstösst jedoch mit der Kombination aus Datenspeicherung sowie der Datenbanklogik gegen das [Single Responsebility Principle](/de/wiki/programmiersprachen/programmiertipps/single-responsibility-principle) und ist deshalb ein Anti-Pattern (sollte man nicht mehr brauchen).





### Data Mapper
Die Idee des Data Mapper ist, dass man die Daten in ein Object abspeichert und danach das Object mit einer statischen persist() Methode des EntityManager in die Datenbank abspeichert. 


```php
$produkt = new Produkt();
$produkt->name = "Beispielprodukt";
$produkt->preis = 1.99;
EntityManager::persist($produkt);
```

Die Datenbank Intervention ist mit diesem Pattern strikter geregelt. Auch erfolgt keine Vermischung von Verantwortlichkeiten.





#### Fazit
Bis jetzt habe ich noch nie ein ORM bewusst angewendet und kann deshalb nicht sagen, was das Beste ist. Jedoch bin ich der Meinung, wenn ich irgendwann ein ORM verwenden muss, dann werde ich vorzugsweise eins verwenden mit Data Mapper Pattern. Jedoch kommt es dabei noch stark auf den Verwendungszweck des ORM an.


Ein interessander [Artikel zum Thema (engl)](http://culttt.com/2014/06/18/whats-difference-active-record-data-mapper/)
