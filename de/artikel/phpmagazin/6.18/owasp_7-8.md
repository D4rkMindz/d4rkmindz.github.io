## Zehn Bedrohungen für Webanwendungen
In diesem Kapitel wurden nur OWASP 7 und 8 behandelt. Alle anderen wurden in vorherigen, respektive nachfolgenden Magazinen behandelt.





### Platz 7: XSS
XSS ist die Abkürzung für [Cross-Site-Scripting](/de/wiki/hacking/xss). Bei dieser Attacke geht es darum, schädlichen Code in die Webseite über ein Formularfeld oder die URL einzufügen. Es gibt verschiedenen Arten von XSS.





#### Reflektierendes XSS
Hier wird schädliche JS Code in die Webseite eingefügt. Dies ist möglich, da die Webseite z.B. die Suchparameter nimmt und dem Benutzer wieder (URL: example.com/search?q=xss) ungefiltert anzeigt: "Der Begriff XSS wurde nicht gefunden". Jedoch ist dann auch so etwas möglich (URL: example.com/search?q=<script>alert("You've been Hacked");</script>) wo man über die URL schädlichen Code in die Webseite einfügt.





#### Persistentes XSS
Beim Persistenten XSS geht es darum, dass der schädliche JS Code ungeprüft persistiert wird (z. B. Kommentar im Forum). Jeder Benutzer, welcher dann die Seite mit z. B. dem schädlichen Kommentar aufruft ist automatisch infiziert.





#### DOM-basiertes XSS
Hier wird der Schadcode im Code des Clients eingefügt. Ein Beispiel dafür ist ebenfalls die Möglichkeit Scripte über die URL einzuschleusen (siehe Beispiel Reflektierendes XSS).





#### Resident XSS
Resident XSS ist praktisch ein Rootkit für Browser. Bei einem Angriff bleibt das betroffene Fenster im Hintergrund offen und ermöglicht so dem Hacker alles, was auf einem Computer möglich ist, zu machen.





#### XSS Verhindern
XSS kann schon recht gut abgefangen werden, wenn man jede Eingabe des Benutzers (auch die URL) escaped. Das Bedeutet, in nicht gefährliche Zeichen umwandeln.


Wenn man jedoch einen Editor hat und gewisse HTML Elemente zulassen möchte, dann sollte man alles unerwünschten Elemente entfernen und nur solche behalten, welche erlaubt sind. Ausserdem muss man die Attribute der Elemente filtern, da auch diese JavaScript ausführen könnten (z. B. onload, onerror, etc).





### Insecure Deserialization
Objekte werden für die Kommunikation über Datenstreams serialisiert. Dazu werden diese in Strings konvertiert und anschliessend wieder deserialisiert (in Objekte umgewandelt).  Wenn ein Hacker Zugriff auf ein serialisiertes Objekt bekommt, kann dieser das Objekt verändern und unerwünschte Seiteneffekte hervorrufen.


Eine solche Attacke lässt sich recht einfach verhindern, indem man einen Hash des Objektes erstellt und diesen ebenfalls mitliefert. Somit kann niemand den Wert des Objektes verändern, ohne auch den Hash (mit dem Private Key) zu 
verändern.





### Fazit
Ein sehr spannender Artikel, welche die beiden Angriffsvektoren XSS und Insecure Deserialization schön und verständlich zusammengefasst hat.


