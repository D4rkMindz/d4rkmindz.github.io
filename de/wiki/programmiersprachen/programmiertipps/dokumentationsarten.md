## Dokumentationsarten
Es gibt verschiedene Arten, seinen Code zu dokumentieren, respektive sich eine Struktur zu skizzieren.





#### Use Cases
Ein Verwendungszweck sollte immer in der Konzeptionierungsphase erstellt werden. Man dokumentiert die gewünschte Funktionalität einer zu erstellenden Software.


![No alt text available](/wiki/programmiersprachen/programmiertipps/use-case.png)



#### Datenflussdiagramm
Das Datenflussdiagramm (Data-Flow-Diagram) skizziert die Bereitstellung, Manipulation und Verwendung von Daten. Hierbei wird nicht aufgezeigt, wie das Programm sich unter bestimmten Bedingungen verhalten muss (siehe [Programmablaufplan](/wiki/programmiersprachen/programmiertipps/dokumentationsarten#programmablaufplan)).


![No alt text available](/wiki/programmiersprachen/programmiertipps/data-flow-diagram.png)



#### Programmablaufplan
Ein Programmablaufplan (Flowchart) zeigt einen spezifischen Ablauf eines Programmes auf. Dieser beschreibt genau, unter welchen Umständen was passieren muss.


![No alt text available](/wiki/programmiersprachen/programmiertipps/flow-chart.png)



#### Mockups
Ein Mockup ist ein grober Wegwerfprototyp der Benutzerschnittstelle einer zu erstellenden Software. Mockups werden in früheren Projektphasen verwendet um die Anforderungen der Benutzeroberfläche zwischen dem Kunden und dem Entwickler besser darzustellen und somit Missverständnisse zu vermeiden. Ein Mockup ist ein rein visuelles Grundgerüst der Software und beinhaltet keine Funktionalität.


![No alt text available](/wiki/programmiersprachen/programmiertipps/mockup.png)



#### ER Diagramm
Das ER Diagramm oder auch ERM (Entity Relationship Model) ist bereits [hier](/wiki/programmiersprachen/datenbanken/erm) dokumentiert.





#### Behat
[Behat](/behat.org/) ist ein Verhaltensgesteuertes Testingframework für PHP. Behat zeigt dem Entwickler textuell auf, was er programmiert (und mit Behat getestet) hat. Ein Kunde kann diesen Text dann ebenfalls lesen und dem Entwickler mitteilen, ob er Funktionen der Software korrekt implementiert hat.





#### Kommentare
Es gibt verschiedene Arten Kommentare im Code zu machen.


```
//Kurze und einfache Erklärung
/**
 * Wieso (und nicht wie)
 */
```
Dabei gilt:
```
 Code > Comments
 
 Code = how
 Tests = what
 Comment = why

 Coment A.S.A.P.
```