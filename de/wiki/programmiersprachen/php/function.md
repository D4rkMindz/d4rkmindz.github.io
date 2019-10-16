## PHP - Funktionen
In PHP hat man die Möglichkeit, Funktionen zu erstellen. Dies macht man, damit der Code übersichtlicher wird. Man kann so "Spaghetticode" vermeiden, welcher lang und unübersichtlich ist.


Eine Funktion kann man wie folgt definieren:


```php
function meineNeueFunktion(){ 
}
```
Da eine Funktion einen Rückgabewert haben muss, ausser sie speichert zum Beispiel etwas in einer globalen Variable wie [$_SESSION](/de/wiki/programmiersprachen/php/session) ab, verwendet man ''return''. Man kann einen beliebigen [Datentypen](/de/wiki/programmiersprachen/php/datentypen) retournieren. Ebenso kann man **if/else Statements** einbauen. Damit man Variablen miteinander vergleichen kann, muss man diese in den Klammern mitgeben. Alle Variablen, welche innerhalb einer Funktion erstellt werden sind (ausser globale Variablen), wenn die Variablen nicht retourniert werden, nicht mehr vorhanden. Wichtig ist auch, dass man nur **einen Wert retournieren** kann. Die folgende Beispielfunktion retourniert, wenn Variable $a grösser als Variable $b ist einen Wert von true, sonst einen Wert von false:


```php
function compare($a, $b) {
   if ($a > $b) {
      return true;
   } else {
      return false
   }
}
```



Man kann auch weitaus komplexere Funktionen erstellen, man muss jedoch immer bedenken, dass eine Funktion nur eben einen Wert zurückliefern kann. 
### Return
Eine Funktion sollte immer ein ''return'' haben. Wenn jedoch kein spezifischer Wert retourniert werden soll, sollte man in der Regel wenigstens (bei Erfolg) [boolean](/de/wiki/programmiersprachen/php/datentypen) true zurückliefern. Wenn man jedoch nur einen ''echo'' Befehl ausführt, dann braucht es keinen return Wert:


```php
function hello(){
   echo "Hello World!";
}
hello(); //Displays Hello World!
```
** Array oder String **


Wenn man also einen Array, welchen man in seiner Funktion definiert hat, retourniere möchte, kann man alles wie folgt retournieren:


```php
''$a = array();


$a['x'] = 'x';


$a['y'] = 'y';


return $a;''


```
**Gesamtbeispiel:**


```php
   $a = array();
   $a['x'] = 'x';
   $a['y'] = 'y';
   $a['z'] = 'z';
   
   //gibt $a['x'](String 'x'), $a['y'](String 'y') und $a['z'](String 'z') zurück (best practice)
   return $a;             
   --------------------------------------------------------------------------------------------------------   
   FALSCH
   //gibt $a['x'](String 'x') zurück (eher falsch, macht keinen Sinnn, so return so zu verwenden)
   return $a['x'];       
   ``` 
