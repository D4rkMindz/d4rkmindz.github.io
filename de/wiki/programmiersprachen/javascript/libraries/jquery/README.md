## jQuery
[jQuery](https://jquery.com/) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.





JQuery ist eine JavaScript Library welche neue oder verbesserte Funktionen wie DOM manipulation und die JQuery Selektoren. Wo man in JavaScript document.getElementById('id') verwenden muss, geht das mit Hilfe von JQuery ganz einfach über $('#id'). Weiterhin kann man JQuery gut mit Ajax kombinieren, um mit dem Server zu kommunizieren. JQuery ist plattformunabhängig und steht unter der MIT Lizenz.

Im folgenden Beispiel werden wir den Text eines Paragraphen ändern:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="js/jquery.js"></script> <!-- JQuery einbinden -->
    <script src="js/script.js"></script> <!-- Eigenes Script file einbinden -->
  </head>
  <body>
    <p id="paragraph"> Hallo </p>
  </body>
</html>
```

Dies uns nun eine leere Seite mit dem Text "Hallo".

Unserer script.js Datei fühgen wir nun folgendes hinzu:
```javascript
$(document).ready(function() { // Wird aufgerufen, wenn das Dokument geladen ist.
  $('#paragraph').text("Hallo Welt"); // Hohlt das Element mit der id paragraph und ändert den Text.
});
```
Nun sollte sich der Text von "Hallo" zu "Hallo Welt" geändert haben.


Weitere Selektoren findet Ihr unter [JQuery Selektoren](/wiki/programmiersprachen/javascript/libraries/jquery/selectors).





jQuery ist die meistverwendete JavaScript-Bibliothek. Jede zweite Website und drei Viertel der 10.000 meistbesuchten Websites nutzen jQuery (Stand: Juli 2014). jQuery wird in vielen [Content-Management-Systemen](/wiki/cms) und Webframeworks bereits mitgeliefert, zum Beispiel in Joomla, WordPress, MediaWiki oder Drupal.
**de.wikipedia.org/wiki/JQuery|Wikipedia]])//
### AJAX
Asynchronous JavaScript XML, ist nicht eine Technologie an sich, es ist mehr ein Begriff, der 2005 von Jesse James Garrett geprägt wurde, welcher einen "neuen" Ansatz beschreibt, um eine Reihe von bestehenden Technologien zusammen zu verwenden. Unter diesen Technologien sind: HTML oder XHTML, Cascading Style Sheets, JavaScript, das [Dokumentobjektmodell](/wiki/divers/dom), XML, XSLT und vor allem das XMLHttpRequest-Objekt.


Wenn diese Technologien im Ajax-Modell kombiniert werden, können Web-Applikationen schnelle, inkrementelle Updates der Benutzeroberfläche vornehmen, ohne die gesamte Browser-Seite neu zu laden. Dies macht die Anwendung schneller und besser für Benutzeraktionen.


**developer.mozilla.org/en-US/docs/AJAX|developer Mozilla]])//





Bei Ajax sendet man wie folgt einen request (in diesem Beispiel "https://www.d4rkmindz.ch/users/create").


```javascript
$.ajax({
  //HTTP GET Methode
  type: "GET",
  contentType: 'application/json',
  url: https://www.d4rkmindz.ch/users,
  //GET Request nicht cachen
  cache: false
}).done(function (response) {
  //Bei Erfolg die Antwort anzeigen (mittels alert)
  alert(response);
}).fail(function (xhr) {
  // Wenn ein Fehler auftritt wird diese funktion ausgeführt.
  // Wenn xhr.responseJSON und xhr.responseJSON.message existieren, so wird xhr.responseJSON.message verwendet.
  // Andernfalls hat der Client keine Antwort vom Server erhalten und "Server Error" wird verwendet.
  alert(xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : "Server Error");
})
```