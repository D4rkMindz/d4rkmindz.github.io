## Shell-Skripts
Viele Server laufen heutzutage auf UNIX basierten Systemen. Unter UNIX lassen sich repetitive Tasks sehr einfach mit einem Shell-Skript automatisieren.


Ein solches Shell-Skript beginnt immer mit dem sogenannten [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)).


```
#!/bin/bash
```
Wenn bei dem Shebang das ! vergessen wird (was ab und zu noch passiert), dann ist diese Zeile ein ganz einfacher Kommentar.





### Kanäle
Die Shell hat dabei drei (eigentlich 10, aber nur 3 sind die am meisten verwendeten) Kanäle.
![No alt text available](/artikel/web-and-mobile-developer/8_18/shell-std.png )
**stdin** ist der Standard Input. Normalerweise ist dies die Eingabe welche über die Tastatur erfolgt.


**stdout** ist die Ausgabe des Programmes. Dieser Kanal wird normalerweise direkt an den Bildschirm weitergeleitet.


**stderr** ist der Kanal für die Weitergabe von Fehlern (errors). Diesen kann man beispielsweise für das Logging verwenden.





### Programme
Man kann in den Skripts auch andere Programme verwenden. Damit das Shell-Skript weiss, dass es nun ein anderes Programm ausführt (wie eine Zeile im Terminal) muss man den Befehl in Backticks oder in ein $() einpacken.


```
#!/bin/bash
for file in 'ls *'
do
  echo "$file"
  FILESIZE=$(stat -c%s "$file")
  echo $FILESIZE
done
```
Dieses Skript berechnet die Dateigrösse jeder Datei in einem Verzeichnis und gibt diese anschliessend aus.


Der Vorteil an der Schreibweise mit $() ist, dass man mehrere Kommands in einander verschachteln könnte (ob dies wirklich Sinnvoll ist, sei dahingestellt).


Inzwischen sind viele Personen der Meinung, dass man anstelle von Backticks nur noch $() verwenden sollte.





### Dialog
Um mit einem Shell-Skript einen Dialog (Pop-Up Fenster) zu öffnen gibt es das dialog Programm.
```
#!/bin/bash
dialog --title 'Message to you' --msgbox 'Hello, world!' 10 40
```
Der Titel ist der Titel des Dialogfensters. Der Parameter msgbox definiert den Inhalt des Dialogfensters. 10 und 40 sind die Dimensionen des Fensters.


Eine Ja/Nein (OK/Cancel) Abfrage ist mit dem Parameter yesno möglich.


Der Rückgabewert dieses Dialoges erfolgt über die Spezialvariable ?. Dabei gibt es verschiedene Codes (welche allgemein von allen Programmen so verwendet werden sollten) für die Rückmeldung über Erfolg/Misserfolg.


Eine komplette, NICHT als Standard deklarierte, Liste findet auf [TLDP](http://tldp.org/LDP/abs/html/exitcodes.html).


```
#!/bin/bash
dialog --title "Message" --yesno "Ja oder Nein" 6 40
response=$?
case $response in 
  0) echo "Ja!";;
  1) echo "Nein!";;
  255) echo "Cancelled with [ESC]!";;
esac
```



### Shell mit anderen Programmiersprachen
Man kann über die Shell auch Programme in anderen Programmiersprachen (bsp. Java order C) ansprechen. Dazu empfiehlt es sich, dass der Java Code bereits mit javac kompiliert worden ist.


```
#!/bin/bash

echo "Hallo Java"
java MainClass
```
```
public class MainClass {
  public static void main(String[] args) {
    System.out.print("Enter Something");
    String input = System.console().readLine();
    if (input.compareTo("something") == 0) {
      System.exit(0); // Exit successfully
    }
    System.exit(1); // Exit with general error
  }
}
```

## Fazit
Die Verwendung von Shell-Skripten ist immer eine Bereicherung. Jedoch stehen bei der Entwicklung von diesen Skripten immer gewisse Hindernisse im Weg. Manche davon sollte man einfach kennen um schneller und effizienter ein Skript entwickeln zu können.