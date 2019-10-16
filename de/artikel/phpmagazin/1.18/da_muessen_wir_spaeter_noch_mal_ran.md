## Da müssen wir später noch mal ran ...
Legacy-Code ist Code, den man schnell unter viel Druck geschrieben hat und sich vorgenommen hat, diesen irgendeinmal zu verbessern. Jedoch lässt sich irgendeinmal und irgendwann mit nie gleichstellen. Um sauberen, einfachen Code zu schreiben kann man sich folgende Fragen stellen:


  * Habe ich das Ziel erreicht?
  * Was genau war dafür notwendig?
  * Was kann ich verbessern?
  * Was kann ich eleganter machen?
  * Wo sind potenzielle Bugs?
  * Was müsste ich in einem Unit-Test mit einem Mock-Objekt abdecken?
  * Was wirft meine Methode für Exceptions?
  * Versteht der Lehrling, was der Code macht?
Wenn man diese Fragen einfach beantworten kann, hat man sehr wahrscheinlich schönen Code und eine saubere Projektstruktur.


Auch das Management trägt viel beim Entwicklungsprozess bei. All zu oft kommt der Kunde und verlangt noch dieses und jenes Feature, obwohl die Basis noch nicht einmal fertig ist. Hier liegt es am Management um dem Kunden klar zu machen, dass man ein Feature nur zu einem noch nicht begonnen Sprint hinzufügen sollte. So kann sich ein Entwickler auf das aktuell wichtig konzentrieren, ohne an alles andere denken zu müssen. Eine grosse Fehlerquelle wird somit reduziert.


#### Das Setup machts
Viele Entwickler arbeiten selbst heute noch mit ''var_dump($x); exit;''. Mit [XDebug](/de/installationen/xdebug) kann man sehr viel erreichen. Zum Beispiel kann man den Wert von Variablen während der Laufzeit manipulieren. So erspart man sich das mühsame erneute starten eines Prozesses.


#### Teamwork
Um guten Code zu schreiben braucht es mehr als nur eine Person. Man sollte am besten sehr oft [Pair Programming](https://de.wikipedia.org/wiki/Paarprogrammierung) praktiziern.


Auch sollte man, anders als viele andere Webentwickler, auf das lästern über jenen Entwickler mit dem schlechten Code verzichten. Dies schafft ein schlechtes Arbeitsklima. Auch ist Lästern ein Indiz dafür, dass man selbst wahrscheinlich nicht besser ist als der andere Entwickler.


### Fazit
Code Qualität leidet heutzutage sehr unter dem Druck, welchem die Entwickler ausgesetzt sind. Jedoch sollte man immer vermeiden Legacy-Code zu erschaffen. Denn sehr wahrscheinlich wird man nicht selbst den Legacy-Code aufräumen...
