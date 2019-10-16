## HATEOAS
Hypermedia As The Engine Of Application State steht dafür, dass ein Benutzer mehreren Hyperlinks folgen kann und er den Zustand der Webseite versteht, auch wenn diese extreme Veränderungen durchgeht. Code kann zwar Hyperlinks folgen, er kann jedoch keine Entscheidungen treffen, wenn Veränderungen in der [API](/de/wiki/divers/api) eintreten.


Das Ziel von HATEOAS ist, dass der Client automatisch durch die API "durchklickt" zu der Resource wo von dem Benutzer (Entwickler) benötigt wird. Das "Durchklicken" ist deshalb theoretisch möglich, da die API zu jedem bereits Angesteuerten Endpunkt die Aktionen (welche durch links zu den Endpoints ausgeführt werden können) mitliefert. Jedoch müsste damit dieses Prinzip funktioniert auf dem Client eine KI (Künstliche Intelligenz) implementiert sein, welche weiss, wohin sie navigieren muss und wie sie mit den zurückbekommenen Antworten umgehen muss. Ausserdem würde eine solche API eine unmenge an Requests auslösen, welche eventuell zu einer Überlastung des Servers führen könnte.





### HATEOAS und REST
HATEOAS ist ein Bestandteil einer [REST API](/de/wiki/divers/api/rest). Jedoch gibt es vier verschiedene Stufen in einer REST API. Die letzte ist dann HATEOAS. Diese vier Stufen sind im [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html) festgehalten.


![No alt text available](/de/wiki/divers/api/rest/richardson-maturity-model.jpg)



##### Level 0
Bei diesem Level geht der Benutzer immer über die gleiche [URI](/de/wiki/url) und verwendet die gleiche [HTTP-Methode](/de/wiki/divers/http-request) (SOAP-> POST, normalerweise GET).
##### Level 1
In diesem Level bedient sich der Benutzer mehrerer Resourcen (Endpunkte/URIs), verwendet jedoch immernoch die gleiche HTTP-Methode (oder evtl. auch die falsche; POST-> zum löschen eines Eintrages).
##### Level 2
Auf Level 2 werden verschieden Resourcen mit verschiedenen HTTP-Methoden angesteuert (Daten eines Benutzers holen;GET -> user/{id}, Daten eines Benutzers aktualisieren: PUT -> user/{id}, alle Daten aller Benutzer holen; GET -> users/)
##### Level 3
HATEOAS
