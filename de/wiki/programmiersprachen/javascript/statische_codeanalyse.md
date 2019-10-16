## Statische Codeanalyse in JavaScript
Bei der statischen Codeanalyse wird der Code während der Übersetzungszeit auf Fehler ([Lints](https://de.wikipedia.org/wiki/Lint_(Programmierwerkzeug))) geprüft. So kann man zum Beispiel bei JavaScript Code grobe Fehler vermeiden. Diese Fehleranalyse in JavaScript lässt sich mit [ScrudinizerCI](https://scrutinizer-ci.com/) durchführen. Die Fehleranalyse ist Teil der [Continuous Integration](/de/wiki/divers/continous_delivery#continuous_integration_ci).





### Fehleranalyse
Bei der Analyse durch ein Tool wird der Code zuerst auf grundlegende Fehler, welcher die Applikation zum Abstürzen bringen könnte (Semikolon vergessen, Closing tag vergessen), überprüft. Wenn dieser ohne grosse Problem bestanden ist, überprüft das Tool, ob nicht initialisierte Variablen existieren, ob die [Zyklomatische Komplexität](/de/wiki/programmiersprachen/programmiertipps#zyklomatische_komplexitaet) zu hoch ist oder ein Aufruf zu einer nicht definierten Funktion statt findet. Bei der dritten Prüfung werden dann Stylefehler (Leerzeichen zu viel) geprüft.
### Tools
Es gibt für die statische Codeanalyse in JavaScript mehrere Tools:
  * [ESLint](http://eslint.org/)
  * [JSHint](http://www.jshint.com/)



Eine Anleitung dazu findet man auf [GitHub (GIST)](https://gist.github.com/odan/4d2f47398b0533125c25022e0c69535b)





### Statische Codeanalyse in PHP
[PHP](/de/wiki/programmiersprachen/php) bringt direkt schon eine Möglichkeit mit, den Code auf grundlegende Fehler zu Prüfen. Dies funktioniert über die Konsole. Dabei gibt man folgendes ein.
```
$ php -l <filename>
```
Genauere Angaben dazu findet man auf der [Webseite von PHP](http://php.net/manual/de/features.commandline.options.php)
