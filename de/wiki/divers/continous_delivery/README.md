# Continous Integration, Deployment und Delivery
![No alt text available](/de/wiki/divers/development-integration-deployment.png)
### Continuous Delivery (CD)
Bei der Continous Delivery müssen alle neuen Updates manuell auf den Produktionsserver geladen werden.


Führt man den delivery befehl aus, so bekommt man ein fertiges zip file / einen fertigen Ordner welchen man nur noch manuell auf den Server laden und je nach dem entpacken muss.





### Continuous Deployment (CD)
Bei dem Continuous Deployment werden alle Updates automatisch auf den Produktionsserver geladen.


Führt man den deployment befehl aus, so wird ein fertiges zip file / fertiger Ordner erstellt, automatisch auf den Server gelasen und entpackt.





### Continuous Integration (CI)
Continuous Integration zeichnet sich dadurch aus, dass die Software bei jedem deploy durch automatische scripts getested wird. Den [Programmierstil](/de/wiki/programmiersprachen/programmiertipps#lesbarkeit) kann man beispielsweise mit [StyleCI](https://styleci.io/) überprüfen lassen. Die Fehleranfälligkeit und Struktur des Codes lässt sich mit [ScrutinizerCI](https://scrutinizer-ci.com/) überprüfen. Diese beiden CIs lassen jeweils automatisch nach jedem Push auf [GitHub](https://www.github.com/) den Code durch einen Test laufen und melden anschliessend Fehler.


Neben diesen beiden CIs gibt es auch noch [TravisCI](https://travis-ci.org/) und [Jenkins](https://jenkins.io/)


![No alt text available](/de/wiki/divers/style-ci.png)![No alt text available](/de/wiki/divers/scrudinizer-ci.png)![No alt text available](/de/wiki/divers/travis-ci.png)![No alt text available](/de/wiki/divers/jenkins-ci.png)
