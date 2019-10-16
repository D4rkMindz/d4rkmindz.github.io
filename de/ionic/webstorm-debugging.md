## Debugging mit Webstorm
Wenn man eine Ionic Applikation debuggen möchte, kann man dies mit der [IDE WebStorm](/ionic/setup#ide) machen. Ein sehr ausführliches Tutorial dazu findet man [hier](https://blog.thecodecampus.de/setup-ionic-2-typescript-debugging-intellijwebstormjetbrains-ide/).


### Phonegap/Cordova
Damit man seine IONIC Applikation direkt über den run befehl ausführen kann, muss man das "Phonegap/Cordova" Plugin installiert haben. Man muss unter Settings -> Plugins -> Install JetBrains plugin nach "Cordova" suchen. Gegebenenfalls muss man dieses Plugin noch installieren. Meistens ist es jedoch bereits installiert.


![No alt text available](/ionic/phonegap-cordova-plugin-webstorm-installation.png )



### Run Cordova
Um **Run Cordova** zu aktivieren muss man unter Run -> Edit Configurations ... (oder F9 -> Edit Configurations ...) auf das grüne Pluszeichen klicken und "Phonegap/Cordova" auswählen.


![No alt text available](/ionic/phonegap-cordova-plugin-run-cordova.png )
Danach konfiguriert man den Kommand wie in dem Screenshot unterhalb dargestellt.


![No alt text available](/ionic/phonegap-cordova-run-cordova-config.png )
### JavaScript Debug
Um nun den Browser zu debuggen, kann man wie bei dem Hinzufügen von "[Phonegap/Cordova](/#phonegap/cordova)" einen JavaScript Debug Kommand hinzufügen. Danach muss man diesen wie folgt konfigurieren.


![No alt text available](/ionic/phonegap-cordova-debug-sj-config.png )
Danach muss man nur noch einen Breakpoint setzen und den Befehl ausführen (F9 -> Befehl auswählen).