## Progressive Web App (PWA)
Im Jahr 2015 wurde von Google der Begriff Progressive Web App geprägt. Eine PWA ist eine Applikation, welche installierbar und offline nutzbar ist, Push-Benachrichtigungen empfangen kann und ohne nativen Container auskommt.


PWAs sind eigentlich Webapplikationen, welche offline nutzbar sind. Sie sind in [HTML5](/de/wiki/programmiersprachen/html), [CSS3](/de/wiki/programmiersprachen/css) und [JavaScript](/de/wiki/programmiersprachen/javascript) geschrieben und können nur über [HTTPS](/de/wiki/divers/protokolle/http) erreicht werden. Jedoch können PWAs auch auf Resourcen eines Gerätes wie z. B. die Kamera zugreifen.


Damit man beim durchlaufen einer PWA das Gefühl hat, sich in einer nativen App zu bewegen, setzt man auf SPAs (Single Page Application), welche nur den Inhalt ersetzen und nicht wie im Web die ganze Seite neu laden.


Beim Programmieren einer PWA ist es wichtig, dass man eine "manifest.json"-Datei lädt. Diese enthält META-Daten wie den Namen, Icons, Hintergrundfarben oder Ausrichtung der App.





Um die Applikation offline verfügbar zu machen muss man einen Service-Worker Implementieren. Dafür muss man zuerst prüfen, ob der Browser Service-Worker unterstützt und danach muss man ihn relativ zu der ausgeführten HTML-Datei starten. Ein Codebeispiel findet man [hier](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker#Examples). Bei der Installation gibt es verschieden Zustände:


  * **Parsed**: Der Service-Worker wurde erfolgreich geparst
  * **Installing**: Der Service-Worker wird installiert
  * **Error**: Beim installieren des Service-Workers ist ein Fehler aufgetreten
  * **Activated**: Der Service-Worker wurde erfolgreich aktiviert und steht im Browser zur Verfügung
  * **Idle**: Der Service-Worker wurde erfolgreich aktiviert und wartet auf Aufgaben
  * **Terminated**: Der Service-Worker wird nicht mehr benötigt und zum schonen von Resourcen beendet (wird, wenn benötigt, neu gestartet)
  * **Fetch/Message**: Der Service-Worker überwacht die Kommunkation über das Netzwerk und beantwortet Anfragen nach Möglichkeit aus dem Cache.



Der Service-Worker kann Dateien, welche normalerweise über das Interne gelaen werden im Cache speichern und von dort aus abrufen. Um einen Service-Worker zu programmieren stellt Google zwei Tools zur Verfügung: [Service-Worker Precache](https://github.com/GoogleChrome/sw-precache) (Caching Strategien) und [Service-Worker Toolbox](https://github.com/GoogleChrome/sw-toolbox) (konfiguration einer initialen Cachebefüllung).





Wenn man überprüfen möchte, ob eine PWA dem Ursprungsgedanken von Google nahe kommt kann man das von Google entwickelte Tool [Lighthouse](https://developers.google.com/web/tools/lighthouse/) nutzen. Dieses lässt sich als Chrome Extension oder mittels Node.js installieren. Auf Basis eines von Google erstellten Rankings werden bis zu 100 Punkte vergeben. Bei diesem Ranking werden folgende Punkte überprüft:
  * Service-Worker installiert
  * Offline verfügbar
  * Schnelle Ladezeit der App 
  * Verbindung über HTTPS (resp. Weiterleitung von HTTP auf HTTPS)
  * manifest.json existiert
  * Reaktion auf Bildschirmgrössenveränderung (Responisivität)



### Fazit
Ich habe viel neues über PWAs und vorallem Service-Worker kennen gelernt. Auch wurden die Möglichkeiten eines Service-Workers klar und gut ersichtlich dargestellt.


[Weiterer Artikel](/de/artikel/phpmagazin/6.17/offline_was_nun) 
