## Cake PHP
[CakePHP](https://cakephp.org/) ist ein PHP Framework, welches aktuell (Juni 2017) in der 3. Version ist. Im Jahr 2005 ist die erste Version veröffentlicht worden. Die Vorraussetzungen für CakePHP 3 sind eine PHP Version von mindestens 5.6. Auch das PHP CLI muss mindestens Version 5.6 haben. Jedoch ist die Funktion unter PHP 7.0 < nicht eingeschränkt.


Wie die meisten PHP Frameworks setzt auch CakePHP auf die weitverbreitete [Model-View-Controller (MVC)](/de/wiki/programmiersprachen/php/mvc) Prinzip.





Ein neues CakePHP Projekt kann sehr einfach mittels [composer](/de/installationen/composer) installiert werden. Dazu gibt man folgenden Befehl ein:


''composer create-project --prefer-dist cakephp/app <directory>''


<directory> steht für das Verzeichnis, indem das Projekt erstellt werden soll (bsp.: C:
xampp
htdocs
cakephp-app
).


Danach wird man einen bereits fertige Ordnerstruktur vorfinden. Die wichtigesten Ordner kurz erklärt:


| Ordner         |
| -------------- | Beschreibung                                                        ^
| config         | Konfigurationsdateien                                               |
| src            | Jegliche Logik ist in diesem Ordner                                 |
| src/Controller | Controller aus dem MVC                                              |
| src/Model      | Models für Datenbanken aus dem MVC                                  |
| src/Template   | CTP files (HTML und PHP), CakePHP Template                          |
| src/View       | [View Helpers](https://book.cakephp.org/3.0/en/views/helpers.html) |
| vendor         | Framework Ordner, wird mittels Composer verwaltet                   |
| webroot        | Hier liegen Medien-, CSS-, JavaScriptdateien, et cetera             |
### Fazit
Dieser Artikel war sehr detailreich und ausführlich. Dank dem Wissen, welches ich bereits hatte, verstand ich auch alles. 
