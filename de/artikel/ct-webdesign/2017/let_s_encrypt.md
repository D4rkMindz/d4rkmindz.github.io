## Let's Encrypt
Spätestens seit Snowden ist bekannt, dass der Internet Verkehr massiv abgehört wird. Um es Hackern (und der NSA) schwieriger zu machen kann man Datenpakete mit dem von Netscape eingeführten Secure Socket Layer (SSL) verschlüsseln. Somit ist es nur noch sehr schwer möglich Daten der Webseite (Passwörter, Kontoauszüge) abzuhören. 


Trotz dieser genialen Verschlüsselungstechnik werden zwanzig Jahre später immer noch sehr viele Webseiten nicht über [SSL/TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security) übertragen. Damit man seine Webseite über HTTPS (SSL/TLS) übertragen kann, braucht man ein von einer vertrauenswürdigen Zertifizierungsstelle erstelltes Zertifikat. Solche Anbieter sind zum Beispiel [Symantec](https://www.symantec.com/) oder [Thawte](https://www.thawte.de/). Diese bieten zu einem hohen Preis ein jährliches Zertifikat an. Wenn man jedoch nichts zahlen möchte, kann man auf chinesische Alternativen zurückgreifen. Diese sind jedoch nicht unbedingt vertrauenswürdig.


Um diesem Problem entgegenzuwirken gibt es die Initiative [Let's Encrypt](https://letsencrypt.org/). Diese stellen jedem ein kostenloses, vertrauliches Zertifikat zur Verfügung.


Eine sichere Verbindung bedeutet jedoch auch, dass man alle Inhalte der Webseite über HTTPS lädt. Geschieht dies nicht, gibt der Browser einen Fehler aus (und viele Benutzer verlassen die Webseite).


### Fazit
Ich kenne Let's Encrypt bereits seit Anfang meiner Lehre. Mit Let's Encrypt habe ich meine erste Webseite (und alle anderen) auf HTTPS umgestellt. Coole Sache...