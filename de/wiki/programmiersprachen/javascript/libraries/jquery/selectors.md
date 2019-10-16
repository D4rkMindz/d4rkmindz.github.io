# JQuery Selektoren

Mit JQuery Selektren kann man auf Elemente im DOM zugreifen. Diese Liste ist unvollständig und beinhaltet nur die wichtigsten Selektoren! Ein Liste mit allen Selektoren gibt es auf der [Website von JQuery](https://api.jquery.com/category/selectors/).

**#id**


Mit dem ID Selektor kann man auf ein Element mit einer bestimmten ID zugreifen. Eine ID muss immer einmalig sein.
```javascript
$("#id") // #id ist mit der ID des zu bearbeitenden Elementes zu ersetzen.
```

**.class**


Mit dem Klassen Selektor kann man a ein oder mehrere Element(e) mit einer bestimmten Klasse zugreifen. Eine Klasse kann beliebig oft vorkommen.
```javascript
$(".class") // .class ist mit der Klasse des/der zu bearbeitenden Elemente(s) zu ersetzen.
```

**Attribut Selektor**


Mit dem Attribut Selektor kann man auf definierte Attribute wie beispielsweise "value" oder "data-name" zugreifen.
```javascript
$("[value=wert]") // Sucht nach allen Feldern mit valu="wert".
$("[data-name=wert]") // Sucht nach allen Feldern mit data-name="wert".
$("input[data-name=wert]") // Sucht nach allen input Feldern mit data-name="wert".
```



**Data Attribut Selektor**


Neben dem normalen Attribut Selektor kann man auch mittels .data() auf ein Data-Element (alle Elemente welche mit "data-" anfangen) zugreifen.
```javascript
$.data("name") // Sucht nach allen data-name Attributen.
$.data("name").find("myName") // Sucht nach allen data-name Attributen mit dem Wert "myName"
```