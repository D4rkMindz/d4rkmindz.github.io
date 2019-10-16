## Boost für den Service Worker
Um Daten in einer [PWA](/artikel/phpmagazin/4.17/progressive_web_app) speichern zu können gibt es verschiedene Möglichkeiten. Man kann für einfache Key-Value Daten den [localStorage](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage) verwenden. Diesen sollte man jedoch nur für Daten wie Konfiguration oder Ähnliches auf dem Client verwenden. Jedoch kann ein Service Worker nur auf asynchrone APIs zurückgreifen. Der localStorage hingegen ist nicht asynchron.


Wenn das Bedürfnis nach einem datenbankähnlichen, asynchronen Speicher vorhanden ist, kann man [IndexedDB](https://developer.mozilla.org/de/docs/IndexedDB) verwenden. Jedoch ist das Handling von IndexedDB sehr kompliziert. Abhilfe schafft hier eine Wrapperlibrary namens [Dexie](http://dexie.org/).


Um die in der IndexedDB gespeicherten Daten dann noch mit dem Server im Hintergrund abgleichen zu können (Bsp. eine Anzahl Likes verändert sich ja andauernd), kann man die [Web Background Synchronization](http://wicg.github.io/BackgroundSync/spec/) verwenden. Die Synchronization ist nur dann Verfügbar, wenn der User-Agent des Browsers der Ansicht ist, dass genug Verbindungsgeschwindigkeit und Batterie (auf mobilen Geräten) zur Verfügung steht.


Jedoch befindet sich der Periodic-Sync (Hintergrund Sync), im Gegensatz zum One-Off-Sync (manueller Sync), noch in der Konzeptionierung.


### Fazit=
Wenn man den Service Worker, die Cache API, die IndexedDB und künftig auch Background-Sync gut kombiniert kann man die Geschwindigkeit von Webseiten enorm erhöhen. So werden lange Wartezeiten und genervte Kunden reduziert.