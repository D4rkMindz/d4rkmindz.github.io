=### Toolchain
#### Der Blick in den Werkzeugkasten
Im [vorherigen Artikel](/de/artikel/phpmagazin/3.17/sicher_ins_ziel) wurde eine Basis für das Projekt erschaffen. Nun geht es darum, den [Jenkins](https://jenkins.io/)-Deployment-Server einzurichten.





### TDD
Test Driven Development ist, wenn man zuerst Tests schreibt und danach die Applikation auf die Tests angepasst programmiert. Wenn die Tests bestanden werden sollte man Code Refactoring vornehmen um den [Clean-Code-Developer-Richtlinien](http://clean-code-developer.de/) zu entsprechen.


Das Erstellen von Tests vor dem Programmieren hat viele Vorteile, wie zum Beispiel, dass man seine Klassen nicht überlädt, da man ja genau weiss was diese Klassen machen müssen. Die Tests, bei denen der Entwickler das Programm an den Test anpasst, nennt man Whitebox-Tests.


### Tools
Es gibt zwei Umgebungen. Den Jenkins-Deployment-Server und die Entwicklungsumgebung. Den Jenkins-Server muss man wie im [Tutorial](https://jenkins.io/doc/) beschrieben installieren. Nachdem dann im Deployment-Prozess in der Entwicklungsumgebung auf [Lints](/de/wiki/programmiersprachen/javascript/statische_codeanalyse#statische_codeanalyse_in_php) getestet wurde, kann man nun auf dem Server die Tests durchlaufen lassen. Dazu hat man zwei Optionen. Entweder man installiert die benötigten Programme direkt auf dem Server oder man lädt diese mittels Phing (Ant) und Composer herunter und bindet diese anschliessend ein. Die zweite Variante bringt den Vorteil, dass man Tests auch in der Entwicklungsumgebung ausführen kann.


Die Konfiguration von Jenkins ist mit einem GUI sehr gut umgesetzt.





#### Abhängigkeiten
Composer ist für die Abhängigkeiten verantwortlich. Dieser greifft auf [Packagist](https://packagist.org/) und managed so die zuvor in der composer.json definierten Abhängigkeiten.





#### Projektstruktur
Die Projektstruktur ist in verschieden Komponenten Aufgeteilt. Diese sind nach der [Model-View-Controller](/de/wiki/programmiersprachen/php/mvc)-Architektur aufgebaut.





#### Frontend
Zur Darstellung wird [Bootstrap](https://getbootstrap.com/) verwendet. [jQuery](http://jquery.com/) wird ebenfalls benötigt um die Funktionalität im Frontend zu gewährleisten.





### Fazit
Bis auf das Tutorial über Jenkins (welches ich nicht zusammengefasst habe) kannte ich bereits sehr viel dieses Toolchains. Grundsätzlich war auch nichts neues dabei. Es ist jedoch spannend und zugleich beruhigend, dass andere Entwickler einen ähnlichen Toolchain haben.
