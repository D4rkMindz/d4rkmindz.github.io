## Mehr Sichereit mit Köpfchen
Der Header ist ein Teil eines [HTTP-Requestes](/de/wiki/divers/http-request). Durch einen Header kann man gewisse Aktionen autorisieren oder verbieten. Es gibt viele, verschieden Optionen. Ein paar davon sind sogar noch sehr experimentell. Um eine sichere Verwendung zu garantieren empfiehlt sich die Benutzung der Webseite [CanIUse.com](http://www.caniuse.com)





#### Same Origin Policy
Eine [Domain](https://lernjournal.d4rkmindz.ch/doku.php/wiki:url) ist wie folgt aufgebaut:


    https:                                   Schema
          //example.org                      Domain
                       :8080                 Port
                            /path/file.html  Files



Die Same Origin Policy sollte grundsätzlich nur Dateien von einer Quelle (Domain) zulassen. So verhindert man das Laden von schadvollen Dateien. Jedoch ist dies nicht mehr sinnvoll durchsetztbar. Inzwischen kann man ja z. B. jQuery oder Schriftarten von sogenannten Content Delivery Networks (CDN) beziehen.





#### X-FrameOptions
Irgendwann kamen ein paar kreative Köpfe auf die Idee, eine Webseite in ein <iframe>-Tag einzubetten und auf den Eingabefeldern der zu hackenden Webseite ein weiteres Eingabefeld hinzuzufügen. So bekam man die Daten, welche eigentlich in das andere Feld hätten geschrieben werden sollen. Eine solche Attacke kann bei Banken sehr verheerend sein. Um dies zu unterbinden wurde der X-FrameOptions Header entwickelt. Dieser hat drei mögliche Werte: DENY, SAMEORIGIN, ALLOW-FROM.





#### X-ContentSniff
Dieser Header hat lediglich eine Option: nosniff. Browser probieren oft den Inhalt aufgrund vorheriger Analysen zu erraten. Da kann es Mal passieren, dass die vom Server definierten MIME-Typen ignoriert werden. Sehr oft passiert dies bei dem Typ **. Ganz verheerend ist es dann, wenn ein Browser ein Script dank eines geschickt platzierten <script>-Tags  ausführt. Um dies besser zu verhindern gibt es den X-ContentSniff Header.





#### X-XssProtection
Um [XSS](/de/wiki/hacking/xss)-Attacken zu verhindern hat der Browser einen eigenen Filter. Dieser vergleicht die Anfrage- und Antwortdaten. Wenn diese nicht übereinstimmen, reagiert der Browser dem entsprechend. Man kann den X-XssProtection Filter deaktivieren, indem man den Wert auf 0 setzt. Wenn der Wert 1 entspricht, ist der Filter aktiv. Ausserdem verfügt der Filter über weitere Parameter zur Konfiguration des Umganges einer XSS-Attacke:


```
// Eingeschalteter Filter
X-XSS-Protection: 1 

// Erkannte Anfälligkeiten immer blockieren
X-XSS-Protection: 1; mode=block

// Erkannte Anfälligkeiten an eine URL melden
X-XSS-Protection: 1; report=<URL>
```





#### Content Security Policy (CSP)
Die CSP ist ebenfalls ein Header, welcher der Verhinderung von XSS dient. Einen recht ausführlichen Artikel über das Thema CSP findet man [hier](/de/artikel/web-and-mobile-developer/6_17/content_security_policy)





#### Reporting
Um dem Entwickler zu helfen und Browsen sicherer zu machen, haben ein paar Marktführende Browser die automatische Regelung von CSP implementiert. Ein Verstoss wird in der Konsole des Browsers dann geloggt. Der IE unterstütz dann jedoch nur noch ein Teil, während Opera gar keine CSP implementation hat, welches für einen Entwickler auch angenehmer sein kann.





#### IFrames
Wenn man einen Inhalt über ein IFrame laden möchte, geschieht das in einer sogenannten Sandbox. Jedoch lässt sich dieser Sandbox Modus entfernen. Die Sandbox stellt dem Hacker dann jedoch dann eine weitere Hürde in den Weg. Man sollte jedoch den Zugriff auf übergeordnete Dokumente entfernen.





#### Skript-Sicherheit mit CSP
Man kann Elemente, welche man nicht selber kontrolliert (bsp. <input>-Tags) mit dem Attribut 'rel="noopener"' versehen. Dieses Attribut verhindert die Ausführung von Skripts aus dem gleichen Dokument (Inline-Skripts).





#### Lokale Ressourcen
Ältere Webseiten könnten noch Inline-Skripts verweden. In manchen Fällen kann man die Header recht einfach anpassen. In anderen Fällen wird es jedoch schwer. Man kann deshalb die per default gesetzten Einschränkungen individuell anpassen. Die beiden Optionen ** und ** erlauben die Ausführung von Inline-Skripts, respektive der Funktion eval().





#### SubResource Integrity
Viele Webseiten beziehen Skripts von externen Resourcen. Diese Resourcen nennen sich Content Delivery Network (CDN). Wenn ein solches CDN gehackt werden würde, wäre das ein Supergau für viele Webseiten. Deshalb gibt es den Subresource Integrity Header, welcher einen Hashwert des heruntergeladenen Skripts abfragt und vergleicht. Wenn sich die Datei verändert, dann ändert sich auch dieser Hashwert. Dieser Header wird wie folgt für Skripte und Stile gesetzt.


```
Content-Securtiy-Policy: require-sri-for script style;
```



#### HTTP Strict Transport Security (HSTS)
Wenn eine Webseite über HTTPS ([SSL](/de/wiki/divers/ss)/TLS) erreichbar ist, ist sie Fallbackmässig immer per HTTP auch erreichbar. So könnte ein Hacker eine Downgrade-Attacke durchführen und alle Daten, welche über die Verbindung übertragen werden, auslesen. HSTS löst dieses Problem, da im Header definiert wird, wenn jemals eine sichere Verbindung hat aufgebaut werden konnte, dann wird diese immer upgegradet (beim Aufbau einer Verbingung über HTTP). Ein  HSTS-Header, welcher ein automatisches Upgrade für den Zeitraum von 604800 Sekunden definiert, sieht wie folgt aus.


```
Strict-Transport-Security: max-age=604800;
```



#### Cross-Site Request Forgery (CSRF)
CSRF ist das senden eines Requests, welcher nur ausgeführt wird, wenn ein Benutzer eingeloggt ist (bsp. bin ich eingeloggt bei Facebook und der Hacker schickt einen Request, um eine dubiose Seite zu liken). Einen recht ausführlichen Artikel über das Thema CSP findet man [hier](/de/wiki/hacking/xsrf).





### Fazit
Es ist bemerkenswert, wie viele Absicherungen es gegen verschieden Attacken es inzwischen gibt. Einige waren mir bereits bekannt, andere habe ich zum ersten Mal gelesen.
