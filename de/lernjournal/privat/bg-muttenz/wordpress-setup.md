# WordPress Setup

### Grundinstallation
| Datenbank        |
| ---------------- |                ^
| Datenbank Name   | wp_bg-muttenz  |
| Benutzername     | wp_bg-muttenz  |
| Passwort         |Siehe KeePass   |
| Datenbank Host   |localhost       |
| Tabellen-Präfix  |wp_             |

| WordPress User    |
| ----------------- |               ^
| Benutzername      | bg-muttenz    |
| Passwort          | Siehe KeePass |

Suchmaschienen davon abhalten, diese Webseite zu indexieren: Nein

### Theme

Das Template muss direkt über das Filesystem des Webservers hochgeladen werden.


Dateien entpacken 
```
  basisverzeichnis/wp-content/themes/enfold
```
Login in das Webinterface mittels Benutzername und Passwort.


  * Design
  * Themes
  * Enfold
  * Aktivieren

### Plugins

#### Post Expirator

Das [Post Expirator](https://wordpress.org/plugins/post-expirator/) Plugin wird benötigt, um Daten auf der Website an einem bestimmten Zeitpunkt zu entfernen.

Download: [[https://downloads.wordpress.org/plugin/post-expirator.2.3.1.1.zip]]


Der Download muss in das Pluginverzeichniss von Worpress extrahiert werden.
```
  /wp-content/plugins/post-expirator
```
Danach kann man es im WordPress Webinterface unter "Plugins" aktivieren.