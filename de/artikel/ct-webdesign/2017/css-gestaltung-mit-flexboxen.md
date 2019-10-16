## CSS-Gestaltungen mit Flexboxen
Flexbox ist ein CSS-Layout. Dieses Layout ist jedoch nicht ganz so mächtig wie Grid. Es löst bereits viele Probleme, welche früher mittels float, etc gelöst wurden.


Man kann z.B. die <div>s einer Sektion mittels flex regeln, dass diese alle gleichmässig in drei Spalten aufgeteilt sind:
```css
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

section > div {
  flex: 1 0 auto;
  margin: 1em;
}
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <section>
      <div>Absatz 1</div>
      <div>Absatz 2</div>
      <div>Absatz 3</div>
    </section>
  </body>
</html>
```
Resultat:


![No alt text available](/de/artikel/ct-webdesign/2017/ct-webdeveloper-css-gestaltung-mit-flexboxen.png )
