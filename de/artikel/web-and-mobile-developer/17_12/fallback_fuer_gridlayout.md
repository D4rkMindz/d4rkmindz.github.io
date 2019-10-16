## Fallback für Gridlayout
Das [Grid-Layout](/de/artikel/ct-webdesign/2017/layout-grids-mit-css) habe ich bereits vorgestellt. Was ist jedoch, wenn ein Browser dieses Layout nicht unterstützt?


Die wichtigste Frage, die man sich stellen muss, ist:


> Welcher Browser wird von meiner Zielgruppe verwendet?
Wenn bei der Antwort die Browser IE 10+ oder Edge <16 vorkommen muss man eine Fallbacklösung implementieren. Flexbox eignet sich zum Beispiel dafür.


```
.container {
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.container > * {
  flex: 1;
}
```
Hier wird der Container zuerst als Flexbox definiert, jedoch dann direkt zu einem Grid umgewandelt. Wenn der Browser jedoch Grid nicht unterstützt bleibt ''display: flex''.


Auch die Definition von ''flex: 1'' auf alle Subelemente der Klasse''.container'' funktioniert nur, wenn das ''.container''-Element bereits eine Flexbox ist. Sollte der Browser Grid unterstützen, so sind diese Element Grids und werden von Flexbox Definitionen nicht berücksichtigt.


### Fazit
[CanIUse.com](https://caniuse.com/#search=grid) zeigt auf, welche Browser Grid unterstützen. Sollte einer der Zielbrowser Grid nicht unterstützen ist es wichtig, eine Fallbacklösung zu implementieren. Jedoch sollte man sich immer fragen, ob es die Kosten wert ist, eine solche Lösung zu implementieren.
