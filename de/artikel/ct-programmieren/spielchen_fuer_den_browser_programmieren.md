## Spielchen für den Browser programmieren
In modernen Browser kommen immer mehr kleine Spiele zum Einsatz. Diese werden mittels [HTML](/de/wiki/programmiersprachen/html), [CSS](/de/wiki/programmiersprachen/css) und [JavaScript](/de/wiki/programmiersprachen/javascript) umgesetzt. Meistens kommt auch noch die JavaScript Bibliothek [jQuery](/de/wiki/programmiersprachen/javascript/libraries/jquery) zum Einsatz. Wenn man dann gewisse Elemente verändern will kann man diese dank jQuery mittels $('elementName') ansteuern. Parallel dazu kann man auch die Elemente spezifisch nach der ID (getElementById()), dem Namen (getElementsByName()) oder nach dem Klassennamen(getElementsByClassName()). Wenn man eine Tasteneingabe registrieren möchte geht die mittels registrieren im Fenster registrieren, sobald diese geschehen.
```
// $(windows) = ganzes Browserfenster
$(window).on({
  keypress: onKeyPressed
});

function onKeyPressed(){
  // Code welcher nach dem Tastendruck ausgeführt werden soll 
  // z. B. event.getSource() === IRGEND_EIN_KEYCODE
}
```
Events lassen sich auch automatisch auslösen. Dies ist mit $.Event() möglich.
```
function onKeyPressed(event){
  // Den gerückten Buchstaben erhalten
  var c = String.fromCharCode(event.ccharCode).toLowerCase();
  simulateKeyPress(c)
}

function simulateKeyPress(c){
  var event = $.Event("keypress")M
  event.keyCode = event.which = event.charCode = c.charCodeAt();
  $(window).trigger(event);
}
```

### Fazit=
Ich fand die Idee, simple Spiele wie [Hangman](http://www.ct.de/wbzg) (im Artikel ausführlicher beschrieben) im Browser umzusetzen sehr lustig. Es ist sehr einfach möglich und würde natürlich auch Spass machen. Zum lernen fände ich es super so etwas zu machen, jedoch kenne ich bereits viele von den erwähnten jQuery funktionen was ein nachprogrammieren eher langweilig gestalten würde. 
