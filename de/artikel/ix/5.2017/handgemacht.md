## Handgemacht
JavaScript entwickelt sich, in letzter Zeit, sehr schnell. Es kommt gefühlt jede Woche ein neues Framework auf den Markt. Auch mit Facebooks Paketmanager Yarn (ähnlich wie NPM) ist jetzt wieder ein neues Produkt auf dem Markt (welches eigentlich nicht benötigt wird).


JavaScript jedoch ist nur deshalb so berühmt, da es das was Sun mit Java hat erreichen wollen, nämlich dass es auf jedem Gerät läuft, erreicht hat. Man bemerkt jedoch noch ein paar Designschwächen, welche aus der Zeit der Entwicklung von JavaScript kommen (90er Jahre).


Die Entwicklung von JavaScript ist dank ECMAScript (ist der Standard, JS => Umgangssprachlich) sehr zügig. Jedoch bringt das auch den Nachteil, dass gewisse Features auf alten Geräten nicht unterstützt wird.


Die Lösung für dieses Problem sind die Transpiler (der bekannteste ist [Babel](https://babeljs.io/)), welche den JavaScript Code in Quellcode übersetzen, welcher auf älteren Geräten lauffähig ist. Dies funktioniert jedoch nicht mit allen neuen Funktionen.





Um die Typensicherheit von JavaScript zu erhöhen wurde TypeScript entwickelt (Verwendung z. B. im Node.js Umfeld). Vom Compiler werden die [statische Codeanalyse](/de/wiki/programmiersprachen/javascript/statische_codeanalyse)], Klassen, Interfaces und Module unterstützt.





JavaScript ist Asynchron, was bedeutet, dass egal wie die Operation in der vorherigen Code-Zeile abgelaufen ist, der Code weiterläuft, ohne auf eine Antwort zu warten. Dies führt dazu, dass man auf Callbacks zurückgreifen kann. Daraus kann dann schnell noch eine Callback-hell entstehen. Als Lösung dieses Problems haben sich Promises etabliert. Diese ermöglichen logisches Steuern asynchroner Programmflüsse.


Eine andere Alternative ist die Verwendung von Streams.





In der JavaScript Welt gibt es etliche Frameworks. Die bekanntesten sind Angular, React und Vue. Da diese in einem Wettkampf zu einander stehen, entwickeln diese sich immer rasanter weiter. Jedoch entsteht daraus auch eine grosse Gefahr, dass man auf das falsche Pferd setzt und später eine sehr teure Migration auf ein anderes Framework durchführen muss. Diese Frameworks lassen sich in zwei Gruppen aufteilen. Angular, welches die wichtigsten Aspekte einer Applikation abdeckt und View-Frameworks wie Vue oder React. 





Um Packages zu verwalten gitb es NPM. Dieser kümmert sich um das Installieren, Aktualisieren und Entfernen. Die installierten Packages werden dann in der package.json Datei aufgelistet.





### Fazit
Grundsätzlich gibt es noch mehr, wo dieser Artikel hätte erwähnen können. Vieles kenne aus diesem Artikel kenne ich bereits. Jedoch weiss ich jetzt, was der Unterschied zwischen TypeScript und JS, sowie zwischen NPM und Yarn ist.
