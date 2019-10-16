# Light my fire
[Codeigniter](https://codeigniter.com/) ist ein sehr kleines und primitives Framework. Es eignet sich sehr gut zum erstellen kleinerer Applikationen. Die Grundstruktur ist wie in vielen Frameworks die [MVC-Architektur](/wiki/programmiersprachen/php/mvc).


### Installation
Momentan (Codeigniter 3.1.4) ist noch keine Unterstützung für Composer vorhanden. Diese ist jedoch für Version 4 geplant. Folglich muss man unter [codeigniter.com](https://codeigniter.com/) die aktuellste Version herunterladen und in den (unter [XAMPP](/installationen/xampp)) htdocs-Ordner enpacken. Man kann das Rootverzeichnis benennen, wie man möchte. Unter root/application sind folgende Elemente, welche für den Grundaufbau der Applikation essentiell sind:


  * cache
  * config
  * **controllers**
  * core
  * helpers
  * language
  * libraries
  * logs
  * **models**
  * third_party
  * **views**



neben root/application gibt es noch das Verzeichnis root/system. Man kann die Verzeichnisse system/ und application/ nach Belieben verschieben. Jedoch muss man dann in der index.php Datei die Variabeln $system_path und $application_folder anpassen.





### Templateparser vs HTML/PHP
Codeigniter bringt bereits einen Template parser mit. Man kann diesen wie folgt nutzen. Jedoch ist dieser sehr langsam. Der Vorteil besteht jedoch darin, dass Designer, welche sich nicht mit PHP auskennen, trotzdem einfach Daten in das Template einfügen können. Variabeln können mittels Pseudo-Variabeln abgerufen werden. Dazu verwendet man wie im Beispiel die geschweiften Klammern.


Alternativ dazu gibt es noch die Möglichkeit HTML-Dateien mit alternativer PHP-Syntax zu verwenden (<?php if(1 == 1):?><?php endif;?>).


```php
public function index()
{
    // Parser laden
    $this->load->library('parser');
    $data = [
        'title' => 'Lister der Benutzer',
        'benutzerliste' => [
             ['benutzer' => 'Peter Pan', 'email'=> 'peter@pan.de'],
             ['benutzer' => 'Bär Tram', 'email'=> 'baer@tram.at'],
             ['benutzer' => 'Sam Song', 'email'=> 'sam@song.com']
        ]
    ];
    
    $this->parser->parse('start', $data);
}
```
```html
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>{title}</h1>
    {benutzerliste}
      <div>Benutzer: {benutzer}</div>
      <div>Email: {email}</div>
    {/benutzerliste}
  </body>
</html>
```
### Einfaches Formular
Formulare gibt es in praktisch jeder Webanwendung. Viele Frameworks stellen einem komplizierte und vielfältige Formbuilder und -helper zur Verfügung. Auch Codeigniter bietet die Möglichkeit eines Formbuilders. Jedoch ist dieser Sehr beschränkt (was nicht unbeding schlecht sein muss).


Ein Beispiel für ein Formular wäre dann wie folgt:


```php
public function index()
{
    // Form Helper laden
    $this->load->helper('form');
    $this->load->library('form_validation');
    
    $data = [
        'laender' => [
            1 => 'Österreich',
            2 => 'Deutschland',
            3 => 'Schweiz'
        ]
    ];
    
    // Name validieren
    $this->form_validation->set_rules(
        'name', '<b>Name</b>',
        'required|min_lenght[5]',
        [
            'required' => "Das Feld %s darf nicht leer sein",
            'min_lenght' => "Das Feld %s muss mindestens 5 Zeichen lang sein"
        ]
    );
    
    // Telefon nummer validieren (Regular Expression)
    $this->form_validation->set_rules(
        'telefon', '<b>Telefon</b>',
        'regex_match[/^
d+-
d+$/]',
        [
            'regex_match' => "Das Feld %s muss einen Wert im Format 0000-0000 enthalten"
        ]
    );
    
    // HTML/PHP Template laden mittels view()
    // in diesem fall das Header (view/header.php) Layout 
    $this->load->view('header');
    
    if ($this->form_validation->run() === false) {
        $this->load->view('form', $data);
    } else {
        $this->load->view('success_page');
    }
    
    $this->load->view('footer');
}
```



### Fazit
Codeigniter ist ein sehr gutes und simples Framwork (nicht unbedingt negativ). Man kann vieles schnell erreichen. Wenn jedoch eine gewisse Komplexität erfordert ist, würde ich dieses Framework nicht empfehlen. Ausserdem kommt es mir vor, als wäre dieses Framework extrem alt. Dass Composer nicht unterstützt wird und die gesamte Logik im gleichen Ordner ist, wirkt auf mich sehr merkwürdig.


Gewisse Bestandteile sind mir jedoch bereits schon in anderen Frameworks begegnet. Zum Beispiel die Möglichkeit eine foreach-Schleife mittels {loop}{/loop} durch zu iterieren kenne ich von Mustache.js.


Allgemein kann ich sagen, dass Codeigniter alle gute Basisbestandteile zusammenfasst und in ein Framework packt.