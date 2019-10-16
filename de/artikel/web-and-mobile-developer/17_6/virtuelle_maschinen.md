## Virtuelle Maschinen
Als Entwickler geht man früher oder später auf das Thema Virtuelle Maschinen (VM) ein. Ein Beispiel für die Verwendung von VMs ist die Separation eines Prozesses, welcher nicht auf dem "gleichen Rechner" laufen soll wie die Applikation. 





Bei der Verwendung von VMs entsteht jedoch ein grosses Problem: Der Arbeitsspeicher wird von zwei Rechnern gleichzeitig gebraucht. Das führt dazu dass die Prozesse langsamer abgearbeitet werden können. Genau wegen diesem Problem ist [Docker](https://www.docker.com/) entwickelt worden.





#### Container=
Docker regelt die Ausführung von sogenannten Containern. Diese Container sind kompilierte Images. Die Images sind grundsätzlich zustandslos. Dies gilt auch für die Zeit während der Arbeit der darauf basierenden Containern. 





### Erste Verwendung
Docker wird unter Linux mittels folgenden Befehls ausgeführt:


```
$ docker run docker/whalesay cowsay HelloWorld!
```
Das gute an Docker ist, wenn ein Image nicht vorhanden ist, wird auf das eingebene Repository zu gegriffen und das aufgerufene Image heruntergeladen. 


Ein Beispiel, wie der Code dazu aufgebaut ist sieht man auf GitHub unter [docker/whalesay](https://github.com/docker/whalesay).





### Erstes Dockerfile
Man kann in einem Dockerfile den Grundcode definieren. Dieser ähnlich strukturiert wie [Assembly](/de/wiki/programmiersprachen/assembly).


```
FROM docker/whalesay:latest
CMD cowsay "Hello World"
```
Dieser Code ruft docker/whalesay in der aktuellsten Version auf und fürhrt den Befehl cowsay "Hello World" aus.





Wenn man eine Verbindung ins Internet herstellen möchte, kann man die bereits halb-fertige Dockerkomponente [Httpd](https://hub.docker.com/_/httpd) verwenden. Diese Komponente kann Ports des Rechners auf Ports der VM mappen. Folgender Befehl mappt zuerst Port 8888 des Rechners auf Port 80 ([HTTP](/de/wiki/divers/protokolle/http)) der VM. Der Parameter ** sagt Docker, dass er in einer VM läuft.


```
$ docker run -p 8888:80 <imageName>
```
Ein Cheatsheet zu [Docker commands](http://tips.tutorialhorizon.com/2016/07/01/docker-cheatsheet/).


Wenn man jedoch nicht jedesmal diesen Befehl ausführen möchte, kann man das Mapping auch im Dockerfile machen.
```
FROM httpd
COPY ./public_files/ /user/local/apache2/htdocs/
EXPOSE 80
```
Der Befehl EXPOSE sagt Docker, dass Port 80 nach aussen gebracht werden soll.





### Fazit
In dem vor kurzer Zeit besuchten Überbetrieblichen Kurs kam das Thema Docker kurz zur Ansprache. Dank dieses Artikels weiss ich jetzt einiges mehr über die Einsatzweise und Verwendung von Docker.
