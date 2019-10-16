# Critical Rendering Path
Bevor eine Webseite im Browser angezeigt wird geschehen für den Nutzer nicht ersichtlich, mehrere Dinge. Das [HTML](/de/wiki/programmiersprachen/html) wird heruntergeladen und ein [DOM](/de/wiki/divers/dom) wird aufgebaut. Die verlinkten [CSS](/de/wiki/programmiersprachen/css)-Dateien werden heruntergeladen und geparst. Ebenfalls werden auch die [JavaScipt](/de/wiki/programmiersprachen/javascript)-Dateien heruntergeladen und ausgeführt.


Alle diese Schritte blockieren das Rendern (Anzeigen) der Webseite im Browser. Nachdem der DOM aufgebaut ist, wird ein CSSOM (CSS Object Model) aufgebaut. Auch dieses benötigt Zeit und blockiert.


Nach dem DOM und dem CSSOM berechnet der Browser das Layout der Webseite und teilt diese in [CSS-Boxen](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model) ein. Nachdem die Berechnung des Layouts erfolgt ist werden die Farben auf der Seite berechnet und anschliessend angezeigt.


![No alt text available](/de/wiki/crp.png)
### Optimierungen
Man hat verschiedene Möglichkeiten zur Optimierung des CRP. Man kann z. B. nur gewisse, benötigte Styles (Navbar, Main-Content) inline vor allen anderen Styles machen.


Ebenfalls gibt es die Möglichkeit JavaScripts asynchron zu laden (nicht blockierend). Somit kann man JS-Dateien, welche nicht sofort benötigt werden asynchron nachladen (bsp. Google Analytics).


Netflix z. B. zeigt dem Benutzer erst einmal eine Vorschau in schwarz-weiss, wo danach Bilder hinein gerendert werden.


### Weitere Artikel
[Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)


[Understanding the critical rendering path](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)


[An introduction to web performance and the critical rendering path](https://medium.freecodecamp.org/an-introduction-to-web-performance-and-the-critical-rendering-path-ce1fb5029494)


[How CSS works: Parsing & painting CSS in the critical rendering path](https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3)

