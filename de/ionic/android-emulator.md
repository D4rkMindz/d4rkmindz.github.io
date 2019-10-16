## Android Emulator
Einen Android Emulator lässt sich sehr einfach mit Android Studio aufsetzen. Dazu installiert man [Android Studio](https://developer.android.com/studio/index.html) in der aktuellsten Version. ([Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) muss installiert sein).


Danach den AVD Manager Starten


![No alt text available](/ionic/2017-09-14-android-emulator-start.png )
Dort dann "Create Virtual Device" auswählen und das gewünschte Gerät auswählen. Anschliessend noch die gewünschte Version auswählen und auf "next" klicken.


Den AVD-Namen kann man frei wählen. Ich empfehle als Orientierung "portrait" auszuwählen. Man kann das Gerät im Emulator immer noch kippen.


Wenn alle Einstellungen getätigt sind, einfach "Finish" anklicken und danach den Emulator starten. Jetzt kann man "ionic cordova emulate android -l" ausführen.


**!! WENN DER EMULATOR NICHT LÄUFT, WIRD DIESER BEFEHL NICHT FUNKTIONIEREN !!**

