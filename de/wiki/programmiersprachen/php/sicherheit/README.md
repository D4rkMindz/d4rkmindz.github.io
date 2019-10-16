## PHP - Sicherheit
Die Sicherheit ist bei einer Webapplikation, welche über einen Server läuft sehr wichtig. Für die Sicherheit gibt es viele, unterschiedliche Faktoren. Zum einten gibt es Bereiche, welche nur für den Entwickler zugänglich sein sollten ([Ordnerstruktur](/de/wiki/webseitenstruktur)), zum anderen dürfen manche User nicht an Informationen gelangen, welche nur für andere User gedeacht ist ([korrekte Validierung](/de/wiki/programmiersprachen/php/validierung)).
Man muss aber auch darauf achten, dass ein User nicht nach einem Logout wieder in den geschützten Bereich kommt. Dies kann man mit [Session](/de/wiki/programmiersprachen/php/session) erreichen.


### Formulare
Ein interaktives Fomular (z. B.: ein [Loginformular](/de/wiki/programmiersprachen/php/beispiele/login)) ist Teil einer Webseite, welche mit dem [Server](/de/wiki/backend) interagieren muss. Man kann etwa mit den eingegebenen Daten eine [E-Mail](/de/wiki/email) verschicken oder in einer Datenbank abspeichern. Für beides braucht man PHP und eine hohe Sicherheit. Man kann einen mögliche Überlastung der Datenbank auf dem Server bereits im Code, respektive in der Logik verhindern. Dazu braucht man die [Post/Redirect/Get-Methode](https://en.wikipedia.org/wiki/Post/Redirect/Get). Dabei speichert man die eingegebenen Daten in der globalen Variable $_POST. Nach dem Abschicken sind diese Daten jedoch immernoch vorhanden, wenn man die Seite erneuert (F5). So kann man, indem man die Seite sehr oft und sehr schnell hintereinander erneuert die Datenbank unnötig befüllen. Dies kann man verhindern, indem man nach dem Absenden des Formulares wieder auf die gleiche Seite verlinkt. In PHP macht man das wie folgt:


```phpheader("Location: contactform.php");```
Dadurch werden alle Daten in der $_POST Variable nach Abschicken des Formulares zurückgesetzt. Jetzt kann man die Seite beliebig oft erneuern. Wenn ich jedoch eine Erfolgsmeldung darstellen möchte, sollte ich diese in der [$_SESSION](/de/wiki/programmiersprachen/php/session) Variable speichern.
