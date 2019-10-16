## Programmiertipps
Um einen Sauberen Code zu schreiben, reicht es nicht, nur die Syntax zu verstehen. Wichtig ist auch, dass man den Code so schreibt, dass eine anderer [Programmierer](/wiki/programmierer) ihn auch lesen und verstehen kann. Dazu kann ich folgende Tipps geben:





{{indexmenu>:wiki:programmiersprachen:programmiertipps#1|js#tango.png}}



Wichtig sind auch folgende Sachen:
   
   Code > Comments
   
   Code = how
   Tests = what
   Comment = why
   




----

### Dokumentation
Es ist wichtig, zum Verständnis im Code gewisse Kommentare anzulegen. In PHP gibt es die Möglichkeit [DocBlocks](/wiki/programmiersprachen/php/docblock) zu schreiben. Diese Möglichkeit sollte man nutzen.

----

### DRY - Don't Repeat Yourself
Mit DRY ist gemeint, dass man Redundanzen vermeiden soll. Also ein mehrfach vorkommendes Codesegement in eine Funktion schreiben. Ebenso sollte man auf "Copy & Paste" verzichten.


(Wikipedia: [DRY](https://de.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself))

----

### KISS - Keep It Simple & Stupid
//In seiner Grundaussage ähnelt das KISS-Prinzip stark der Aussage von Ockhams Rasiermesser: wenn es mehrere Erklärungen für einen bestimmten Sachverhalt gibt, dann ist diejenige Erklärung zu bevorzugen, die am einfachsten ist, also mit den wenigsten Annahmen und Variablen auskommt.


(Quelle: [Wikipedia](https://de.wikipedia.org/wiki/KISS-Prinzip))//



----

### Return early and often
Dieses Prinzip ist für Funktionen. Wichtig ist hier, dass man so früh wie möglich einen [return](/wiki/programmiersprachen/php/function#return) macht. Wenn also eine Funktion prüft, ob eine Telefonnummer mehr als 3 und weniger als 50 Zeichen het und der geprüfte Wert 2 Zeichen lang ist, muss man nicht noch prüfen, ob die Telefonnummer kürzer als 50 Zeichen ist. Also kann man nach der (negativ) erfolgten Prüfung bereits Falsch zurückmelden. Ein Beispiel für eine solche Funktion([PHP](/wiki/programmiersprachen/php)):


   // richtig:
   function validate_phonenumber($phonenumber)
   {
      $lenght = count($phonenumber);
      if ($lenght < 3) {
         return false;
      }
      if ($lenght > 50) {
         return false
      }
      return true;
   }                                                   
   ____________________________
   
   // falsch (bad practice)
   function validate_phonenumber($phonenumber)
   {
     $lenght = count($phonenumber);
     if ($lenght > 3) {
       if ($lenght < 50) {
         $result = true;
       } else {
         $result = false;
       }
     } else {
       $result = false;
     }
     return $result;
    }

----

### Zyklomatische Komplexität
Die Zyklomatische Komplexität ist ein Wert, welcher beschreibt, wie viele Pfade (verschiedene Durchläufe) möglich sind bei einem Programm. Je höher dieser Wert ist, desto fehleranfälliger ist das Programm. Laut dem [Johner Institut / Prof. Dr. Christian Johner](https://www.johner-institut.de/blog/iec-62304-medizinische-software/zyklomatische-komplexitaet/) kann man die Skala wie folgt definieren:





1-10: Nicht komplex, geringes Fehlerrisiko


11-20: Mittlere Komplexität, moderates Fehlerrisiko


21-50: Hohe Komplexität, hone Wahrscheinlichkeit eines Fehlers


 > 50: Untestbares System, sehr hohe Wahrscheinlichkeit eines Fehlers





Bei einem Programm, welches 7 Prüfungen hat (und einen Endpunkt), das wie folgt konstruiert ist, kann man 5 unabhängige Pfade Zählen:
![https://www.johner-institut.de/blog/wp-content/uploads/2014/04/Zyklomatische-Komplexit%C3%A4t.png](/wiki/programmiersprachen/zyklomatische-komplexitaet.png)



  - **
  - **
  - **
  - **
  - **



Diese Pfade muss man dann auf Fehler testen, um die Fehleranfälligkeit so niedrig (oder am besten keine) zu halten.


Um seien PHP-Code auf die Zyklomatische Komplexität zu testen, kann man [Scrudinizer CI](https://scrutinizer-ci.com/) anwenden. Dazu stellt man sein Projekt [OpenSource](/wiki/opensource) auf [GitHub](https://github.com/) und folgt den Anweisungen auf der Webseite von Scrudinizer CI.

----

### Lesbarkeit
Viele Projekte werden meistens nicht nur von einer Person betreut. Deshalb ist es wichtig, dass der programmierte Code auch für andere Personen lesbar ist. 
![No alt text available](/wiki/programmiersprachen/codewritingfool-martinfowler.png )
Ein schlechtes Beispiel (Java):
  import java.util.Scanner;class test{public static void main(String [] args){Scanner s=new
  Scanner(System.in);int input, output;System.out.print("please enter a number");input=s.nextInt();
  output=input+2;System.out.print("your number + 2 is: "+output);}}
Das obenstehende Beispiel fordert einem auf eine Zahl einzugeben und gibt danach die eingegebene Zahl + 2 aus. Für den Programmierer dieses Programmes ist der Code sicher leicht zu verstehen, jedoch für andere nicht. Der gleiche Code, jedoch sauber formatiert, sieh dann so aus:
   import java.util.Scanner;


   class test {
           public static void main(String [] args){
                Scanner s = new Scanner(System.in);
                int input, output;
                System.out.print("please enter a number");
                input = s.nextInt();
                output = input+2;System.out.print("your number + 2 is: "+output);
          }
    }
Beide Programme machen genau das Gleiche (ohne Fehler). Jedoch ist die Weiterentwicklung des ersten Programmes einiges schwieriger als die des Zweiten.


Ein schlechtes Beispiel (PHP):
  if($_POST){$default=[];$default['username']='';$default['password']='';$data=[];$data=array_replace_recursive
  ($default,$_POST);$user='root';$pass='';$dbh=new PDO('mysql:host=localhost,
  dbname=test',$user,$pass);$stmt=$pdo->prepare("SELECT * FROM users WHERE user =
  $data['username]");$rows=$stmt->execute;foreach($rows as $row){$data['table']=$row}if($data['table']
  ['username']==$data['username']&&$data['table']['password']==$data['password']){header("Location:
  loggedin.php");}else{echo "invalid user credentials"};}
Der gleiche Code, jedoch sauber formatiert ([PSR 2](https://github.com/php-fig/fig-standards/tree/master/accepted)):
  if($_POST){
      $default = [];
      $default['username'] = '';
      $default['password'] = '';
      $data = [];
      $data = array_replace_recursive($default,$_POST);
      $user = 'root';
      $pass = '';
      $dbh = new PDO('mysql:host=localhost, dbname=test',$user,$pass);
      $stmt=$pdo->prepare("SELECT * FROM users WHERE user = $data['username]");
      $rows=$stmt->execute;
      foreach($rows as $row){
          $data['table'] = $row
      }
      if($data['table']['username'] ##### $data['username'] && $data['table']['password'] $data['password']){
          header("Location: loggedin.php");
      } else {
          echo "invalid user credentials"
      }
  }
Dieser Code ist genau richtig formatiert nach dem PSR-2 Standard. Jedoch ist es empfehlenswert auch ab und zu mal einen Zeilenumbruch einzubauen ("Das Auge programmiert mit"):
  if($_POST){
      $default = [];
      $default['username'] = '';
      $default['password'] = '';
      
      $data = [];
      $data = array_replace_recursive($default,$_POST);
      
      $user = 'root';
      $pass = '';
      $dbh = new PDO('mysql:host=localhost, dbname=test',$user,$pass);
      $stmt=$pdo->prepare("SELECT * FROM users WHERE user = $data['username]");
      $rows=$stmt->execute;
      
      foreach($rows as $row){
          $data['table'] = $row
      }
      
      if($data['table']['username'] ##### $data['username'] && $data['table']['password'] $data['password']){
          header("Location: loggedin.php");
      } else {
          echo "invalid user credentials"
      }
  }
Dieses Beispiel ist perfekt. Man hat sauberen Code (wie sinnvoll dieser ist, sei mal so dahingestellt). Wenn man sich nicht die Mühe machen will, jedes Mal vor einem Push auf GitHub den ganzen Code durchzulesen, dann kann ich [StyleCI](https://styleci.io) empfehlen. Diese Webseite prüft (bei korrekter konfiguration), ob der Code dem gewünschten Standard enspricht (PSR 1, 2, etc).

----

### Cloaking

Cloaking wird das Spammen von Suchmaschinen genannt. Man platziert unsichtbare Tags innerhalb seiner Webseite und hofft so auf ein besseres Ranking durch Suchmaschinen. Das wird heutzutage sehr hart bestraft (die Webseite landet auf der letzten Seite von Google).