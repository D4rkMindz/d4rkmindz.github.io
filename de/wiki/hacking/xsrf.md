## Cross-Site Request Forgeries (XSRF/CSRF)
Bei CSRF geht es darum, dass ein Hacker den Benutzer oder Browser dazu bringt, einen [HTTP-Request](/de/wiki/divers/http-request) an die Webapplikation zu schicken. Bedingung dafür ist, dass der Benutzer bereits in der Webapplikation angemeldet ist. So kann bewirkt werden, dass zum Beispiel ein erstellen eines Adminstratoren Accounts ausgelöst wird.


Dies ist über verschiedene Varianten möglich.



----

### Bilder (img-Tag)
Der Browser lädt automatisch Bilder, bevor der Benutzer überhaupt etwas gemacht hat. Der Browser erkennt dabei auch nicht, ob es sich um ein Bild handelt oder einfach um einen Link. Auch lädt er alle Bilder über einen [HTTP-GET-Request](/de/wiki/divers/http-request). Das heisst, ein Hacker kann mit folgender Zeile Code einen CSRF auslösen.


```html
<img src="www.example.org/user-editor.php?do=create_account&name=admin&password=geheim&rights=system" />
```
Die Webapplikation misstraut diesem Link auch nicht, da der Benutzer bereits eingeloggt ist. Es ist zwar grundsätzlich nicht okay, solche [CRUD-Operationen](/de/wiki/programmiersprachen/php/crud) über einen [HTTP-GET-Request](/de/wiki/divers/http-request) zu machen, aber es gibt immer Programmierer, welche es so machen.



----

### Shortend Links
Da viele Webapplikationen und Browser einem Benutzer einfachkeitshalber anbieten eingeloggt zu bleiben ("stay logged-in"), kann man auch den Benutzer mit einer Email so manipulieren (bsp: "get your FREE Access today. Only today available!"), dass er auf den in der Email mitgelieferten Link klickt. Diesen Link kann man dann noch über einen [Kurz-Link-Service](https://de.wikipedia.org/wiki/Kurz-URL-Dienst) so manipulieren, dass es nicht gleich auffällt. Der Link in der Email sieht dann wie folgt aus:


_bit.ly/a0sdFEr_


Jedoch verweist dieser Link dann auf:


_(www.)example.org/user-editor.php?do=create_account&name=admin&password=geheim&rights=system _


So hat der Hacker erreicht, dass ohne das Wissen des Benutzers, Ihm ein Administratoren Account erstellt wurde.



----

### Local Exploit
Eine Webapplikation gegen einen Local Exploit zu schützen ist sehr schwer. Da bei einem Local Exploit der Computer des Benutzers gehackt wurde, indem dass eine Schadsoftware auf dem Computer installiert ist. Diese Software bringt den Computer dazu, den Browser zu öffnen und direkt auf den schädlichen Link zu gehen. Für die Webapplikation sieht es jedoch so aus, als ob der Benutzer und nicht die Schadsoftware hinter der Anfrage steckt.



----

### Schutz gegen XSRF/CSRF
Um sich gegen eine CSRF-Attacke einigermassen zu schützen kann man ein verstecktes input-Tag in seinem [HTML-Code](/de/wiki/programmiersprachen/html) einfügen. Auf dem Server wird dann als Wert ein Sicherheitstoken eingesetzt. Damit man das Sicherheitstoken vergleichen kann speichert man dies zusätzlich in der Session ab. Ebenfalls empfiehlt sich, dem Token ein Verfallsdatum (z.B.: 5 Minuten) zu zuweisen. Der Code in der Datei "user-editor-start.php" wäre dann wie folgt aufgebaut.


```php
<?php

//Start Session
session_start();

//generate Token
$token = md5(uniqid(rand(), TRUE));

$_SESSION['token'] = $token;
$_SESSION['token_time'] = time();
?>
<!DOCTYPE html>
<html>
    <head>
    <!-- META-, Title-Tags and other stuff -->
    </head>
    <body>
        <form action="user-editor.php" method="post">
            <input type="hidden" name="token" value="<?php echo $token; ?>">
            <p>
                Username: <input type="text" name="username">
                <br />
                Password: <input type="text" name="password">
                <br />
                Role: <input type="text" name="rights">
            </p>
            <input type="submit" name="submit" value="submit">
        </form>
    </body>
</html>
```
Die "user-editor.php"-Datei, welche den Request bearbeitet, würde dann wie folgt aussehen.
```php
<?php

if (!$_POST) {
    // return Error. Only accept POST-Requests
}

if ($_SESSION['token'] != $_POST['token']) {
    // return Token Error. Token is invalid.
}

$tokenAge = time() - $_SESSION['token_time'];

//300 = 5 min.
if ($tokenAge <= 300) {
    // return Token expired Error. Token is too old.
}

//Below here, you can place your validation.
```
Mit diesem Code ist ein CSRF sehr erschwert. Jedoch auch dieser ist nicht 100%ig sicher. Man kann diesen mit einer [Man-in-the-middle Attacke](/de/wiki/hacking/man-in-the-middle-attacke) umgehen. In diesem Fall könnte man einer Man-in-the-middle Attacke vorbeugen, indem man seine Webseite über eine verschlüsselte Verbindung ([HTTPS](/de/wiki/divers/ssl)) übermittelt.
