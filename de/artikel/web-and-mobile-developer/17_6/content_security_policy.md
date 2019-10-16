## Content Security Policy (CSP)
Eine sehr bekannnte Hackingattacke ist [Cross Site Scripting (XSS)](/de/wiki/hacking/xss). Bei diesen geht es hauptsächlich darum schädliche Dateien unbemerkt in eine Applikation zu integrieren. Da oft viele Scripts von sogenannten Content Delivery Networks (CDN) bezogen werden, kann man jene Integration pauschal nicht verbieten. Man kann jedoch dank der CSP eine sogenannte Whitelist erstellen. Diese kann im HTML-file im <meta>-Tag innerhalb des Kopfbereiches definiert werden oder im HTTP-Header mitgesendet werden. Unter PHP ist das Setzen eines HTTP-Headers mit der Funktion "header()" sehr einfach. Wenn man unter Apache einen Header definieren möchte, sieht dieser wie folgt aus:


''Header set Content-Security-Policy "<value>"''


In diesem Beispiel steht <value> für einen Wert (bsp.: script-src 'self' => alle Scripts, welche vom Host selber kommen zulassen)


Unter nginx würde man einen Header folgendermassen setzen:


''add_header Content-Security-Policy: "script-src 'self' https://code.jquery.com/code"''


Man kann eine Beschränkung für jede unter HTML5 verfügbare Ressource erstellen:
| Direktive   |
| ----------- | Erklärung ^
| default-src | Die Standard Policy ** wirt sich auf alle Direktiven aus, wie zum Beispiel JavaScript, CSS, Schriftarten, AJAX, et cetera |
| script-src  | Definiert Regeln für JavaScript |
| style-src   | Definiert Regeln für StyleSheets (CSS) |
| img-src     | Definiert Regeln für Bilder |
| connect-src | Definiert Regeln für XMLHttpRequest (AJAX), WebSocket und EventSource |
| font-src    | Definiert Regeln für Schriftarten (Fonts) |
| object-src  | Definiert Regeln für Plugins wie zum Beispiel <object>, <embed> oder <applet> |
| media-src   | Definiert Regeln für Audio- und Videomedien, beispielsweise die HTML5-Tags <audio> und <video> |
| sandbox     | Aktiviert einen Sandboxmodus mit voreingestellten Werten |
| report-uri  | Anstatt ungültige Requests zu blockieren, werden Verstösse an einen anzugebenden Server gesendet |






Mögliche Parameter werden hinter einander geschrieben. ("default-src https: ; image-src 'self' https://static.example.com https://ssl.google-analytics.com; style-src 'self' https://fonts.googleapis.com; script-src 'self' https://code.jquery.com https://ss.google-analytics.com; object-src 'none';")





### Fazit
Von XSS Attacken habe ich bereits gehört. Auch habe ich schon einiges mitbekommen, wie man diese Verhindern kann. Jedoch hat dieser Artikel mir eine weitere, Programmiersprachenunabhängige Variante aufzeigen können.
