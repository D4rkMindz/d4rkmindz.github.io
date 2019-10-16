## Grundlagen
Der Aufbau eines HTML5-Dokumentes erfolgt normalerweise wie folgt:
   <!DOCTYPE html>
   <html>
      <head>
         <meta charset="UTF-8">
         <title>Title</title>
      </head>
      <body>
   
      </body>
   </html>



Als erstes wird hier dem Browser durch !DOCTYPE mitgeteilt, dass es sich um ein HTML-File handelt. Danach wird innerhalb des <html> Tags das <head> und <body> Tag gesetzt.
Innerhalb des <head> Tags werden Metainformationen sowie der Titel definiert. Im <body> Tag wird dann das ganze statische Skelett der Webseite geschrieben.

### Tags
Ein Tag wird immer geöffnet (<öffnend>) und wieder geschlossen (</schliessend>). Dabei gibt es ein paar wichtige tags:


   a           Hyperlink
   b           bold (fetter) Text
   br          break (Enter)
   button      Ein Knopf
   dl          description list
   dt          description list title
   dd          description list definition
   div         Box ([Boxenmodell](/wiki/boxenmodell))
   em          empasized (Kursiver) text
   fieldset    Gruppiert die unterhalbliegenden Tags. (Mit einem Rahmen)
   form        Formularfeld
   h1 bis h6   Titel (1 grösster, 6 kleinster)
   head        Kopf
   header      Koopfabschnitt innerhalb vom body
   hr          horizontaler Strich
   html        html-Tag
   i           italic, siehe em
   iframe      tag zum anzeigen anderer Webseite innerhalb des Tags
   img         image (Bild)
   input       Basis für texteingabe, Radiobuttons, etc
   meta        metainformationen werden hier gespeichert
   ol          ordered list
   ul          unordered list
   li          Listenpunkt
   link        Verlinkt zu einer anderen Datei (Bsp.: für [CSS](/wiki/css))
   option      definiert eine Option in einer Dropdownliste
   p           Paragraph (Text)
   script      JavaScript Tag
   strong      siehe b
   style       für Styleinformationen innerhalb des HTML-Files (veraltet)
   table       Tabelle (Öffnung)
   tbody       Tabelle (Körper)
   thead       Tabelle (Gruppierung th)
   th          Tabelle (Titel(Header))
   tr          Tabelle (Zeile (TableRow))
   td          Tabelle (Zelle)