## XDebug



Weitere Dokumentation (englisch):


[](https://gist.github.com/odan/1abe76d373a9cbb15bed)


Direkt richtige XDebug version instalieren:


[](https://xdebug.org/wizard.php)



Zuerst die [xdebug.dll](https://xdebug.org/download.php) herunterladen für die passende Version herunterladen.


Die .dll-Datei in [XAMPP](/installationen/xampp) dann unter /php/ext platzieren.


Danach in der php.ini-Datei (/php) folgenden Code am Ende einfügen:
```
[XDebug]
; adjust path
zend_extension = "c:
xampp
php
ext
php_xdebug-2.4.0rc3-7.0-vc14.dll"
xdebug.remote_autostart = 1
xdebug.remote_enable = 1
xdebug.remote_port = 9000
```
Jetzt kann man testen, ob alles funktioniert, indem man im /htdocs-Ordner eine index.php-Datei (alle anderen Dateien löschen) erstellt mit folgendem Inhalt:
```
<?php echo phpinfo();?>
```
Im Browser, nachdem der Localhost gestartet ist (/control-panel.exe ausführen und Apache starten), gibt man im Adressfeld http://localhost/ ein und sucht anschliessend mit CTRL+F nach "xdebug". Wenn ein Eintrag gefunden wird, dann ist XDebug aktiviert.





![No alt text available](/installationen/xdebug-phpinfo-transparent.png)