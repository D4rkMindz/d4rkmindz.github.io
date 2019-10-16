## Dependency Inversion Principle
Das Dependency Inversion Principle (DIP) ist das D in [SOLID](/de/wiki/programmiersprachen/php/solid). Es definiert, dass man einen Aufruf nur in eine Richtung machen kann (Ein Controller kann einen Service aufrufen aber nicht umgekehrt). Die offizielle Definition lautet jedoch wie folgt:





> **
> **
> **
> **



Der Vorteil, welcher hier entsteht, ist, dass Module (z. B. das logging-Modul logger) ganz einfach ersetzt werden können.


Abhängigkeiten werden mittels Dependency Injection geregelt. So fordert ein Modul nur die benögtigten Abhängigkeiten und diese bleiben "übersichtlich".


Das Instanzieren dieser Objekte wird von einem übergeordnetem, zentralen Modul übernommen (z. B. ein Container).
