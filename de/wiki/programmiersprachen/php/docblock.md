## DocBlock(PHP)
DocBlock ist die Dokumentation des PHP-Codes. Man dokumentiert grundsätzlich alles in seinem Code, damit man es selber später auch einmal versteht. 
Ausserdem fällt es einem Aussenstehenden so einfacher, den eigenen Code zu verstehen.


Man dokumentiert am Anfang mit den grundlegenden Informationen (Autor, Lizenz, etc.). Ebenso Dokumentiert man folgende Sachen:


 - Funktionen
 - Konstanten
 - Klassen
 - Interfaces
 - Traits
 - Klassen Konstanten
 - Eigenschaften
 - Methoden
Ein DocBlock ist, anders als ein normaler Kommentar in PHP, mit einem / und zwei * eingeleitet (/ * *). Pro Zeile gibt es dann am Anfang einen *. Das 
Ende ist dann ein / gefolgt von einem *.


Die Grundstruktur sieht also folgendermassen aus:


   /**
    *
    *
    */



### Tags
In einem DocBlock kann man auch verlinken. man setzt dazu ein "@" vor den "Tag". Mit folgenden Tags kann man verlinken:
   Tag             Element        Beschreibung
   --------------------------------------------------------
   api             Methoden       
   --------------------------------------------------------
   author          überall        Dokumentiert den Autor
   --------------------------------------------------------
   category        File, Klasse   Gruppiert Packete
   --------------------------------------------------------
   copyright       überall        Dokumentiert die 
                                  Copyrightinformationen
   --------------------------------------------------------
   deprecated      überall        Dokumentiert, dass ein
                                  Element in künftigen
                                  Versionen entfernt wer-
                                  den kann
   --------------------------------------------------------
   example         überall        Zeigt den Code einer 
                                  Beispieldatei
   --------------------------------------------------------
   filesource      File           Bezieht die Quelle des
                                  aktuellen Files mit
                                  ein in den Output
   --------------------------------------------------------
   global          Variable       Informiert PHP Doc-
                                  umentor über eine Glo-
                                  bale Variable oder 
                                  deren Nutzen.
   --------------------------------------------------------
   ingnore         überall        Dieses Element wird in
                                  der Dokumentation ig-
                                  noriert
   --------------------------------------------------------
   internal        überall        Normalerweise versteckt
   --------------------------------------------------------
   license         File, Klasse   Zeigt, welche Lizenz 
                                  das Element hat
   --------------------------------------------------------
   link            überall        Zeigt die Verbingung
                                  des Elementes zur Web-
                                  seite
   --------------------------------------------------------
   method          Klasse         Erlaubt der Klasse zu
                                  wissen, welche 
                                  "magische" Methode auf-
                                  gerufen wird
   --------------------------------------------------------
   package         File, Klasse   Zur Kategorisierung
   --------------------------------------------------------
   param           Methode,       Dokumentiert ein ein-
                   Funktion       zelnes Argument einer
                                  Funktion oder Methode
   --------------------------------------------------------
   property        Klasse         Erlaubt der Klasse zu
                                  wissen, welche 
                                  "magischen" Eigen-
                                  schaften vorhanden sind
   --------------------------------------------------------
   property-read   Klasse         Erlaubt der Klasse zu
                                  wissen, welche
                                  "magischen" Eigen-
                                  schaften (read-only) vor-
                                  handen sind
   --------------------------------------------------------
   property-write  Klasse         Erlaubt der Klasse zu
                                  wissen, welche 
                                  "magischen" Eigen-
                                  schaften (write-only)
                                  vorhanden sind
   --------------------------------------------------------
   return          Methode,       Dokumentiert den Rück-
                   Funktion       gabewert einer Funktion
                                  oder Methode
   --------------------------------------------------------
   see             überall        Zeigt eine Referenz an
   --------------------------------------------------------
   since           überall        Zeigt an, seit welcher
                                  Version das Element vor-
                                  handen ist.
   --------------------------------------------------------
   source          überall,       zeigt den Sourcecode des
                   ausser File    Elementes an
   --------------------------------------------------------
   subpackage      File, Klasse   Zur Unterkategorisierung
   --------------------------------------------------------
   throws          Methode,       Zeigt an, wann das Element
                   Funktion       eine Exception werfen
                                  (throw) kann
   --------------------------------------------------------
   todo            überall        Zeigt an, wo noch etwas
                                  gemacht werden muss
   --------------------------------------------------------
   uses            überall        Zeigt an, welches Element
                                  innerhalb des Elementes
                                  benutzt wird
   --------------------------------------------------------
   var             Eigenschaften  
   --------------------------------------------------------
   version         überall        Zeigt die aktuelle Version
                                  eines Elementes an
   --------------------------------------------------------



### Anfang
Der Inhaltliche Aufbau eines DocBlocks ist sehr Strukturiert. Bei der Dokumentation am Anfang wird der Autor sowie die Lizenz und vieles mehr dokumentiert:
```php/**
    * Kurze Beschreibung des Files
    *
    * 
    *
    * PHP version 5.6
    *
    * LICENSE: This source file is subject to version 3.01 of the PHP license
    * that is available through the world-wide-web at the following URI:
    * http://www.php.net/license/3_01.txt.  If you did not receive a copy of
    * the PHP License and are unable to obtain it through the web, please
    * send a note to license@php.net so we can mail you a copy immediately.
    *
    * @category   Kategorie Name
    * @package    Packet Name
    * @author     Original Autor <autor@example.com>
    * @author     Weiterer Autor <autor2@example.com>
    * @copyright  1997-2005 The PHP Group
    * @license    http://www.php.net/license/3_01.txt  PHP License 3.01
    * @version    SVN: $Id$
    * @link       http://pear.php.net/package/PackageName
    * @see        NetOther, Net_Sample::Net_Sample()
    * @since      File available since Release 1.2.0
    * @deprecated File deprecated in Release 2.0.0
    */```



### Funktionen=
Eine Funktion wird dann wie folgt dokumentiert:
```php/**
    * Kurze Beschreibung der Funktion.
    * 
    * Ausführliche Beschreibung der Fuktion
    *  
    * @see http://link.zu-einer-Webseite.ch/welche/die/funktion/beschreibt.html
    * @uses evtl_andere_innerhalb_der_Funktion_verwendete($funktionen)
    * @param int|array|bool|string kurze Beschreibung des Eingabewertes
    * @return int|array|bool|string|mixed kurze Beschreibung des Eingabewertes
    * /```



### Allgemein
Allgemein gilt für die Dokumentation folgende Regeln:
   * Immer in Englisch
   * Zuerst kurze Beschreibung
   * Dann lange Beschreibung
   * Tags