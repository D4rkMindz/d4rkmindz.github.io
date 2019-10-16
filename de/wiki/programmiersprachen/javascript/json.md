## JavaScript Object Notation
Die JavaScript Object Notation, kurz JSON, ist ein kompaktes Datenformat in einer einfach lesbaren Textform zum Zweck des Datenaustauschs zwischen Anwendungen. JSON ist unabhängig von der Programmiersprache, jedoch muss jeder JSON-String syntaktisch korrektes JavaScript enthalten. JSON ist also einfach gesagt eine Erweiterung für JavaScript.





### JSON in JavaScript
In JavaScript kann man mittels [AJAX](/wiki/programmiersprachen/javascript/libraries/jquery#ajax) einen Request an den Server übermitteln. Um Daten in diesem Request zu übermitteln braucht man JSON. Einen JSON-String bekommt man in JavaScript mittels der "JSON.stringify(jsonString)" Funktion.


In JavaScript ([jQuery](/wiki/programmiersprachen/javascript/libraries/jquery)) sieht der Code dazu wie folgt aus:


```js
var data = {jsonrpc: "2.0", method: "getData", id: "1"};
var json = JSON.stringify(data);
$.ajax({
            method: "POST",
            contentType: "application/json",
            cache: false,
            processData: true,
            url: "https://server/to/send/data/to.php",
            data: json
        })
```
### JSON in PHP
JSON-Parser existieren in praktisch allen verbreiteten Sprachen. In PHP kann man ein JSON-String mit der [json_encode()](/http/**php.net/manual/de/function.json-encode.php) Funktion, welche ein Array in einen JSON-String umwandelt.


Ein Beispiel für ein JSON String:


```
Unformatiert:
{"menu":{"id": "file","value": "File","popup": {"menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},{"value": "Open", "onclick": "OpenDoc()"},{"value": "Close", "onclick": "CloseDoc()"}]}}}

Formatiert:
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
```
In PHP würde dieser String (nach $json = json_decode($jsonString, true)) wie folgt aussehen:


```php
$json = [
    "menu" => [
        "id" => "file",
        "value" => "File",
        "popup" => [
            ["value" => "new", "onclick" => "CreateNewDoc()"],
            ["value" => "Open", "onclick" => "OpenDoc()"],
            ["value" => "Close", "onclick" => "CloseDoc()"]
        ]
    ]
];
```
