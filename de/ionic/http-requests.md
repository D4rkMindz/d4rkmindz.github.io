## HTTP Requests
[HTTP-Requests](/de/wiki/divers/http-request) sind für Applikationen essentiell. Eine simple [Web-API](/de/wiki/divers/api)-Abfrage ist unter Ionic jedoch schon eine grosse Herausforderung.





### HTTP Provider
Ein HTTP GET/POST Request kann man mit dem Http Modul von Angular recht einfach machen. Dieses ist auch bereits schon integriert (dh. keine Packageinstallation nötig). Trotzdem beinhalten GET/POST Requests sehr viel redundaten Code. Deshalb kann man sich einen Provider (wie ein Service) erstellen, welcher von jeder Page aus aufgerufen werden kann und dann damit ein GET Request gemacht werden kann. Um einen Provider zu erstellen gibt man folgenden Befehl ein:


```
ionic generate provider Http
```
Danach wird man im /src-Verzeichnis das provider-Verzeichnis finden. Darin befindet sich der Unterordner http-get. In diesem Verzeichnis ist die generierte Datei http.ts. In diese Datei fügt man dann folgenden Code ein:


```javascript
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {

  constructor(private http: Http) {
  }

  /**
   * HTTP GET request.
   *
   * @param {string} url
   * @param {string} token
   * @param {string} userId
   * @returns {Promise<any>}
   */
  public get(url, token = null, userId = null) {
    return new Promise(resolve => {
      let headers = this.getHeaders(token, userId);
      // 1. HTTP GET Request
      // 2. Map response
      // 3. Resolve Data
      this.http.get(url, {headers: headers})
        .map(res => res.json())
        .subscribe(response => {
          resolve(response);
        }, xhr => {
          console.warn(xhr);
        });
    });
  }

  /**
   * HTTP POST request.
   *
   * @param {string} url
   * @param {object} data
   * @param {any} token
   * @param {any} userId
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



### HTTP GET Anwendung
Nachdem man den HTTP Provider erstellt hat, kann man die get()-Methode wie folgt brauchen:
```javascript
import {Component} from '@angular/core';
import 'rxjs/operator/map';

// Created Http Provider
import {HttpProvider} from "../../providers/http/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data: any;

  constructor(public httpProvider: HttpProvider) {
    this.getUsers();
  }

  getUsers() {
    this.httpProvider.get('https://localhost/ionic-api/users')
      .then((response) => {
        console.log(response);
        this.data = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
```
In der Methode getUsers() wird über this.httpProvider (wurde über den constructor definiert, deshalb über this.httpProvider Klassenweit verfügbar) die im vorher erstellten Http Provider Methode get() aufgerufen. Da diese ein Promise retourniert muss man die "versprochenen" Daten mit der then()-Methode abfangen. Da ein Fehler auftreten kann, sollte man auch die catch()-Methode implementieren.





### HTTP POST Anwendung
Nachdem man den HTTP Provider erstellt hat, kann man die post()-Methode wie folgt brauchen:
```javascript
import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import 'rxjs/operator/map';

// Created Http Provider
import {HttpProvider} from "../../providers/http/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public response: any;

  constructor(public httpProvider: HttpProvider) {
    translate.setDefaultLang(this.lang);
    this.postUser();
  }

  postUser() {
    let data = {
      username: 'newUser',
      password: 'newPassword'
    };
    this.httpProvider.post('https://localhost/ionic-api/users', data)
      .then((response) => {
        console.log(response);
        this.response = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
```
In der Methode postUser() wird über this.httpProvider (wurde über den constructor definiert, deshalb über this.httpProvider Klassenweit verfügbar) die im vorher erstellten Http Provider Methode psot() aufgerufen. Da diese ein Promise retourniert muss man die "versprochenen" Daten mit der then()-Methode abfangen. Da ein Fehler auftreten kann, sollte man auch die catch()-Methode implementieren.





### Troubleshooting
Grundsätzlich sollte man immer [debuggen](/de/ionic/webstorm-debugging). Auch werden Fehler von Ionic meist direkt in der Konsole angezeigt.


Wenn man jedoch einen Request vom Localhost:8100 (Ionic) auf einen PHP-Server (localhost:80/localhost:443) macht, dann darf das nicht funktionieren ([CORS](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)). Google Chrome stellt jedoch eine [Extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) zur Verfügung, welche CORS erlaubt. Diese UNBEDINGT installieren.


Wahrscheinlich wird es dann noch einen Fehler Seitens des PHP-Servers geben. Dieser Blockiert normalerweise nämlich alle abnormalen Herkünfte (ebenfalls CORS). Um dieses Problem zu beheben kann man in einer zentralen Konfigurationsdatei (bsp. [env.php](https://github.com/D4rkMindz/contact_form/blob/master/config/env.example.php)) den Access-Control-Allow-Origin mittels header() auf alles (*) erlauben:
```php
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// This line here is important!
header("Access-Control-Allow-Origin: *");

$env = array();
$env['db']['database'] = 'ionic';
$env['db']['username'] = 'root';
$env['db']['password'] = '';

return $env;
```
