=## Web auf dem Desktop
Neben Cross-Platform-Development auf mobilen Geräten mit Framworks wie [](//ionic) oder [React Native](/artikel/phpmagazin/2.18/native-apps-mit-react-native) gibt es auch die Möglichkeit Applikationen auf Linux, MacOS und Windows gleichzeitig zu entwickeln. Dafür benötigt man [Electron JS](https://electronjs.org/). Electron bietet eine auf [Chromium](https://de.wikipedia.org/wiki/Chromium_(Browser)) basierende WebView an. In dieser WebView kann man dann machen was man will. Man kann auch Angular oder Vue JS verwenden. Dies bleibt dem Benutzer offen gestellt.


Electron hat auch eine gute API für [Native Elemente](https://de.wikipedia.org/wiki/Chromium_(Browser)). Die Verwendung von NodeJS nativen Elementen wie [net](https://nodejs.org/api/net.html) ist ebenfalls fehlerfrei implementiert.


### Fazit
Electron wurde bereits mehrfach dafür kritisiert, dass es sehr viele Ressourcen braucht. Ein blinkender Cursor in VS Code hatte eine CPU Auslastung von 13% verursacht.


Jedoch muss man auch den Aufbau einer Electron App berücksichtigen. Eine Chromium (RAM-Fresser) WebView mit NodeJS als Server kann nicht wenig Ressourcen brauchen.


Electron Applikationen sind besonders dann gut, wenn schnell und günstig eine Native Applikation für mehrere Betriebssysteme entwickelt werden muss.

