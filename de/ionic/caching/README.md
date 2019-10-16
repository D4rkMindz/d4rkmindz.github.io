## Caching
Wenn man Daten von einer Web-API bezieht, ist es (meistens) sinnvoll diese zu cachen. So verhindert man unnötigen Networktraffic. Ein sehr gutes Video über Caching in Ionic findet man [hier](https://www.youtube.com/watch?v=zIE8aSw40eY).


Einen Artikel zum ImageCaching finder man [hier](https://medium.com/ninjadevs/caching-images-ionic-ccf2f4ca8d1f)
### Installation
Ionic stellt bereits eine Caching-Komponente zur Verfügung.


```
npm install ionic-cache @ionic/storage --save
```
Anschliessend fügt man die neuen Module in der /src/app/app.module.ts-Datei noch hinzu:


```javascript
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {Http, HttpModule} from '@angular/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpProvider} from '../providers/http/http';
import {CacheModule} from "ionic-cache";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Add Cache Module here.
    CacheModule.forRoot(),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
  ]
})
export class AppModule {
}
```
Danach kann man die Globalen Cache Einstellungen vornehmen. Diese macht man in der /src/app/app.components.ts-Datei.


```javascript
import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {TranslateService} from "@ngx-translate/core";
import {CacheService} from "ionic-cache";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public cache: CacheService) {
    this.pages = {
      {page: 'Home', component: HomePage},
      {page: 'List', component: ListPage},
    };
    
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Cachesettings are configurated here
      
      // 8 hrs default caching time
      this.cache.setDefaultTTL(60 * 60 * 8);

      // Keep cache, even if device is offline
      // -> make it offline compatible
      this.cache.setOfflineInvalidate(false);

      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
```
### Anwendung
Um die Daten eines Requests zu speichern, sollte man dies direkt im [HttpProvider](/de/ionic/http-requests#http_provider) machen. Ein Beispiel, wie diese Datei danach aussehen kann:


```javascript
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {CacheService} from "ionic-cache";
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";

@Injectable()
export class HttpProvider {
  protected result: Array<any> = [];

  constructor(private http: Http, private cache: CacheService, private toastCtrl: ToastController) {
  }

  /**
   * HTTP GET request.
   *
   * @param {string} url
   * @param {string} groupKey
   * @param {number} ttl
   * @param refresher
   * @param {string} token
   * @param {string} userId
   * @returns {Promise<any>}
   */
  public get(url, groupKey = 'default', ttl = (60 * 60 * 8), refresher?, token = null, userId = null) {
    return new Promise(resolve => {
      let key = url;

      let headers = this.getHeaders(token, userId);
      let request = this.http.get(url, {headers: headers}).map(res => {
        let toast = this.toastCtrl.create({
          message:'Loaded',
          duration: 1000
        });
        toast.present();
        return res.json();
      });
      if (refresher) {
        let delayType = 'all';
        this.cache.loadFromDelayedObservable(key, request, groupKey, ttl, delayType).subscribe(data => {
          refresher.complete();
          this.result = data;
        });
      } else {
        this.cache.loadFromObservable(key, request, groupKey, ttl).subscribe(data => {
          this.result = data;
        });
      }
      resolve(this.result);
    });
  }

  /**
   * HTTP POST request.
   *
   * @param {string} url
   * @param {object} data
   * @param {string} token
   * @param {string} userId
   * @returns {Promise<any>}
   */
  public post(url, data, token = null, userId = null) {
    return new Promise(resolve => {
      let headers = this.getHeaders(token, userId);
      let json = JSON.stringify(data);

      this.http.post(url, json, {headers: headers})
        .map(res => res.json())
        .subscribe(response => {
          resolve(response);
        }, xhr => {
          console.warn(xhr);
        });
    });
  }

  /**
   * Prepare HEADERS for Request.
   *
   * @param token
   * @param userId
   * @returns {Headers}
   */
  private getHeaders(token, userId) {
    // Set Content-Type Header by default to application/x-www-form-urlencoded
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Headers can be set like this
    if (token !== null) {
      headers.append("x-token:", token);
      headers.append("x-user-id", userId);
    }

    return headers;
  }
}
```
