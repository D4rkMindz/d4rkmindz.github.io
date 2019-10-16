## PHP - Sessionhandling
Eine Session (Sitzung) bezeichnet eine stehende Verbindung eines Clients mit einem Server.





Bei zustandslosen Protokollen wie HTTP gibt es keine stehenden Verbindungen. Jede Kommunikation eines Clients ([Browser](/de/wiki/browser)) zu einem Webserver wird unabhängig voneinander betrachtet. Zudem können Benutzer nicht eindeutig identifiziert werden.





Für diesen Zweck werden Sessions verwendet, die den Zustand einer Webanwendung während einer Session (Sitzung) speichern können und somit eine zusammenhängende Kommunikation ermöglichen.


(Quelle: [web-tuts.de](http://www.web-tuts.de/php-session-sicherheit-session-fixation.html))


### Session syntax
Eine Session wird wie folgt initalisiert. Dies erfolg am Anfang der PHP Datei:


''[session_start();](http://php.net/manual/de/function.session-start.php)''


Nachdem man die Session gestartet hat, kann man Daten in einer globalen Variable speichern. Diese globale Variable sieht folgendermassen aus:


    $_SESSION['username']
    | |         |-Schlüsselwort
    | |-Globale variable
    |-Variable wird mit $ definiert



Jetzt kann man von jeder Datei auf die Werte, welche in $_SESSION gespeichert sing, zugreifen, sofern man in der Datei''session_start();'' aufgerufen hat.


Somit kann man jeder Zeit überprüfen, ob der User eingeloggt ist oder nicht.


Wenn der User sich ausloggt, ist es wichtig, dass man auch alle Werte löscht, welche man in $_SESSION gespeichert hat. Dies kann man mit folgender Funktion erreichen:


''[session_destroy();](http://php.net/manual/de/function.session-destroy.php)''


Damit löscht man alle, in einer Session gespeichterten Daten. Es ist jedoch auch empfehlenswert, wenn man jedesmal, wenn man ausgeloggt auf die Login Seite kommt (also immer), dass man dann der Session eine neue ID gibt (also eigentlich dem [Cookie](/de/wiki/cookies)). Sonst kann man wie unten beschrieben, Session hijacking machen. Eine neue ID vergibt man mit folgender Funktion:


''[session_regenerate_id();](http://php.net/manual/de/function.session-regenerate-id.php)''


Bei ''session_regenerate_id();'' wird lediglich dem Cookie eine neue ID mitgegeben, jedoch nicht die Daten in der $_SESSION variable gelöscht.


Um Nachrichten über die Session zu übermitteln, kann man im [Symfony Framework](https://symfony.com/) die [Flash Messages](/de/wiki/programmiersprachen/php/session/flashmessages) brauchen.
### Hacking
Sessions sind aber nicht nur nützlich, sondern auch ein beliebtes Ziel von Anfreifern. Es gibt verschiedene Angriffsmethoden. Folgende Möglichkeiten hat man:

 
  * [Cross Site Scripting (XSS)](/de/wiki/hacking/xss)  
  * Session hijacking (Sitzungskaperung)



Beim Session hijacking liest der Hacker das [Cookie](/de/wiki/cookies) aus und verwendet es selber um sich damit als der User einzuloggen, welcher gehackt wurde.

