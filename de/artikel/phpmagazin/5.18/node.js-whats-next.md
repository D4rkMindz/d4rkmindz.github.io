# Node.js - What's next
[Node.js](https://nodejs.org) ist nun im zweistelligen Versionierungsbereich angekommen. Seit dem ersten Release hat sich vieles, schnell verändert. Nun ist endlich ein wenig "Ruhe" eingekehrt. Jede gerade Version wird 18 Monate lang entwickelt und erhält danach noch 12 Monate lang Security-Patches. Damit wurde es ermöglicht, Node.js Grossprojekte besser planen zu können.





## Was ist neu in Node.js 10
In den [Releasenotes](https://nodejs.org/en/blog/release/v10.0.0/) werden folgende Änderungen genannt:
  * Engere Abstimmung mit den experimentellen Releases von Node-ChakraCore
  * Das [N-API](https://nodejs.org/api/n-api.html#n_api_n_api) hat den experimentellen Status verlassen und wurde offiziell als stabiles Modul in den Kern der Plattform aufgenommen.
  * Innerhalb des [async_hooks](https://nodejs.org/api/async_hooks.html)-Moduls wurden einige zuvor als Deprecated markierte Methoden entfernt
  * Eine der häufigsten anzutreffenden Deprecation Warnings wird durch eine Änderung am [Buffer](https://nodejs.org/api/buffer.html)-Modul verursacht. Buffer-Objekte sollten aus Sicherheits- und Usabilitygründen nicht mehr mit dem Buffer-Konstruktor erzeugt werden. Stattdessen sollten ''Buffer.alloc'', ''Buffer.allocUnsafe'' oder ''Buffer.from'' verwendet werden.
  * Die ''console.table''-Methode wurde aufgenommen um Informationen in Tabellenform auf der Konsole auszugeben.
  * Einige Methoden des [crypto](https://nodejs.org/api/crypto.html)-Moduls wurden als deprecated markiert
  * Node.js 10 basiert auf Version 6.6 der [V8 Engine](https://v8.dev/blog/v8-release-66)
  * OpenSSL wurde auf die Version 1.1.0h aktualisiert
  * Dem Dateisystemmodul wurde eine Promise-basierte Variante der API hinzugefügt. Diese ist unter fs/promises erreichbar
  * Die Performance API wurde überarbeitet
  * Im [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) wird await mit dem ''--experimental-repl-await''-Flag auch ausserhalb von Funktionen unterstützt. Dieses Feature ist ein Vorgeschmack auf das Top-Level-await, das sich aktuell im Draft-Status im TC39 befindet
  * Die [WHATWG URL API](https://nodejs.org/dist/latest/docs/api/url.html) ist global verfügbar

## HTTP/2
Die grösste Änderung ist die Implementierung des HTTP/2 Protokolles. Dieses ist performanter und lässt Server-Pushes zu. Somit kann man Dateien ohne Anfrage des Clients zu ihm schicken. Blockierende CSS- oder JS-Dateien gibt es somit nicht mehr.


```javascript
import fs from 'fs';
import { createSecureServer, constants } from 'http2';

const { HTTP2_HEADER_STATUS, HTTP2_HEADER_CONTENT_TYPE } = constants;

const options = {
  key: fs.readFileSync('./localhost.key'),
  crt: fs.readFileSync('./localhost.crt'),
};

const server = createSecureServer(options);

server.on('stream', (stream, headers) => {
  stream.responde({
    [HTTP2_HEADER_CONTENT_TYPE]: 'text/plain',
    [HTTP2_HEADER_STATUS]: 200,
  });
  stream.end('Hello World!');
});

server.listen(8080, () => console.log('[SERVER] listening on port 8080'));
```



## Fazit
Node.js 10 hat viele tolle Änderungen. Die meiner Meinung nach wichtigste ist jedoch die Implementierung des HTTP/2 Protokolls, welches es ermöglicht, Node.js Applikationen viel schneller Inhalte dem Client auszuliefern.


[In PHP](https://blog.cloudflare.com/using-http-2-server-push-with-php/) lässt sich das jedoch ebenfalls sehr "einfach" implementieren.