## Zehn Bedrohungen für Webanwendungen
Das Open Web Application Security Project (OWASP) ist eine Non-Profit Organisation, welche regelmässig die aktuellsten Bedrohungen für Webapplikationen (und anderes) veröffentlichen.


Seit der letzten veröffentlichung im Jahr 2013 kamen mehrere Punkte hinzu oder wurden abgeändert. 2013 war die Liste wie folgt:


  - Injection
  - Broken Authentication and Session Managment
  - Cross-Site Scripting ([XSS](/wiki/hacking/xss))
  - Insecure Direct Object References
  - Securitry Misconfiguration
  - Sensitive Data Exposure
  - Missing Function Levle Access Control 
  - Cross-Site Request Forgery ([XSRF](/wiki/hacking/xsrf)) 
  - Using Components with Known Vulnerabilities
  - Unvalidated Redirects and Forwards

Nach vier Jahren ist die Liste nun wie folgt:


  - Injection <color #ffc90e>→</color>
  - Broken Authentication <color #ffc90e>→</color>
  - Sensitive Data Exposure <color #ed1c24>↑3</color>
  - XML External Entities (XXE) <color #00a2e8>↗</color>
  - Broken Access Control <color #00a2e8>↗</color>
  - Security Misconfiguration <color #00a2e8>↗</color>
  - Cross-Site Scripting ([XSS](/wiki/hacking/xss))<color #22b14c>↓4</color>
  - Insecure Desrialization <color #00a2e8>↗</color>
  - Using Components with Known Vulnerabilities <color #ffc90e>→</color>
  - Insufficient Logging and Monitoring <color #00a2e8>↗</color>

### Injection
Eine Injection ist, wenn der Benutzer den Interpreter dazu bringen kann, Code auszuführen, welcher er nicht sollte (bsp. [SQL-Injection](/wiki/hacking/sql-injection)) oder wenn die Applikation Daten freigibt, welche diese nicht sollte. Diese Attacke lässt sich mittels escaptem Output (prepared Statements) oder einer Whitelist verhindern.


Auch LDAP muss man Injections verhindern. Dies sollte man mit einem geeigneten Framework machen, jedoch kann man allgemein sagen, dass folgende Zeichen kritisch sind (und maskiert werden müssen):


<color #ed1c24>* = ( ) | & " ; <= ~= :</color>


Neben LDAP und SQL gibt es auch noch [XPath](/wiki/programmiersprachen/php/xml). Mit XPath könnte man auf Teile eines XML-Dokumentes zugreifen, welche man nicht sehen dürfte. Folgende Zeichen sind kritisch (und müssten maskiert werden):


<color #ed1c24>( ) [ ] = : ' , * /</color>


Falls die Applikation Befehle auf [OS](/wiki/os)-Ebene ausführt, ist dies ein potenzieller Angriffsvektor. Verhindern lässt dieser sich durch den Verzicht auf OS-Befehle. Falls dies nicht möglich ist, muss der Input des Benutzers maskiert werden.


Auch bei dem [Simple Mail Transfer Protocol](/wiki/smtp) kann man Injections verhindern. Bei Mails könnte man Schadcode im Header sowie im Body platzieren. Dies muss man verhindern, wenn man als Versender nicht auf einer Spamliste landen möchte.


Neben XPath Injections kann man auch XML-Dateien selbst manipulieren und Daten einschleusen. Um dies zu verhindern muss die XML-Dateien gegen ein Schema gegenprüfen.


Genau das gleiche sollte man auch bei [SOAP](/wiki/divers/api/soap) machen.


## Fazit
Es gibt sehr viele Injection Möglichkeiten. Wenn man eine Applikation entwickelt, muss man nicht alle kennen, jedoch solche, welche mit einer Applikationsrelevanten Technologie zu tun haben. Eine Absicherung gegen solche Angriffsvektoren ist meist sogar sehr schnell erstellt. Dies erhöht die Sicherheit einer Applikation ungemein.

