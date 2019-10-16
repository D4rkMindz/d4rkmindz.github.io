## Webtypografie mit HTML und CSS
Auf dieser [Webseite](http://practicaltypography.com/) findet man viele, interessante Artikel zum Thema.


### Wichtige CSS Einheiten
Um die Typografie zu verbessern, kann man folgende CSS-Werte Manipulieren:
| CSS             |
| --------------- | Auswirkung                           | Empfehlung                        |
| --------------------------------- |
| max-width       | Textbereite                          | 60-80 Zeichen lang                |
| font-size       | Schriftgrösse                        | 15-25 px                          |
| line-height     | Höhenabstand zwischen den Buchstaben | 120% - 145% der Schriftgrösse     |
| word-spacing    | Abstand zwischen den Wörtern         | nicht zu hoch (wirkt "löchrig")   |
| letter-spacing  | Abstand zwischen den Buchstaben      | Bei Überschriften niedrig, bei Fliesstexten eher hoch (5% - 12% der Schriftgrösse) |
| color           | Schriftfarbe                         | Schwarze (#222) Schrift auf Weiss |
| text-align      | Textausrichtung                      | left                              |
| -webkit-hyphens | Automatischer Textumbruch            | auto                              |
| -ms-hyphens     | Siehe -webkit-hypens                                                    ||



### Tricks
Wenn man zum Beispiel bei einem Text den ersten Buchstaben gross schreiben möchte, kann man dies erreichen, indem man ihn in ein <span>-Tag fasst und diesen mit der entsprechenden Klasse versieht.


```css
.initial{
  float: left;
  padding: 2px 5px 0 0;
  font-size: 300%;
  font-weight: bold;
  line-height: 1;
}
```
### Schrift
Die Schrift ist ein sehr wichtiger Faktor bei der Benutzerfreundlichkeit. Man sollte laut [Matthew Butterick](http://practicaltypography.com/) niemals Arial oder Times New Roman verwenden.


Ein guter online [WYSIYG-Editor](/de/wiki/wysiwyg) für Schriften ist [google](/de/http/**fonts.google.com/).





### Fazit
Webtypografie ist ein interessantes Thema, welches darüber entscheidet, ob man den Inhalt einer Webseite gerne liest oder nicht.
