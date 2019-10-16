## Layout-Grids mit CSS
Das aufkommende Grid-Layout ist eine lang ersehnte CSS Optimierung. CSS war bisher immer schon sehr mächtig. Wo es jedoch immer ein wenig "schwach" war, war die implementierung von Layouts. Dies hat sich nun mit dem Grid-Layout geändert. Das Grid-Layout ist ein flexibles Layout. Man definiert es mittels ''display: grid;''.


Wenn man den Body als Grid definiert, wird dies für alle Kind-Elemente übernommen.


Man kann  dann das grid-layout sehr einfach anordnen, indem man die Reihenfolge der Elemente in einem String als Reihe definiert:
```css
body {
	height: 100vh;
	margin: 0;
	display: grid;
	grid: 
        "head head" 4em 
        "nav main" 1fr 
        "nav foot" 4em 
        /8em 1fr;
}
header {
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  background: #ffff00;
}

nav {
  /*Define area as nav*/
  grid-area: nav;
  background: #00ff00;
}

main {
  background: #0000ff;
}

footer {
  background: #8000ff;
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
    <header>
       Überschrift
    </header>
  
    <nav>
      Navigation
    </nav>
  
    <main>
      Inhalt
    </main>
  
    <footer>
      Footer
    </footer>
  </body>
</html>
```
Das Resultat dieses Codes sieht wie folgt aus


![No alt text available](/artikel/ct-webdesign/2017/ct-webdeveloper-layout-grid-mit-css.png )
### Fazit
CSS ist nun dank Grid viel mächtiger. Ausserdem scheint grid recht "einfach" zu sein. 