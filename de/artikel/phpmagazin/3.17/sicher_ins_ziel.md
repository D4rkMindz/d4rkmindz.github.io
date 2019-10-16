## Sicher ins Ziel
Dies ist der erste Teil einer Dreiteiligen Serie über den korrekten Umgang mit der Programmiersprache [PHP](/wiki/programmiersprachen/php). Dabei geht es im ersten Teil geht es darum einen [Toolchain](https://de.wikipedia.org/wiki/Toolchain) zu erschaffen.


### Organisation
Der Autor des Artikels empfiehlt das [Vorgehensmodell](https://de.wikipedia.org/wiki/Vorgehensmodell) [Scrum](https://de.wikipedia.org/wiki/Scrum). Wichtig ist auch, dass es Tagesziele gibt um den Entwicklern Erfolgserlebnisse zu vermitteln.


Um Projekte zu verwalten und Aufgaben zu verteilen kommt [JIRA](https://de.atlassian.com/software/jira) zum Einsatz. Die [Versionskontrolle](/wiki/programmiersprachen/programmiertipps/versioncontrol) übernimmt BitBucket (mittels Git). Das Repository wird in drei Standardbranches unterteilt:
  - master
  - develop
  - feature
Im Master befindet sich immer die fertige und getestete Applikation. Im develop Branch sind die von den Entwicklern fertiggestellten Features, welche jedoch noch nicht getestet wurden.


Zur Qualitätskontrolle und das sichere [deployen](/wiki/divers/continous_delivery#continuous_integration_ci) auf den Server wird Jenkins verwendet. Dieser testet die Applikation jedes Mal, wenn ein Pullrequest vom feature- in den develop Branch oder vom develop- in den master Branch gemacht wird.


Jenkins nimmt sich jeweils die aktuelle Version aus dem Branch und lässt sie durch seinen eigenen Toolchain durchlaufen. Danach wird die Software deployt (develop->Staging Server/master->Productive Server).


Als Build-Tool wird Phing verwendet (ich empfehle diesen Punkt mit [Apache Ant](/installationen/ant) zu ersetzen). Das Packetmanagementsystem ist [Composer](/installationen/composer). Dieser ist je nach Umgebung (test, staging, prod) entsprechend konfiguriert.


Um den Code auf (Syntax-)Fehler zu überprüfen werden folgende Tools empfohlen:


  * PHPMD (um den Code nach Mustern zu analysieren und zu bewerten)
  * PHPLint (Syntaxfehler)
  * PHPCPD (Copy/Paste Detector, [DRY Principle](/wiki/programmiersprachen/programmiertipps#dry_-_don_t_repeat_yourself))
  * PHPUnit (Unittests)
Diese Werkzeuge dienen ausschliesslich der Qualitätssicherung. Ein Stresstest auf die Applikation lässt sich mit der Java Applikation JMeter durchführen. Der letzte Qualitätstest wird mird ein automatisierter Browsertest sein, welcher mithilfe [Selenium](http://www.seleniumhq.org/) erfolgt.


Zusammengefasst braucht man folgende Tools:


| Pos |
| --- | Tool           | Zweck                         |
| ----------------------------- |     
| 1 | Phing/Composer   | Dependency management         |
| 2 | PHPLint          | Syntaxerror detection         |
| 3 | PHP CPD          | Copy/Paste detection          |
| 4 | PHP MD           | Mess detection                |
| 5 | PHP Unit         | Unittests                     |
| 6 | PHP Documentator | Sourcecode documentation      |
| 7 | JMeter           | Performance/Integration tests |
| 8 | Selenium         | Automatical Browsertests      |



### Libraries
Folgende Libraries werden für eine einfache, responsive Webapplikation empfohlen:


| Library    |
| ---------- | Zweck                              ^
| Bootstrap  | Design und Responsivität           |
| jQuery     | Bootstrap & Frontendfunktionalität |
| Doctrine   | OR-Mapper                          |



### Infrastruktur
Als Basis auf dem Server wird ein LAMP-Stack (Linux, Apache, MySQL, PHP) verwendet. Jedoch wird MySQL ([RDBMS](/wiki/programmiersprachen/datenbanken/start#datenbank_modelle)) auf einen zweiten Server verlagert.



[Der Nächste Artikel](/artikel/phpmagazin/4.17/toolchain)