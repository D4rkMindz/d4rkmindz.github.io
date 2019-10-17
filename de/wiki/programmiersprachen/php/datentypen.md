## PHP - Datentypen
In PHP unterscheidet man zwischen skalaren, zusammengesetzten sowie speziellen Typen.


Skalare Typen:


  * Boolean
  * Integer
  * Float/Double
  * String



Zusammengesetzte Typen:


  * Array
  * Object
  * Callable



Spezielle Typen:


  * Ressource
  * Null



### Boolean
Ein Boolean, oder auch bool genannt hat nur zwei Stadien: true (wahr) oder (false). 
### Integer
Ein Integer ist eine Ganzzahl. (..., -2, -1 , 0, 1, 2,...)
### Float/Double
Ein Float/Double Wert beinhaltet alle realen Zahlen (..., -2, -1.1, -1.0564653558236, -0.9, 0, 1 2.3651 , 1.351354654,...)
### String
Ein String ist eine Zeichenkette. Diese kann sowohl aus Buchstaben sowie aus realen Zahlen bestehen.
### Array
Ein Array in PHP ist tatsächlich eine geordnete Map. Eine Map ist ein Typ, der Werte zu Schlüsseln zuordnet. Da ein Wert eines Arrays ein weiteres Array sein kann, sind auch Bäume und mehrdimensionale Arrays möglich.


Will man fünf Werte Speichern, so muss man dies mit Variablen folgendermassen lösen:
```php  $a = "Wert 1";
  $b = "Wert 2";
  $c = "Wert 3";
  $d = "Wert 4";
  $e = "Wert 5";
  ```

Mit einem array kann man dies allerdings so lösen:
  $werte = array('a' => 'Wert 1', 'b' => 'Wert 2', 'c' => 'Wert 3', 'd' => 'Wert 4', 'e' => 'Wert 5');
Gibt man nun den das array $werte mit var_dump($werte); aus, so bekommt man:
```php
array (size=5)
  'a' => string 'Wert 1' (length=6)
  'b' => string 'Wert 2' (length=6)
  'c' => string 'Wert 3' (length=6)
  'd' => string 'Wert 4' (length=6)
  'e' => string 'Wert 5' (length=6)
  ```
'name' => typ 'wert' (anzahl Zeichen)

Optional kann man auch nur einen bestimmten Eintrag aus einem Array ausgeben. Möchte ich beispielsweise nur intrag 'c' ausgeben, löse ich dies wie folgt:
```php
  echo $werte['c'];
  output: Wert 3
   array(
    Schlüssel  => Wert,
    Schlüssel2 => Wert2,
    Schlüssel3 => array2(
                   Schlüssel4 => Wert4,
                   Schlüssel5 => Wert5,
                   Schlüssel6 => array3(
                                  Schlüssel7 => Wert7,
                                  Schlüssel8 => Wert8,
                                  Schlüssel9 => Wert9,
                                 ),
                   Schlüssel7 => Wert7,
                   Schlüssel8 => Wert8,
                   Schlüssel9 => Wert9,
                  ),
   );
   ```



### Object
Ein Object ist ein Verweise oder auch Alias auf einen gewissen Wert. So können mehrere Variablen den gleichen Wert enthalten, da sie ja auf ihn verweisen. (Info: [php.net/manual](http://php.net/manual/de/language.oop5.references.php)
### Callable
[php.net/manual](http://php.net/manual/de/language.types.callable.php)
### Ressource
[php.net/manual](http://php.net/manual/en/language.types.resource.php)
### Null
Null ist ein Wert, welcher leer ist. Ausserdem ist null auch keinem Datentyp zugewiesen. Null ist also "nichts".
