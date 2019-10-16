## PHP - Allgemein
PHP ist die Programmiersprache zum austausch der Daten zwischen Server

 
und Webseite. Man kann auch Variabeln und Funktionen Definieren. Diese


Programmiersprache ist Serverseitig.


![No alt text available](/de/wiki/780px-php_funktionsweise.svg.png)



Die PHP-Syntax ist ähnlich wie die von [C](/de/wiki/c). 





### Variabeln
Eine Variable ist ein Behälter für einen Wert. Dieser Wert kann folgendes sein:


   String   = Eine Abfolge von Buchstaben in möglicher Kombination von Zahlen. 
   Integer  = Ein Zahlenwert
   Boolean  = Ein True oder False Wert. Nichts anderes



Eine Variable wird in PHP wie folgt definiert:
```php
$a       = "String"    String
$b       = 12          Integer
$c       = true        Boolean```



### Array
Ein Array ist vergleichbar mit einen Haufen kleinerer Kartons (Variabeln). Im folgenden Beispiel sind in der Haufen "Brot" mit den Schlüsseln 'mehl', 'wasser' und 'hefe' ausgestattet. Die Schlüssel kann man auf zwei Arten zuweisen:


**Variante 1**


```php
$brot = array();
$brot['mehl'] = 200;
$brot['wasser'] = true;
$brot['hefe'] = "10g"; ```
**Variante 2**


```php$brot = [
   "mehl" => 200;
   "wasser" => true;
   "hefe" => "10g";
];```



### if / else Statement
Ein if / else Statement gibt einem die Möglichkeit etwas zu prüfen und darauf zu reagieren. Ein solches Statement kann folgendermassen aussehen (Werte aus dem Abschnitt Variabeln):
```phpif ($b == 12) {
    echo "Hallo Welt";
} else {
    echo "Bye Welt";
};
```



Für die Prüfung in einem if/else Statement kann man folgende Operatoren brauchen:


   ==   ist gleich (ist ein gleicher Wert, der Typ ist jedoch egal)
   ===  identisch  (gleicher Wert, gleicher Typ)
   >    grösser als
   >=   grösser gleich
   <    kleiner als
   <=   kleiner gleich
   <>   ungleich
   !=   ungleich
   !==  nicht identisch



wenn die Prüfung den Wert "true" zurückliefert, wird der Code innerhalb der ersten geschweiften Klammern ausgeführt, sonst der innerhalb der nach dem else.


Man kann auch auf mehrere Werte prüfen (Werte aus dem Abschnitt Variabeln):
```phpif ($a === "string"){
   echo "$a hat den Wert string";
} elseif ($b == true) {
   echo "$b ist wahr";
} elseif ($c !== 12) {
   echo "$c ist nicht Int. 12";
} else {
   echo "nichts ist wahr"
} ```



Da $a den Wert "String" und nicht "string" hat wird hier false zurückgeliefert. Die zweite Prüfung liefert dann true zurück ($b hat den Booleanwert true). $c hat den Integer 12 und nicht 13. Deshalb sollte hier ja ein true zurückgeliefert werden. Das passiert jedoch nicht, da ebenfalls auf den Integer geprüft wird und das darf bei der Prüfung !== (nicht identisch) nicht wahr sein (es darf nicht beides mal der Selbe Typ sein). Falls keine der Prüfungen zutreffen sollte, würde "nichts ist wahr" ausgegeben werden.


In diesem Beispiel würde "$b ist wahr" ausgegeben werden. Dies ist die einzige Prüfung, welche wahr wäre.



### htmlentities
Dies wird benötigt, um Text so zu konvertieren, dass der Browser ihn sicher versteht. Dies ist nur bei eingabefeldern nötig. Wenn ein Benutzer <b> hallo </b> eingibt, ergibt dies ohne htmlentities **hallo**. Mit htmlentities ergibt dies &ltb&gt hallo &lt/b&gt, was der Browser wieder als <b> hallo </b> ausgibt.





&lt = lower than(kleiner als, <)


&gt = greater than(grösser als, >)


&#039 = ' (einfaches Anführungszeichen)


&quot = " (doppeltes Anführungszeichen)


&amp = & (kaufmännisches und Zeichen)





htmlentities wird mit ** festgelegt.
