## Webseitenstruktur
Es ist immer wichtig, ein gute strukturiertes Odernersystem auf seiner Webseite zu haben. Ich selber verwende folgende Struktur:
  www.example.ch
       |
       |--build
       |   |
       |   |--api
       |   |   |
       |   |   |--ApiGen Files
       |   |
       |   |--.htaccess
       |
       |--css
       |   |
       |   |--style.css
       |
       |--js
       |   |
       |   |--script.js
       |
       |--tmp
       |   |
       |   |--logs
       |   |   |
       |   |   |--error.log
       |   |
       |   |--.htaccess
       |
       |--vendor
       |   |
       |   |--Alle von Composer installierten Extesions
       |   |
       |   |--.htaccess
       |
       |--view
       |   |
       |   |--.htaccess
       |   |
       |   |--index.html.php
       |
       |--fonts
       |   |
       |   |--font.tff
       |
       |--.gitignore
       |
       |--composer.json
       |
       |--composer.lock
       |
       |--build.xml ([ANT](/installationen/ant))
       |
       |--index.php
       |
       |--util.php



### GitIgnore
Damit bei der Versionierung nicht alle Ordner hochgeladen werden, kann man ein ".gitignore"-File erstellen.
Ich empfehle, folgenden Code im ".gitignore"-File zu haben:
   nbproject/
   composer.phar
   .DS_STORE
   cache.properties
   
   !vendor/
   vendor/*
   !vendor/.htaccess
   
   build/
   
   !tmp/
   tmp/*
   !tmp/.htaccess
   
   !files/
   files/*
   !files/.htaccess
