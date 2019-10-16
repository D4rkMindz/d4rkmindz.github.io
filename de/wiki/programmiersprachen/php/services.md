## Services
Wenn man mit [MVC](/de/wiki/programmiersprachen/php/mvc) arbeitet taucht früher oder später die Frage auf, wo man den Verbindungscode platzieren soll. Die Lösung dazu sind Services. Wichtig ist bei einem Service, dass er genau EINE AUFGABE übernimmt (man denke an das [Single Responsibility Principle](/de/wiki/programmiersprachen/php/srp)). Wenn ich also einen Benutzer erstellen möchte brauche ich für das Einfügen in die Datenbank eine Funktion. Das versenden der Willkommensemail ist jedoch eine andere Funktion. Auch das automatische einloggen danach ist wiederum eine neue Funktion.





Was ebenfalls zu beachten ist, dass eine Funktion aus dem Service Layer sich auch in der Console oder in einer API problemlos ausführen lässt. 
