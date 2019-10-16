## Zwei Faktor Authentifizierung
Um es Hackern heutzutage schwerer zu machen, implementiert man eine zwei Faktor Authentifizierung zur Anmeldung in einer Webapplikation. Neben dem Password muss man beispielsweise noch einen QR Code scannen und dessen Wert in ein Feld eingeben, oder man bekommt per Mail oder SMS eine URL oder einen Code zugesendet, welche man zum Login benötigt.


Google stellt eine weitere Alternative mit [Google Authenticator](https://de.wikipedia.org/wiki/Google_Authenticator) zur Verfügung. Man kann einen sechsstelligen Code, welcher von Google alle 30 Sekunden geändert wird, eingeben und diesen als weitere Verifikation brauchen.


Diese Authentifizierungsmethoden basieren auf der Idee von TOTP, Time-based One-time Password Algorithm.


Auch für Applikationen, welche ein CMS verwenden, ist eine zwei Faktor Authentifizierung möglich. Für  Wordpress & co werden viele Plugins zur Verfügung gestellt.


### Fazit
Für ein paar Applikationen habe ich bei meinem Konto bereits eine zwei Faktor Authentifizierung aktiviert. Jedoch gibt es zum Teil Applikationen, bei welchen ich dies als komplett übertrieben erachte. Jedoch finde ich es gut, dass man diese Möglichkeit zur Verfügung gestellt bekommt.