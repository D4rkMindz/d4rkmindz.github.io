## REST
[Weitere Informationen zum Thema REST](https://gist.github.com/odan/de7f5452fb165c2d27f20d1d16bfe54d)


Reprensentational State Transfer oder auch REST ist ein Webservice Architekturstil bei welchem der Fokus auf der Präsentation der Daten des Systems (Resource) liegt. Jede Resource muss durch einen globalen, einzigartigen Identifikator (mittels [URI](/wiki/url))erreichbar sein. Um eine Resource zu erreichen muss der Client dem REST Service über HTTP eine Anfrage übermitteln, auf welche der Server mit einer Repräsentation der Resource antwortet. Die Resource wird oft in Form von [JSON](/wiki/programmiersprachen/javascript/json) oder XML übertragen. Service, welche die REST Archtiektur brauchen werden als ** bezeichnet. Die Anbieter solcher Restful services werden of scherzhaft auch RESTafarians genannt.





Inzwischen gibt es sehr viele Webseiten welche ein RESTful service anbieten. Grob gesagt, kann man behaupten, dass jeder Anbieter eines RSS oder RDF Feeds ein Anbieter eines RESTful services ist. Wichtig dabei ist, dass RESTful services nur die [HTTP GET Methode](/wiki/divers/http-request) auf eine Resource akzeptieren sollten.





### RESTful Service in PHP
Wenn man einen RESTful Service mittels PHP benutzen möchte, empfiehlt es sich mit SimpleXML zu arbeiten. Sehr viele RESTful Services senden eine XML-Antwort. In diesem Beispiel wird die Seite "del.icio.us", welche einen RESTful Service hat, verwendet. Die URL für diese API ist "api.del.icio.us". Der Code zum Ausgeben der Links würde dann wie folgt aussehen.
```
$u = 'username';
$p = 'password';

$tag = "https://{$u}:${$p}@api.del.icio.us/v1/posts/all?tag=php";

//XML
$bookmarks = new SimpleXMLElement($tag, NULL, true);

//JSON
$file = file_get_contents($tag);
$bookmarks = json_decode($file);

foreach ($bookmarks->posts as $bookmark){
    echo '<a href="' . htmlentities($bookmark['href']) . '">';
    echo htmlentities($bookmark['description']);
    echo '</a><br />';
}
```



   https://{$u}:${$p}@api.del.icio.us/v1/posts/all?tag=php
    |        |     |   |        |      |   |    |     | 
    |        |     |   |        |      |   |    |     ⎿ Sortierung
    |        |     |   |        |      |   |    ⎿ Alle
    |        |     |   |        |      |   ⎿ Posts
    |        |     |   |        |      ⎿ Version 1
    
    Vom Anbieter definiert (und dokumentiert)
    ------------------------------------------------------------------------
    Standard
    
    |        |     |   |        ⎿ Domain (del.icio.us)
    |        |     |   ⎿ Subdomain (api)
    |        |     ⎿ Login (Passwort)
    |        ⎿ Login (Benutzername)
    ⎿ Protokoll



Der oben geschriebene PHP Code würde (zum Beispiel) dann folgende Ausgabe bekommen:
```html
<a href="del.icio.us/first">Eine erste Beschreibung</a><br />
<a href="del.icio.us/second">Eine zweite Beschreibung</a><br />
<a href="del.icio.us/third">Eine dritte Beschreibung</a><br />
<a href="del.icio.us/fourth">Eine vierte Beschreibung</a><br />
<a href="del.icio.us/fifth">Eine fünfte Beschreibung</a><br />
```