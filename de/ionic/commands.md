## Run Commands
In der IDE kann man mehrere Commands definieren. Der Debug-Run-Command ist im Artikel [WebStorm Debugging](/de/ionic/webstorm-debugging) vermerkt.


Es empfiehlt sich neben dem debug command noch folgende commands hinzuzufügen.


Bevor die Android Commands funktionieren, muss man noch folgenden Befehl ausführen:


```
ionic cordova platform add android
```
### Phonegap/Cordova
##### Serve Browser LiveReload
Command: "serve"


Platform: "browser"


Extra arguments: "-l"



##### Run Android LiveReload
Command: "run"


Platform: "anroid"


Extra arguments: "-l"



##### Emulate Android LiveReload
**


Command: "emulate"


Platform: "anroid"


Extra arguments: "-l"

