## CSS
Cascading Style Sheets sind für die Definition der Styles einer Webseite

 
verantwortlich. CSS ist auch wie HTML keine Programmiersprache, sondern eine Stylebeschreibungssprache (Style-Sheet-Sprache). Cascading (de: Kaskadierend) bedeutet soviel wie Hintereinanderschaltung.


In der Reihenfolge, in der die CSS-Dokumente geladen werden, in der Reihenfolge werden sie auch verwendet. 


Ein Beispiel:





dok1.css:


           body{background-color: red;}
dok2.css:


           body{backround-color: green;}
index.html


           ‹link rel="stylesheet" href="dok1.css"›
           ‹link rel="stylesheet" href="dok2.css"›






Bei diesem Beispiel wird der Hintergrund des Bodys grün sein, weil dok1.css vor dok2.css geladen wird und 
somit der Befehl von dok1.css überschrieben wird. Wäre die index.html Datei wie folgt aufgebaut:





index.html:


           ‹link rel="stylesheet" href="dok2.css"›
           ‹link rel="stylesheet" href="dok1.css"›






Wäre der Hintergrund rot, weil dok2.css von dok1.css überschrieben worden wäre (in den Tags, wo beide Dateien eine andere Definition haben, wird die zuletzt geladene Datei den Style definieren).