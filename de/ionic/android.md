## Android testing=
Wenn man die App unter Android testen möchte muss man zuerst Android als Plattform hinzufügen:


```
ionic cordova platform add android
```
Danach muss man die [Android Studio](https://developer.android.com/studio/index.html) der aktuellsten Version herunterladen. ([Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) muss installiert sein).





### Systemvariablen
Zuerst muss man eine System-Variable auf das Android Verzeichnis zeigen lassen (ANDROID_HOME). Anschliessend muss man unter des Systempfäden (path) noch %ANDROID_HOME%
tools und %ANDROID_HOME%
platform-tools hinzufügen.





### Android Version
Danach muss man Android Studio starten und noch ein paar tools installieren. Dazu klick man beim Start-Screen auf "Configure" (unten rechts) und wählt "SDK Manager" aus.


![No alt text available](/ionic/android-manager-start.png )
Anschliessend wählt man die Android Version aus, welche man auf dem Smartphone installiert hat (Settings > About Device > Software Info > Android version).


![No alt text available](/ionic/android-manager.png )
Um nun über ein an den Computer angeschlossenes Kabel die Applikation direkt starten zu können muss man noch unter "SDK Tools" den "Google USB Driver" und den "Google Web Driver" (opt.) installieren.


![No alt text available](/ionic/android-manager-tools.png )



### Run
Nach diesem Setup muss man nur noch das WLAN auf dem Smartphone aktivieren und ins lokale Netzwerk einwählen (man muss auf den "localhost des eigenen Computers kommen; dazu einfach den Computernamen im Browsertab eingeben und los, sofern XAMPP gestartet ist).


Mit folgendem Befehl kann man nun die Applikation auf dem Smartphone laufen lassen.


```
ionic cordova run android -l
```
Der Parameter "-l" steht für [LiveReload](https://ionicframework.com/docs/cli/cordova/run/). Dies bewirkt, dass bei jeder Änderung ein Build gemacht wird und dieser auf das Smartphone ausgeliefert wird.





### Debugging
Richtiges Debugging ist hier nicht möglich. Jedoch kann man in Google Chrome "chrome: / / inspect" eingeben und danach das angeschlossene Smartphone auswählen. Man kann dort dann die ganz gewöhnlichen Entwickler Tools (F12) brauchen. console.log() ist manchmal sehr hilfreich.


WICHTIG: Das USB-Debugging in den Entwickleroptionen des Handys muss aktiviert sein.


Wenn das Gerät nicht gefunden wird muss man mittels ADB (Android Tools) die Device ID heraussuchen. Dazu muss der MTP-Treiber des OnePlus Gerätes installiert sein.


```
$ /path/to/adb devices
List of devices attached
f70a8979        device
```
Danach kann man diese ID Ionic mittels --directory mitgeben.


GANZ WICHTIG: MELDUNGEN LESEN!!
