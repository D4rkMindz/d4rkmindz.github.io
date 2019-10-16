## iOS testing
Um die Applikation auf einem iOS Gerät testen zu können, muss man auf dem Gerät die App "Ionic View" installieren. Ein direktes ausliefern der Software wie bei [Android](/ionic/android) geht nicht (bc fy). Deshalb muss man in der Kommandozeile folgenden Befehl eingeben:


```
ionic link
```
Dort muss man sich mit dem in der [Ionic Cloud](https://apps.ionic.io/login) erstellten Account anmelden. Danach wird man automatisch in dem Browser angemeldet. Daraufhin muss man ein Projekt erstellen.


Zurück in der IDE muss man den Befehl erneut ausführen und anschliessen das neu erstellte Projekt mit den Pfeiltasten auswählen. Das Projekt ist nun verlinkt


Um das Projekt nun hochzuladen muss man 


```
ionic upload
```
ausführen. Danach kann man in der "Ionic View" App die Startseite aktualisieren und das Projekt wird dort nun angezeigt. Mittels anklicken kann man nun die Applikation auf dem Handy testen. Dies ist vorallem für die Nativen Funktionen wichtig.