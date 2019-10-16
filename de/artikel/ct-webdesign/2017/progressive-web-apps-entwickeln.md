## Progressive Web-Apps entwickeln
Die Idee von Progressiven Web-Apps (PWAs) ist, (Web-)Applikationen offline-fähig zu machen. Dafür werden sogenannte ServiceWorker (JavaScript-Code) eingesetzt, welche unabhängig anderer Scripte der Webseite laufen. Diese Scripte lassen sich sehr gut in Google Chrome (Inkognito Modus => weniger caching). Dort findet man in den Entwicklertools das Tab "Application".


![No alt text available](/de/artikel/ct-webdesign/2017/20170907-pwa-chrome-dev-application-tab.png )


In diesem Tab gibt es einen Eintrag Service Worker. Es empfiehlt sich bei der Entwicklung von PWAs die Option "Update on reload" aktiviert zu haben, da dies dafür sorgt, dass der alte Serviceworker durch den neuen ersetzt wird und dabei keine caching probleme auftreten.


Um den Cach komplett zu leeren muss man den Eintrag "Clear Storage" klicken und weiter unten "Clear Site Data" wählen.


Eine kleine beispiel PWA von mir findet man auf [GitHub (PWA-lite)](https://github.com/D4rkMindz/pwa-lite)

