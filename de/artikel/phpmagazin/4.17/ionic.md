## Ionic
Sehr viele Webapplikationen laufen nicht nur über den Desktop, wo die Eingabeelemente die Maus und Tastatur sind, sondern auch über die Mobile Ansicht, bei der Touch das Haupteingabeelement ist. Um seine Webapplikation effizienter in der Mobilen Ansicht darzustellen und nutzbar zu machen kann man entweder auf eine Progressive Web App ([PWA](/de/artikel/phpmagazin/4.17/progressive_web_app)) oder als Native App anbieten. Bei PWAs ist das ganze recht einfach. Eine Offlineunterstützung ist mittels Service Worker möglich. Möchte man jedoch eingehender auf Systeminterne Funktionen zugreifen, muss man eine Native App entwickeln. Unter Android müsste man in Java, unter iOS müsste man in Swift programmieren, was bedeutet, dass man eine neue Programmiersprache lernen muss. Um jedoch eine App Plattformunabhängig zu entwicklen kann man eine Hybride App entwickeln. Neben den Hybridframeworks NativeScript und React Native gibt es noch Ionic. Diese Frameworks basieren auf den gewohnten Webdeveleopment Techniken.





### Beschreibung=
Das primäre Ziel von Ionic ist, die Enwicklung von hybriden Apps mit [HTML](/de/wiki/programmiersprachen/html), [CSS](/de/wiki/programmiersprachen/css) und [JavaScript](/de/wiki/programmiersprachen/javascript) zu vereinfachen. Zur Verbindung mit dem Betriebssystem kommt [Apache Cordova](https://cordova.apache.org/) zum Einsatz. Für die Struktur ist [Angular](https://angular.io/) verantwortlich. Ionic stellt dem Entwickler von Anfang an mehrere Komponenten wie Listen, Menüs und Eingabeelemente zur Verfügung. Der Look der Komponenten ist jeweils an das verwendete Betriebssystem angepasst. 


Ionic liefert zusätzlich noch ein Kommandozeileprogramm, mitdem man in der App-Entwicklung alle Phasen von der Initialisierung bis zum Bauen der Applikation ausführen kann.





### Installation=
Ionic benutzt [Node.js](https://nodejs.org/en/) als Infrastruktur. Abhängigkeiten werden über den [Node Package Manager (NPM)](https://www.npmjs.com/) geregelt.


Nach der [Installation von Node.js](http://stackoverflow.com/questions/18136304/how-to-install-nodejs-on-xampp-localhost?answertab=votes#tab-top) kann man die Installation von Ionic mittels des mitinstallierten NPM vornehmen. Dafür gibt man folgenden Befehl im Root-Verzeichnis des Projektes ein:
```
$ npm install -g ionic cordova
```
Die Option -g sorgt für eine Globale Installation von Ionic. Um die Applikation unter Mac im iOS Simulator zu starten braucht man ausserdem noch das **-Package.
### Erste Schritte
Vieles wird dem Entwickler bereits beim ersten Setup abgenommen. Dieses Setup erfolgt ebenfalls über die Kommandozeile:


```
$ ionic start myApp --v2
```
Das Command Line Interface (CLI) erzeugt ein Verzeichnis namens myApp und installiert dort die Grundstruktur. Die Verzeichnisse und Dateien sind abhängig vom gewählten Template (standard ist das [Tabs Template](http://ionicframework.com/docs/v1/cli/start.html)).


Weitere Templates sind **, **, ** und **. Im [Ionic Market](https://market.ionic.io/) sind noch viel mehr Templates vorhanden.


Nach diesen Schritten muss man die Testumgebung starten. Dies ist, da der Ionic code ein WebView ist, grundsätzlich sehr einfach. Das CLI nutzt diesen Umstand. Mit folgendem Befehl wird ein **-Build der App erstellt und der Standardbrowser des Systems geöffnet.
```
$ ionic serve
```
Der Vorteil bei dieser Entwicklung ist, dass bei einer Veränderung des Quellcodes der Browser automatisch aktualisiert wird. Um die App jedoch unter realistischen Umständen zu testen sollte man diese in einem [iOS-](/de/http/**cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)Simulator starten.





### Struktur des Projektes
Um eine App zum laufen zu bringen braucht man ein Grundverständnis des Quellcodes. Folgende Dateien im Wurzelverzeichnis sind ausschlaggebend.
  * ** Metadaten des Projektes (Autor, Beschreibung, etc) und definition des Einstieges in das Projekt (default: src/index.html)
  * ** Ionicspezifische konfiguration (Version, verwendung von TypeScript, etc)
  * ** Definition der Abhängigkeiten
  * ** TypeScript Compiler Konfiguration
  * ** Definition des Schreibestils und Konfiguration des Linters



Neben den Konfigurationsdateien befinden sich auch noch andere Verzeichnisse im Wurzelverzeichnis.
  * ** hier werden Scripte ([Hooks](https://cordova.apache.org/docs/de/latest/guide/appdev/hooks/)), welche bei verschiedenen Befehlen ausgeführt werden, gespeichert
  * ** hier sind die Abhängigkeiten und externe Module gespeichert
  * ** Speicherort für Plattformspezifische Buildfiles
  * ** die verwendeten Plugins werden in der **-Datei aufgelistet
  * ** Speicherort für Medien wie Bilder, Videos oder [Übersetzungen](https://poedit.net/)
  * ** Dieses Verzeichnis enthält den Quellcode
  * ** Hier werden HTML-, CSS- und JS-Dateien gespeichert



Die Hauptarbeit findet innerhalb des ** Verzeichnisses statt. Bei Webapplikationen werden Veränderungen am Quellcode bei der Entwicklung im Browser nur durch das erneute Laden der Seite dargestellt. Dies kann man bei Ionic mittels einer kleinen Library namens LiveReload auch erreichen. Diese ist bereits vorinstalliert. Wenn man die Applikation im Browser startet kann man dies mit folgendem Befehl erreichen. Ausserdem ist LiveReload per Default aktiviert.
```
$ ionic serve
``` 
Wenn man die App unter Android oder iOS starten möchte muss mann jedoch LiveReload mit ** oder ** aktivieren.


```
# Android
$ ionic run android -l

# iOS
$ ionic run ios -l
```



### Die Ionic App
Der Einstieg in die App erfolgt über die index.html Datei im **-Verzeichnis. Hier werden alle Benötigten Dateien geladen. In der Index Datei wird auf die bereits gebauten Resultate im **-Verzeichnis verwiesen.


Im **-Verzeichnis finde man die **-Datei. Diese ist der Einstieg in die App. An dieser Stelle wird das ** geladen, welches unter ** Konfiguriert werden kann. Module, Komponenten und Services werden hier geladen. 
Unter ** wird ** konfiguriert. Dies ist dafür zuständig, dass dem Benutzer die korrekten Inhalte angezeigt werden.





#### Pages=
Eine Seite (Screen) der App ist eine Page. Diese sind AngularComponents, welche aus folgenden Komponenten bestehen.
| Dateityp   |
| ---------- | Nutzung           ^
| TypeScript | Komponentenklasse |
| HTML       | Template          |
| SCSS       | Styling           |
Diese Dateien sind im ** Verzeichnis abgespeichert. Zusätzlich zum erstellen der Dateisystemstruktur muss jeder Screen (Page) in der **-Datei unter ** registriert werden. Zusätzlich muss noch ein Eintrag unter ** gemacht werden, damit Ionic die Pages dynamisch einfügt. Da das Erstellen einer neuen Page immer nach dem selben Prinzip abläuft, haben die Entwickler von Ionic CLI einen Befehl dem Programmierer zur Verfügung gestellt (im Wurzelverzeichnis ausführen).
```
$ ionic generate page {name}
```
Die Registrierung im ** in der **-Datei muss jedoch noch vom Benutzer vorgenommen werden.


Neben den im Listing 1 (list.html) dargestellten Code kann man folgende Funktionen Brauchen.
| Funktion          |
| ----------------- | Beschreibung                               ^
| ionViewDidLoad    | Ausführung beim initialen Laden der Seite  |
| ionViewWillEnter  | Ausführung vor Aktivierung der Seite       |
| ionViewDidEnter   | Ausführung sobal die Seite aktiv ist       |
| ionViewWillLeave  | Ausführung vor dem Verlassen der Seite     |
| ionViewDidLeave   | Ausführung nach dem Verlassen der Seite    |
### Navigation
Die Navigation erfolgt über die Klasse [NavController](https://ionicframework.com/docs/api/navigation/NavController/). Die Komponente ** in der **-Datei leitet ebenfalls von dieser Klasse ab. Mittels der **-Methode wird die aktive Page definiert. Wenn man zu einer anderen Seite Navigieren möchte, kann man dies mittels der **-Methode erfolgen. Man kann jedoch auch mittels des **-Handlers dafür sorgen, dass die **-Methode einer Komponente ausgeführt wird. Bei der **-Methode jedoch kann man als zweites Argument (erstes ist die Seite) ein Objekt übergeben. Diese Navigation ist im **Listing 2** dargestellt.





### Components
Das wichtigste in einer Angular-Applikation sind Components. Diese sind in einer Wurzelstruktur verzweigt. Wenn man nun z.B. auf der ListPage eine Liste anzeigen möchte, muss man die Datenquelle zuerst Statisch in der ** Funktion definieren. Im einfachsten Fall kann man dann danach mit der ngFor-Direktive durch die Daten iterieren. Besser funktioniert die Darstellung der Items indem man mit folgendem Befehl ein ListItem erzeugt. Der Quellcode dazu ist im **Listing 3** dargestellt.
```
$ ionic generate Comoponent list-item
```
Dabei wird eine TS-, ein HTML- und eine CSS-Datei im **-Verzeichnis generiert. Auch hier muss man die Registrierung unter ** im ** vornehmen.





### Services
Services dienen zur Auslagerung von Logik. Sie können jedoch auch zur Datenerhaltung und Kommunikation eingesetzt werden. Eine der bekanntesten Services ist der Angular **-Service.


Dieses Mal sollen die Benutzer über eine **-Methode geladen werden. Man kann mittels der Ionic CLI einen Service erzeugen.
```
$ ionic generate provider user-provider
```
Dieser Service wird im **-Verzeichnis gespeichert. Ein Ionic-Provider erhält automatisch eine Instanz des **-Service mittels Dependency Injection. Im **Listing 4** ist der Quellcode dazu aufgeführt. In der ListPage muss man lediglich den Service mittels Dependency Injection laden, die **-Eigenschaft des Service mit der Page verbinden und die **-Methode aufrufen.





### Zugriff auf das Gerät
Der Zugriff auf das Gerät ist relativ Beschränkt, da Ionic als WebView ausgeführt wird. Jedoch können mittels der Cordova Pluginschnittstelle die Geolocation, Kamera und andere Sensoren angesprochen werden. Um den Zugriff zu erleichtern gibt es das ** Paket. Das ** Paket ist jedoch bereits vorinstalliert. Wenn man dann auf die Kamera zugreifen möchte, muss man zuerst folgenden Befehle eingeben.
```
$ ionic plugin add cordova-plugin-camera
$ npm --save @ionic-native/camera-native
```
Von jetzt an kann man die Klasse ** in den Pages und Components importieren. Mittels ** wird dann die Kamera angesteuert.





**[Schritt für Schritt Anleitung zum Testen](http://ionicframework.com/docs/intro/deploying/)**
### Fazit
Grundsätzlich ist Ionic ein sehr spannendes Thema. Auch erleichter es die Entwicklung von Nativen Applikationen.
### Listings
Die Listings wurden im Text oben erwähnt
```php

/*Interpolation und Event-Binding (list.html) */
<ion-content padding>
  <div>{{username}}</div>
  
  <button (click)="changeUsername($event)">Change Username</button>
  
</ion-content>

/*Interpolation und Event-Binding (list.ts) */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  private username = 'Klaus';
  
  changeUsername(){
    this.username = 'Lisa';
  }
}
```
```php

/*Navigation (list.html) */
<ion-content padding>

  <button (click)=goToPage1()>Go to page 1</button>
  
</ion-content>

/*Navigation (list.ts) */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams){
  
  }
  
  goToPage1() {
    this.navCtrl.push(Page1);
  }
}
```
```php
/* Template (list.html) */
<ion-content padding>
  <ul>
    <list-item *ngFor="let user of users | async" [user]="user"></listitem
  </ul>
</ion-content>

/* Kindkomponente (list-item.ts) */
import { Component, Input } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector:'list-item',
  template: '<li>{{user.name}} - {{user.role}}</li>'
})

export class ListItemComponent {
  @Input()
  private user: User;
  
  constructor(){
  }
}
```
```php
export class UserProvider {
  public users: Observable<User[]>;
  private _users: BehaviorSubject<User[]>;
  private dataStore{
    users: Array<User>
  };
  
  constructor() {
    this.dataStore = {users: [] };
    this._users = <BehaviorSubject<User[]>> new BehaviorSubject([]);
    this.users = this._users.asObservable();
  }
  
  loadAll() {
    this.dataStore.users = [
      {name:'Peter',role:'user'},
      {name:'Paul',role:'superuser'},
      {name:'Mary',role:'administrator'}
    ];
    this._users.next(Object.assign({},this.dataStore).users);
  }
}
```
