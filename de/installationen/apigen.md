## Installation
### Download
Man lädt sich die [api.phar](http://apigen.org/apigen.phar) Datei herunter und installiert sie in dem Projekt. Anschliessend geht man ins CMD und navigiert zum Pfad des Projektes. Dort gibt man folgenden Befehl ein:
   echo @php "%~dp0apigen.phar" %*>apigen.bat



Jetzt sollte sich eine Batch-Datei erstellt haben (.bat). 


Zum den Code jetzt muss man noch einen Unterordner erstellen im Projekt (Apigen bei mir).
Jetzt hat man zwei optionen zum Generieren des HTML-Codes. Entweder man definiert alles direkt im CMD:
   apigen generate -d "D:
dev
xampp
htdocs
contact_form
Apigen" -s "D:
dev
xampp
htdocs
contact_form" --exclude vendor



**
oder man legt sich eine file.conf Datei an und schreibt folgenden Text hinein:
   # Source file or directory to parse
   source:
    - 'D:
dev
xampp
htdocs
contact_form'
   # Directory where to save the generated documentation
   destination: 'D:
dev
xampp
htdocs
contact_form
Apigen'
   # List of allowed file extensions
   extensions: [php]
   # Mask to exclude file or directory from processing
   exclude: 
       - vendor
   #next elements of the config file.
CMD Befehl:
   apigen generate --config file.conf



### Composer
Die Installation über den Composer erfolgt im CMD. Man geht zuerst in das Projekt herein ([Rootverzeichnis](/de/wiki/root)) und tippt folgenden Befehl:
   composer require apigen/apigen


