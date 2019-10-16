## HTML++
HTML5 bringt viele Neuerungen. Der ''<canvas>'' und ''<video>'' Tag sind nur wenige davon. Beispielsweise kann man nun ein Formularfeld mittels des Attributes ''required'' zwingen, nicht leer zu sein. Auch gibt es inzwischen verschiedene neue Inputtypen.


```html
<input type="email" required>
<input type="color">
<input type="date">
```

### Accordion
Ebenfalls gibt es die Möglichkeit mit reinem HTML ein Accordion zu erstellen.


```html
<details>
  <summary>Zusammenfassung von Kapitel 1</summary>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ...
  </p>
</details>
```

### Colorpicker
Wenn man gewisse default Farben für den colorpicker definieren möchte, kann man dies mittels des ''<datalist>'' Tags machen.


```html
<input type="color" list="farbliste">
<datalist id="farbliste">
  <option value="#ff0000"></option>
  <option value="#00ff00"></option>
  <option value="#0000ff"></option>
</datalist>
```

### Kontextmenu
Ebenfalls lässt sich in Chrome und Firefox das Kontextmenü (Rechtsklick) mittels folgendem Code ergänzen.


```html
<div contextmenu="supermenu">
  Click right here
</div>
<menu type="context" id="supermenu">
  <menuitem label="Aktion"></menuitem>
  <menuitem label="Weitere Aktion"></menuitem>
</menu>
```

### Keine Übersetzung
Grosse Suchmaschinen bieten inzwischen die Möglichkeit, Webseiten in die eigene Sprache zu übersetzen. Dies führt teileweise jedoch dazu, dass man Text, welcher nicht übersetzt werden sollte, übersetzt wird (bsp. Code). Um dies zu Verhindern kann man das ''translate="no"'' Attribut verwenden.


```html 
<p>Choose <span translate="no">File | Open</span> on the main menu</p>
```
Wichtig ist dabei, dass man die Sprache angibt.


```html 
<html lang="de"> 
oder
<html lang="de_CH">
```
### Fazit
HTML5 bringt immer mehr praktische Attribute und Tags. Viele werden bergen eine grosse Macht und werden trotzdem nicht wirklich verwendet, was grundsätzlich schade ist.

