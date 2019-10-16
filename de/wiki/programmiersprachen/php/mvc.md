## MVC
**M**odel **V**iew **C**ontroller ist eine Architektur, welche für viele Programmiersprachen ähnlich ist. Der Grundsatz ist, dass der Request (Anfrage) zuerst durch den Controller muss, danach die Daten im Model verarbeitet werden und am Schluss wird ein Template (View) gerendert.





1. Anfrage von Client zu Controller


2. Controller ruft Model auf


(3. Model sendet Anfrage an Datenbank


4. Datanbank antwortet an Model)


5. Model liefert die Validierten Daten an den Controller zurück


6. Controller ruft View auf


7. View sendet das fertige Template an den Controller zurück


8. Der Controller sendet das gerenderte Template an den Client





![No alt text available](/de/wiki/programmiersprachen/php/imageedit_2_6890240769.png)










































































Konkrete Reihenfolge:


[Browser](/de/wiki/browser) -> URL Routing -> [Controller](/de/wiki/programmiersprachen/php/mvc#controller) -> [Model](/de/wiki/programmiersprachen/php/mvc#model) -> [Controller](/de/wiki/programmiersprachen/php/mvc#controller) -> [View](/de/wiki/programmiersprachen/php/mvc#view) -> [Controller](/de/wiki/programmiersprachen/php/mvc#controller) -> URL Routing -> [Browser](/de/wiki/browser)





----

### Controller
Der Controller ist für den Datenfluss verantwortlich. Er entscheidet, wann wo welche Methode aufgerufen werden soll. Im Controller findet keine Validierung oder Datenbankabfrage statt. Jedoch das holen der Daten aus den globalen Variabeln ist die Aufgabe des Controllers. Auch erfolgt im Controller der einmalige aufruf des Model-Layers.


Die Daten, die der Model-Layer zurückliefert, übergibt der Controller dem Template.



----

### Model
Der Model-Layer ist in verschiedene Schichten unterteilt. Im Service-Layer ist die Validierung der gelieferten Daten. Im Model selber werden Datenbankabfragen ausgeführt.



----

### View
Ein View Template ist ein HTML File, in welches die Daten eingefügt werden (rendern). Für diese Daten gibt es im HTML File Platzhalter (bsp: echo $data['name']). Im View wird keine Berechnung oder Datenbankabfrage gemacht. Jedoch eine for/foreach Schleife kann man machen, wenn man beispielsweise viele Daten in einer Tabelle darstellen muss.



----

### Was man darf und was nicht
Die grünen Felder symbolisieren, was wo passiert. Die gelben sollte man meiden und die Roten sind bad practice.


Erklärung [CRUD](/de/wiki/programmiersprachen/php/crud)


![No alt text available](/de/wiki/programmiersprachen/php/imageedit_9_3196086581.png )

----

### Request/Response Zeit
In der Darstellung unterhalb sieht man, innerhalb welcher Zeit welcher Aufruf passiert.


![No alt text available](/de/wiki/programmiersprachen/php/imageedit_7_4421517577.png )
