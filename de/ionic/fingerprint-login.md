=### Fingerprint Login
Einen Fingerprint Login kann man mit der [FingerprintAuth (Android)](/de/http/**ionicframework.com/docs/native/android-fingerprint-auth/) Extension für Android machen.


Da jedoch nicht jedes Android/iOS Gerät über einen Fingerprint Scanner oder TouchID verfügt, muss man zuerst Plattformabhängig testen, ob eine Authentifizierung über diesen Weg überhaupt möglich ist. Dies macht man mit dem bereits vorhandenen Provider "Platform".


```javascript
import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";
import {config} from "../../app/app.module";
import {HomePage} from "../home/home";
import {TouchID} from "@ionic-native/touch-id";
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public config = config;

  public username: string;
  public password: string;

  constructor(private fingerprintAuth: AndroidFingerprintAuth,
              private touchId: TouchID,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private translate: TranslateService) {
    if (config.auth.useFingerprint && !config.auth.failed) {
      this.loginWithFingerprint();
    }
  }

  login() {
    if (config.auth.useFingerprint && !config.auth.failed) {
      this.loginWithFingerprint();
    }

    if (config.auth.failed || !config.auth.useFingerprint) {
      this.validateUserdata().then(success => {
        this.navCtrl.setRoot(HomePage);
      });
    }
  }

  register() {
    alert('Register')
  }


  loginWithFingerprint() {
    if (config.auth.device == 'android') {
      this.fingerprintAndroid();
    }
    if (config.auth.device == 'ios') {
      this.fingerprintIos();
    }
  }

  fingerprintAndroid() {
    this.fingerprintAuth.encrypt({
      clientId: 'LoginApp',
      username: this.username,
      password: this.password,
      locale: config.locale.asAbbr
    })
      .then(result => {
        if (result.withFingerprint) {
          // config.auth.token = result.token;
          this.navCtrl.setRoot(HomePage);
        }
        if (result.withBackup) {
          // config.auth.token = result.token;
          console.log(result);
          this.navCtrl.setRoot(HomePage);
        }
      })
      .catch(error => {
        console.log(error);
        if (error == 'ILLEGAL_BLOCK_SIZE_EXCEPTION') {
          // # dirty
          **github.com/mjwheatley/cordova-plugin-android-fingerprint-auth/issues/88
          this.navCtrl.setRoot(HomePage);
          return;
        }
        if (error == 'FINGERPRINT_CANCELLED'){
          return;
        }
          var messages = {
            fail: 'Please login without Fingerprint',
            title: 'Scan failed',
          };
        this.translate.get('Please login without Fingerprint').subscribe(result => {
          messages.fail = result;
        });
        this.translate.get('Scan failed').subscribe(result => {
          messages.title = result;
        });
        this.alertCtrl.create({
          title: messages.title,
          message: messages.fail
        }).present();
        config.auth.failed = true;
      });
  }

  fingerprintIos() {
    var messages = {
      touchMessage: 'Please scan your finger',
      fail: 'Please login without TouchID',
      title: 'Scan failed',
    };
    this.translate.get('Please scan your finger').subscribe(result => {
      messages.touchMessage = result;
    });
    this.translate.get('Please login without TouchID').subscribe(result => {
      messages.fail = result;
    });
    this.translate.get('Scan failed').subscribe(result => {
      messages.title = result;
    });
    this.touchId.verifyFingerprint(messages.touchMessage).then(res => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      if (err == -1) {
        this.alertCtrl.create({
          title: messages.title,
          message: messages.fail
        }).present();
        config.auth.failed = true;
      }
    });
  }

  validateUserdata() {
    return new Promise(resolve => {
      // TODO: implement serverside validation for login (use HttpProvider)
      resolve(true);
    })
  }

}
```
