## Links rein, rechts raus
Praktisch jeder HTTP Request ist ein Haufen Text, welcher von dem Server gelesen werden muss. Dieser Text kann in verschiedenen Formaten an den Server geschickt werden. Die gängigste Formate sind [HTML](/de/wiki/programmiersprachen/html), [JSON](/de/wiki/programmiersprachen/javascript/json) und [XML](/de/wiki/programmiersprachen/xml).


Bei jedem Request werden zuerst die Middleware ausgeführt. Danach kommt der Router und der [MVC](/de/wiki/programmiersprachen/php/mvc)-Teil der Applikation. Der MVC-Teil braucht die Daten in einem für ihn verständlichen Format. Für das kann man Parser in der Middleware erstellen.


Es gibt ebenfalls die Möglichkeit, auch wenn diese eher unkonventionell scheint, Daten im CSV Format zu versenden.


CSV hat den Vorteil, dass dieses Format von dem Product Owner auch "verstanden" wird. Dieser kann eine Tabelle in Excel erstellen und dann an die API senden. Ebenfalls kann er die erhaltenen Daten im Excel wieder lesen.





### Fazit
Welches Datenformat für die API verwendet wird, kommt auf den Anwendungsfall darauf an. Es kann durchaus möglich sein, dass eine Applikation eine API für alle Typen bietet. Je nach Verwendung kann man die Applikation an die Bedürfnisse des Kunden anpassen.
