## Translation
Die Übersetzung der Applikation ([i18n](/de/wiki/programmiersprachen/programmiertipps/internationalisierung)) in verschiedene Sprachen ist eine wichtige Funktion. In Ionic kann man dies erreichen, indem man sich entweder an [dieses Tutorial](https://ionicframework.com/docs/developer-resources/ng2-translate/) durcharbeitet oder folgende Schritte macht:





### ngx-translate und dependencies installieren
Der Befehl für die Installation aller dieser Packages ist:


```
npm install @ngx-translate/core @ngx-translate/http-loader@0.1.0 --save
```
### Module konfigurieren
Folgende Änderungen müssen in der /src/app/app.module.ts-Datei vorgenommen werden:


Die benötigten Module müssen mittels import importiert werden:


```
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http, HttpModule} from '@angular/http';
```
Danach muss man den import noch in dem Array imports definieren:
```
imports: [
    // Default Modules
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // The translation module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    HttpModule,
```
Jetzt fehlt nur noch die globale funktion createTranslateLoader. Diese wird in der untersten Zeile (nach "export class AppModule{}") eingefügt. Der Pfad ./assets/locale/ ist relativ ausgehend von der index.html-Seite im /www-Verzeichnis:
```
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
```
Nach diesen Veränderungen sollte die app.module.ts-Datei wie folgt aussehen:
```javascript
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http, HttpModule} from '@angular/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

```
### Übersetzungsdateien
Der vorher in der createTranslateLoader()-Funktion definerte Pfad ist das Verzeichnis mit den [JSON](/de/wiki/programmiersprachen/javascript/json) Übersetzungs-Dateien. Diese werden nach der Sprache benannt (bsp.: en.json für ENglisch oder de.json für DEutsch). Diese Dateien sind eigentlich nicht mehr als Key/Value Paare. Der Key wird dann auch im Template verwendet. Wenn man jetzt also den Titel im H3-Tag übersetzen möchte muss man dies wie folgt machen.
```javascript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Translation Service import
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  protected lang: string = 'en';
  
  // Use TranslationService as translate in the class.
  constructor(public navCtrl: NavController, public translate: TranslateService) {
    // Set default language 'en' (english, en.json)
    translate.setDefaultLang('en');
  }
  
  // Function to change language. On button click (click).
  changeLanguage() {
    if (this.lang == 'en'){
      this.lang = 'de';
    } else {
      this.lang = 'en'
    }
    this.translate.use(this.lang)
  }

}
```
```html
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <!-- Title to translate -->
  <h3>{{ 'Ionic Menu Starter' | translate}}</h3>

  <p>
    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.
  </p>
  
  <!-- Trigger translation by button onclick -->
  <button ion-button secondary (click)="changeLanguage()" >Toggle Menu</button>
</ion-content>
```
```
// Translation German
{
  "Ionic Menu Starter": "Ionic Start Menu"
}
```
```
//Translation English
{
  "Ionic Menu Starter": "Ionic Menu Starter"
}
```
### Extract
Wenn man jedoch Fehlern vorbeugen möchte und sich eine Übersetzungsdatei-template generieren möchte, geht dies mittels der Library von [biesbjerg](https://www.npmjs.com/package/@biesbjerg/ng2-translate-extract). Diese installiert man dann wie folgt:


```
npm install @biesbjerg/ng2-translate-extract --save-dev
```
Danach fügt man in der package.json-Datei unter scripts noch folgendes script hinzu:
```
"scripts": {
  "extract": "ng2-translate-extract --dir ./src --output ./www/assets/locale --format=json --clean"
},
```
Dieses Script kann man mittels folgendem Befehl ausführen. --dir ist das Verzeichnis, indem nach translation-strings gesucht werden soll und --output ist das verzeichnis, indem die template.json-Datei abgelegt werden soll.


```
npm run extract
```
