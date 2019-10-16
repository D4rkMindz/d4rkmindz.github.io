## Strukturiertes DevOps
# DevOps
DevOps ist eine Mischung aus dem Wort DEVelopment und IT OPerationS. Durch DevOps wird eine effiziente Arbeitsweise mit modernen Werkzeugen ermöglicht.


Die Entwicklung einer Applikation unter DevOps wird in mehrere, kleine Zwischenschritte unterteilt. 


Wenn die Applikation eine Benutzerverwaltung beinhaltet, wird die Entwicklung einer Benutzerverwaltung (ganzer "Task") eine Story genannt. Dieser Task wird in mehrere Teile wie folgt unterteilt:


  * Benutzer erstellen
  * Rechte zuweisen
  * Benutzer bearbeiten
  * Benutzer löschen
  * etc



Jeder dieser kleinen Tasks kann dann in einem Ticketsystem wie [Jira](https://de.atlassian.com/software/jira) oder das Projekt-Tool von [GitHub](https://github.com/features) erstellt und verwaltet werden.


Auch sollte man bei Projekten das [Clean Code Principle (CCP)](http://clean-code-developer.de/weitere-infos/solid/) beachten.


Der architektonische Aufbau der Applikation sollte nach dem MVC Pattern geschehen. Nach dem Aufbau dieses Patterns kann man dann mit der Bearbeitung der ersten Tasks beginnen.


Das Deployment und Testing der Applikation kann dann automatisiert mittels [Jenkins](https://jenkins-ci.org) gemacht werden.





## Fazit
Mit DevOps erreicht man sehr einfach sein Ziel. Ausserdem hat man kleine Erfolgserlebnisse zwischendurch, da man nicht ein riesiges Ticket, sondern mehrere kleine Tickets abarbeitet.