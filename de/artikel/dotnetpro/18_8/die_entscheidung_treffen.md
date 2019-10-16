## Die Entscheidung treffen
Viele mobile Geräte sind heutzutage entweder ein iPhone, Android Smartphone oder ein Windows Phone. Dies klingt nach wenig, ist jedoch eigentlich sehr viel. Die drei Betriebssystem (OS) haben je eine eigene Sprache, welche für die Entwicklung von Nativen Applikationen verwendet wird.
  * Java - Android
  * Swift - iOS
  * C# - Windows

Es ist heutzutage nicht wirklich rentabel, wenn man eine simple Applikation drei Mal schreiben muss, damit diese auf allen Geräten läuft.


Um diesen Aufwand zu verringern gibt es verschiedene Lösungsansätze.





### Native Entwicklung
Wenn es bei der Applikation um Performance geht (gerade im Enterprise Bereich) sollte man eine Applikation trotzdem mit nativem Code entwickeln und diesen anschliessend kompilieren. Diese Lösung ist die performanteste Lösung von allen, wenn man den Aufwand zur Erstellung der Applikation ignoriert.





### Hybride Applikationen - Xamarin
Die Entwicklung dreier Applikationen fällt dem Entwickler grundsätzlich einfacher, wenn er diese nicht in drei verschiedenen Sprachen entwickeln muss. Wenn die Sprache auf eine Einzige Sprache reduziert werden kann, ist dies sehr Vorteilhaft. Genau dies wird mit Xamarin erreicht. Xamarin ist ein Framework, welches in C# geschrieben ist. Man kann die Businesslogik einmal schreiben und diese für iOS, Windows und Android wiederverwenden. Lediglich müssen unterschiedlich implementiert werden, da diese von OS zu OS variieren.





### Hybride Applikationen - React Native/Ionic
React Native ist eine Weiterentwicklung von React. Ionic ist ein eigenständiges Framework. React Native und Ionic sind JavaScript Libraries/Frameworks, welche in einer WebView ausgeführt werden. Dies führt dazu, dass die Applikation ein wenig langsamer sind, als gewöhnliche, native Applikationen. Jedoch entwickelt man genau einmal die Applikation.





### Fazit
Wenn man eine Applikation entwickeln möchte, ist es wichtig darauf zu achten, für wen die Applikation ist. Wenn die Applikation möglichst schnell auf den Markt muss und nicht viel Animationen und Rechenleistung benötigt, dann kann man diese App in Ionic/React Native schreiben. Wenn jedoch ein Enterprise Kunde eine Applikation möchte ist nativer Code die wahrscheinlich beste Lösung.