## Offline, was nun?
Mittels [Service Workers](https://developer.mozilla.org/en-US/docs/web/api/service_worker_api) kann man inzwischen auch Offline eine Webseite zum Laufen bringen. Dies ist auch nicht neu, jedoch wird dieser Gedanke mit den [PWAs](/de/artikel/phpmagazin/4.17/progressive_web_app) sehr gefördert.


Nachdem man ein Serviceworker Script registriert hat startet der "Circle of Life"


```
window.navigator.serviceWorker.register('/path/to/serviceworker.js');
```
![No alt text available](/de/artikel/phpmagazin/6.17/sw-lifecycle.png)


#### Parsed
Die Serviceworkerdatei ist fehlerfrei geparst worden.
#### Installing
Der Serviceworker wird installiert. 
#### Error
Dieser Zustand tritt ein, wenn der Serviceworker nicht installiert werden konnte, oder während der Installation ein Fehler aufgetreten ist.
#### Activated
Der Serviceworker wurde erfolgreich installiert.
#### Idle
Kein registrierter Event wird aufgerufen und der Serviceworker wartet auf ein neues Ereignis.
#### Fetch
Der Serviceworker agiert als Proxy zwischen Applikation und Netzwerk. Er überwacht die Anfragen an das Netzwerk.
#### Terminated
Der Serviceworker wird nicht mehr benötigt und wurde deshalb beendet.

### Caching und Fetching
Um Requests zu behandeln gibt es zwei APIs. Die Caching API cacht Requests und deren Responses und die Fetch API wird auslöst, wenn ein Request ausgeführt werden soll.

 
Cachen kann man dabei mit verschiedenen Stragtegien.


##### Cache Only
Alles wird aus dem Cache beantwortet. Ist ein Request nicht im Cache, wird dieser nicht beantwortet.


##### Network Only
Hier überwacht der Serviceworker lediglich die Requests. Die Requests werden jedoch nicht im Cache hinzugefügt. Alles läuft über das Netzwerk.


##### Cache falling back to Network
Die am meisten verwendete Strategie. Wenn im Cache keine Antwort vorhanden ist, wird diese über das Netzwerk geholt und anschliessend gegached. Der Code dazu könnte so aussehen:


```
self.addEventListener('install', (event) => {
  event.waitUntil(
    // open a new cache
    self.caches.open('myCache')
      .then((cache) => {
        // add file logo.png to cache
        cache.add('logo.png')
          .then(() => {
            // finish the installation
            self.skipWaiting();
          });
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    // check if request matches with any request in the cache
    self.caches.match(event.request)
      .then((cacheEntry) => {
        // respond with cache entry or fetch from network
        return cacheEntry || self.fetch(event.request);
      })
  );
});
```
##### Cache and Network Race
Hier wird der Request von der Komponente, welche schneller antwortet, ausgeliefert.


##### Network falling back to Cache
Wenn eine Anfrage an das Netzwerk fehlschlägt wird der Request aus dem Cache geladen.


##### Cache, then Network
Diese Strategie eignet sich besonders für schnell aktualisierende Inhalte. Hierbei wird ein Request direkt an den Cache (ohne Umweg über den Serviceworker) geleitet. Parallel dazu wird ein Request ins Netzwerk gesendet. Die Antwort des Netzwerkrequests wird dann in den Cache geschrieben. Nachdem die Antwort in den Cache geschrieben wurde, wird diese an die Applikation weiter gegeben.





### WorkboxJS
Wer seinen Serviceworker oder dessen Implementierung nicht selbst möchte machen, kann dies mit Hilfe von [WorkboxJS.org](https://developers.google.com/web/tools/workbox/) machen.


### Fazit
Serviceworkers sind eine gute Sache, um die Ladezeit einer Webseite enorm zu verbessern. Auch eine gewisse Offlinefunktionalität ist gut. Jedoch sind Serviceworker noch nicht in allen Browsern [unterstützt](https://caniuse.com/#search=serviceworker).


Ich freue mich darauf, wenn eine 100%ige Unterstützung vorhanden ist.
