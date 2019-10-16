## CSS Feature Detection
Viele Browser unterstützen das eine oder andere nette CSS-Feature. Und dann gibt es die anderen Browser, die dieses Feature eben nicht verstehen. Was macht man mit diesen? Man bastelt einen Workaround.


Es wäre doch toll, wenn man den Browser über CSS fragen könnte, ob ein Feature von ihm unterstützt wird oder nicht. Nun, es ist möglich dies zu machen:


```
/* Code für kein Grid Support */
@supports (display: grid) {
  /* Code wird ausgeführt wenn "display: grid" unterstützt wird.*/
}
```
''@supports'' funktioniert in [allen Browsern](https://caniuse.com/#search=%40supports) ausser in IE11.


Als alternative zu nativem CSS Code gibt es noch die Möglichkeit features zu erkennen (oder eben nicht zu erkennen) mittels [Modernizr](https://modernizr.com).


Mit dieser Library kann man ganz einfach überprüfen ob ein Feature unterstützt ist oder nicht.


```
if (Modernizr.cssgrid) {
  // Grid ist unterstützt
}
```
### Fazit
CSS wird nicht und wird nie immer zu 100% von allen Browsern ohne workaround unterstützt. Um trotzdem gute Layouts zu machen während man dies mit den neusten Technologien umsetzt kann man Modernizr verwenden. Dieser hilft bei der Erkennung von CSS-Features