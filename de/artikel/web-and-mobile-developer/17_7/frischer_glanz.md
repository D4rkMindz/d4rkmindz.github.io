## Frischer Glanz
Es gibt immer noch viele Applikationen, welche unter < PHP5 laufen. Wenn man die PHP Version auf PHP 7 erhöhen möchte kann man jedoch nicht einfach einen Schalter umlegen und es funktioniert...


Je nach dem wie alt die Applikation ist, empfiehlt es sich die ganze Codebasis mittels [PHPloc](https://github.com/sebastianbergmann/phploc) zu analysieren. Anschliessend sollte man während der Migrationsarbeit die Fehlermeldungen aktivieren. Die effizienteste Lösung ist mittels ''error_reporting(E_ALL | E_STRICT & ~E_DEPRECATED). Hier werden alle Fehler ausgegeben. E_STRICT bewirkt, dass Fehler, welche seit Version 5.4 in E_ALL enthalten sind, auch ausgegeben werden.


Jetzt kann man mit dem PHP 7 Compatibility Check fortfahren. Das Tool [php7cc](https://github.com/sstalle/php7cc) kann man über GitHub herunterladen und ausführen (die Phar Datei installieren). Danach lässt man das Rootverzeichnis der Applikation testen. Alle Fehler werden in ein php7cc.log-File geschrieben:


```
php7cc /var/www/myapp > ~/php7cc.log
```
Danach sollte man noch veraltete Libraries wie ** oder ** ersetzen.





### Fazit
Ich habe das Glück, mich bis jetzt nicht um solche Probleme kümmern zu müssen. Jedoch finde ich es trotzem sehr hilfreich, wenn ich einmal von einem Lösungsansatz zur Migration auf neue Versionen gehört habe.