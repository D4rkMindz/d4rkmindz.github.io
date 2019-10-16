## Angepasst
Bei vielen Webseiten merkt man sofort, dass diese mit [Bootstrap](http://getbootstrap.com/) gemacht sind. Sie sehen alle gleich aus. Jedoch muss das nicht sein. Man kann nämlich seit Version 4 Bootstrap nach eigenem Geschmack modifizieren.


Man könnte zwar auch über die Entwicklertools (F12) die Bootstrap Klasse herausfinden und diese anschliessend überschreiben, jedoch ist diese Methode nur für kleine Anpassungen geeignet.


Für grössere Anpassungen ist die Verwendung von [SASS](http://sass-lang.com/) empfohlen. Um SASS verwenden zu können, muss man einen Sass-Compiler, einen Autoprefixer und Flexbug-Fixes installiert haben.





### Installationen
Um die von Bootstrap zur Verfügung gestellte Umgebung nutzen zu können muss man [Node.js](https://nodejs.org/en/) installiert haben. Danach muss man noch [[http://gulpjs.com/Gulp]] installieren:
```
//1. Gulp CLI installieren (global)
npm install --global gulp-cli

//2. Gulp installieren
npm install --save-dev gulp

//3. Gulp-SASS installieren
npm install gulp-sass --save-dev

//4. Gulp-Post-CSSinstallieren
npm install gulp-postcss --save-dev

//5. Post-CSS Flexbugs installieren
npm install postcss-flexbugs-fixes --save-dev

//6. Autoprefixer installieren
npm install autoprefixer --save-dev
```
Danach kann muss man im Projektverzeichnis ein gulpfile.js anlegen unnd darin folgenden Code schreiben. Dieser Code ist zuständig für die Ausführung des SASS Kompilierungsvorganges (''$ gulp sass''):
```
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var flexbugsfixes = require('postcss-flexbugs-fixes);
var autoprefixer = require('autoprefixer');

//Definition der berücksichtigten Browser (die letzten zwei Versionen von den Browsern,
//welche bei caniuse.com mehr als 1% haben)
var processors = [
  flexbugsfixes,
  autoprefixer({
    browsers: ['last 2 versions', '> 1%']
  })
];

//Definition des Ortes der Sass Dateien sowie des Outputverzeichnisses
var input = './scss/*.scss';
var output = './dist/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

//Definition des auszuführenden Tasks
gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(output));
});
```
Eine Alternative zur Kompilierung mittels CLI ist [Koala-app](http://koala-app.com/).





### Arbeiten mit Sass-Dateien
Um Konflikten bei einem Bootstrap update aus dem Weg zu gehen, gibt es in Bootstrap eine _custom.scss Datei. Mit dieser muss man arbeiten, wenn man Bootstrap verändern möchte. Wenn man zentrale Werte verändern möchte, so kopiert man diese aus _variables.scss und überschreibt die Werte in der _custom.scss Datei. Jedoch muss man beim kopieren darauf achten, dass man das !default weglässt. Dies definiert, dass nur wenn keine andere Definition existiert, der vor !default definierte Wert verwendet wird.





Eine Anleitung von Bootstrap selber findet man [hier](http://getbootstrap.com/docs/4.1/getting-started/introduction/)





### Fazit 
Ich finde es super, dass man die Farben sowie das Verhalten von Bootstrap konfigurieren kann. Das kann einem bei der Individualisierung seiner eigenen Webseite sehr viel helfen.