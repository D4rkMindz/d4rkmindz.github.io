## Validierung
Unter Validierung versteht man die Überprüfung der vom Benutzer eingebenen Daten. Bei einem Kontaktformular sollte man zum Beispiel, wenn man eine PLZ angeben muss, überprüfen, ob diese auch exisitert. Das kann man mit einem [Datenbank](/wiki/datenbank)-abgleich herausfinden. Wenn die Abfrage jedoch negativ ist, das heisst, die PLZ nicht exisitert, muss man dem Benutzer eine Fehlermeldung anzeigen. Dies macht man, damit er weiss, was er nicht richtig eingegeben hat.


Bei der Validierung muss man jedoch auch darauf achten, dass man nicht "Übervalidiert". Das heisst, dass man prüft, ob ein Strassennamen mindestens eine Zahl enthält, mindestens 5 Buchstaben und entweder das Wort Strasse oder Weg enthält. In diesem Fall ist das eine Übervalidierung. Was würde passieren, wenn ein Benutzer "im Bachrain" wohnt? Er würde sich nerven, dass seine (eigentlich korrekte Adresse) als inkorrekt angezeigt wird. Zwar ist die Chance, dass man durch weniger Validierung mehr falsche Daten bekommt höher, jedoch kann man mehr Kunden zulassen.


Wichtig ist, dass man sich immer Gedanken macht, was passiert wenn... Es gibt immer Ausnahmen. Diese sollte man auch beachten. 

----

### Validierung in PHP
In PHP gibt es diverse Libraries, welche einem die Validierung erleichtern möchten. Folgende drei Links führe auf GitHub zu der jeweiligen Validierungs-Library:
  * [Respect/Validation](https://github.com/Respect/Validation)
  * [vlucas/valitron](https://github.com/vlucas/valitron)
  * [illuminate/validation](https://github.com/illuminate/validation)

In diesen Libraries kann man ein Objekt (oder auch ein Formular-Feld) erzeugen und dies dann mit gewissen Funktionen einfach validieren. Der Vorteil hierbei ist, man kann recht "simple" Validierungen sehr schnell machen und spart so auch Zeit. Der Nachteil ist, erstens hat man eine Abhängigkeit mehr (wenn etwas nicht mehr Weiterentwickelt wird, ist das ein sehr grosses Problem) und zweitens wenn man komplexe Validierungen hat, stösst man sehr schnell an die Grenzen dieser Validierungsframeworks.