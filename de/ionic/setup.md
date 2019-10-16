## Setup
### IDE
[Webstorm installieren](https://www.jetbrains.com/webstorm/)
  - herunterladen und ausführen
    - Alle Endungen aktivieren
    - Run WebStorm
  - Die IDE nach belieben Konfigurieren 
  - Keymapscheme sollte unverändert bleiben
  - IDE Theme kann das selbe sein wie bei PHPStorm
  - Editor Colors and Fonts sollten die gleichen sein wie das Theme
  - Die IDE wieder schliessen



### NodeJS
[[https://nodejs.org/en/NodeJS installieren]]



### Ionic=
Danach dieses [Tutorial](https://ionicframework.com/getting-started/) durchgehen





oder folgdende befehle eingeben:


```
npm install -g cordova ionic
```
Danach in das Development Verzeichnis wechseln und im besten Fall einen Ordner wie Ionic oder Apps oder dergleichen erstellen (so vom Prinzip her wie /htdocs)





dort dann folgenden Befehl ausführen


```
ionic start <ApplikationsName> <templatename>
```



Templates stehen folgende zur Verfügung:
 - sidemenu (Eine App mit einem Menu an der Seite)
 - tabs (Eine App mit tabs)
 - blank (Eine leer App)
Ich empfehle sidemenu als starter.





Den Befehl ausführen


Auto-Update Check aktivieren





Das CMD schliessen und das Projekt in WebStorm öffenen





Unter /src sind alle für uns wichtigen Dateien.





/src/app **Konfiguration**


  * app.components.ts -> Alle Komponenten der App sind hier aufgeführt. Der wert rootPage definiert die Startseite der App. Im Konstruktor wird die App initialisiert und die Vorhandenen Seiten werden definiert. Unter this.pages werden die Elemente der Sidebar definiert.
  * app.html -> Das Layout-Template der App (Sidebar und Header)
  * app.module.ts -> Die verwendeten Module (bsp. Camera)
  * app.scss -> [Default styling Werte](https://ionicframework.com/docs/theming/theming-your-app/)
  * main.ts -> hier wird das Bootstrap Modul definiert (AppModule) (app.module.ts)


	
/src/assets **Bilder werden hier gespeichert**





/src/pages **Seiten**


Hier werden die verschiedenen Seiten (states) der Applikation abgelegt. Mittels folgendem Befehl generiert man eine neue Seite:


```
ionic generate page <PageName>
```
Diese Seiten kann man dann in der Sidebar integrieren:


app.components.ts -> this.pages = { /* hier hinzufügen*/}



/src/theme **variables.scss mit Default Werten**





/src/index.html **Basic Template**





/src/manifest.json **Grundinformationen der App**





/src/service-worker.js **Service Worker**





/config.xml **Konfiguration des Splashscreen und der Icons**





/ionic.config.json **Ionic Interne Konfiguration**