## Mehr als eine Java-Alternative
Kotlin ist eine Sprache, welche sich in Java VM, JavaScript und seit neustem auch nativen Code transpilieren lässt. Die Transpilierung zu [WebAssembly](http://webassembly.org/) ist noch geplant. So kann man beispielsweise wie in TypeScript, stark typisiertes JavaScript in Kotlin entwickeln.


Dazu muss man den [Kompiler](https://kotlinlang.org/docs/tutorials/command-line.html) installieren. Man könnte dann beispielsweise ein Projekt machen, welches auf einem PHP-Server läuft und das Frontend-JavaScript in Kotlin geschrieben ist.





#### Installation
Zum installieren des Kompilers benötigt man mindestens Java JRE 1.8.x. Jedoch empfiehlt sich hier die JDK-Version zu verwenden. Anschliessend lädt man den [aktuellsten Kompiler](https://github.com/JetBrains/kotlin/releases/latest)  herunter. In der ZIP-Datei befindet sich der Ordner "kotlinc" mit allen benötigten Bibliotheken und Binaries. Dieser Ordner sollte in ein gut erreichbares Verzeichnis entpackt werden (bsp. "D:
dev
kotlin"). Die für die Transpilierung von JavaScript verantwortliche Batch-Datei ist die Datei "konlinc-js.bat".





#### Kompilieren
Bevor jedoch das JavaScript ausgeliefert werden kann, muss man dies mit dem Kotlin JavaScript Kompiler transpilieren. Dies kann man entweder mit einer Batch-Datei machen oder mittels einer "Run Configuration" in IntelliJ IDEA (oder anderen Produkten von JetBrains).
Die Batch-Datei hier sagt dem Kompiler, dass er die Version ausgeben soll. Ausserdem soll er jeglichen Output auch ausgeben (engl. verbose, gesprächig). Zusätzlich soll eine Source Map erstellt werden. Das ganze soll dann im Output-Ordner laden. Das letzte Argument ist, welche Dateien gelesen werden sollen. Hier sind übrigens Wildcard-Instruktionen erlaubt, was vieles einfacher macht.


Das Zeichen "^" lässt einen Zeilenumbruch in der Datei zu, ohne diesen in den Command zu übertragen. Dies ermöglicht eine schöne Formatierung. Jedoch muss man, damit der Befehl korrekt ausgeführt wird, vor dem "^" ein Leerzeichen einfügen.
```bat
@echo off
set compiler=D:
dev
kotlin
bin
set project=C:
xampp
htdocs
kotlin-test

del %project%
js
*.js
del %project%
js
*.map

%compiler%
kotlinc-js.bat |
-version |
| -------- |
-verbose |
-source-map |
| ----------- |
-output %project%
js
some-name.js ^
%project%
kotlin
*.kt
```
#### Code
Kotlin ist Java sehr ähnlich. Jedoch eben nur ähnlich. Der Einstieg ist wie in Java über eine statische Methode des Objektes, sondern nur eine simple, globale ''main()'' Funktion.


Um nun "Hello World" in der JavaScript-Konsole des Browsers auszugeben muss man folgenden Code schreiben.
```
fun main(args: Array<String>) 
{
  println("Hello World")
}
```
Ein Problem, welches durch die starke Typisierung entsteht ist, dass das JavaScript Laufzeitelement [document](https://wiki.selfhtml.org/wiki/JavaScript/DOM/Document) oder [window](https://wiki.selfhtml.org/wiki/JavaScript/Window) zur Zeit der Kompilierung nicht existieren. Um dieses Problem zu lösen gibt es das Schlüsselwort "external", welches man vor die Definition der globalen Konstante notiert.


Document, sowie Window sind elemente des Packages "org.w3c.dom"


```
import org.w3c.dom.*

external val window: Window
exernal val document: Document

fun main(args: Array<String>)
{
  val message = document.getElementById("some_id") as HTMLElement
  message.innerText = "I found you via Kotlin 😏"
}
```
### Fazit
Wenn man JavaScript haben möchte, jedoch auf die schwache Typisierung (und weitere Nachteile) verzichten möchte, dann ist Kotlin sicher eine gute Alternative. Ausserdem ist es sicher Vorteilhaft, dass Kotlin sich in mehrere Sprachen transpilieren lässt.