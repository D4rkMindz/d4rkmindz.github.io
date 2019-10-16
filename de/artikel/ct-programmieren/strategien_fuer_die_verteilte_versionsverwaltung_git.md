## Strategien für die verteilte Versionsverwaltung Git
Git ist im Vergleich zu Subversion (SVN) eine offlinefähige Versionsverwaltung, was gewissen Vorteil bringt. Man muss zum Beispiel nicht immer mit einem Server verbunden sein. Jedoch muss man auch gewisse Strategien haben, wenn mehrere Personen an mehreren Zweigen (Branches) arbeiten. Insgesamt gibt es vier relativ gute Strategien.


Ein ausführlicher [Artikel zum Thema](http://nvie.com/posts/a-successful-git-branching-model/)



### Zentrales Repository=
Das Bare Repository (zentrales Repo) wird in diesem Fall als Sammelpunkt für alle kleinen Repositories genutzt. Die kleinen Repositories werden wiederum von den einzelnen Teams oder je nach dem Personen genutzt. Zusätzlich arbeitet jeder wie gehabt in einem lokalen Repository und pusht keine halbfertige Lösungen in das eigene Repo. Der Nachteil liegt darin, dass man in grossen Teams vielleicht sich in die quere kommt. Auch die Chance auf instabilen Code im Repo zu haben ist höher, da man eher ein Hardware- oder Netzwerkversagen haben kann.


![No alt text available](/artikel/ct-programmieren/bare_repo.png)
### Feature-Branches
![No alt text available](/artikel/ct-programmieren/git-feature-branch.png)
Bei dieser Strategie gibt es ein einziges Repository. Jedoch gibt es verschiedenen Branches, an denen die Entwickler arbeiten. Die Branches können bsp. feature/- oder fix/tickernr-ticket-description heissen. Da ein Ticket meistens nur einer Person zugewiesen ist, kann man auch sehr einfach Kontakt mit dem aktuellen Entwickler aufnehmen. Ebenfalls lässt sich ein allfälliger Code-Review mittels der von [Github](https://www.github.com) zur Verfügung gestellten Pull Requests durchführen.


Wenn ein Ticket (und somit der Branch) fertig ist, kann man diesen in den Masterbranch mergen. Somit hat man immer eine stabile Version der Software im Masterbranch und kann jederzeit liefern. Manche Firmen verlangen teils sogar, dass man vor dem Merge alle Commits eines Branches zusammenfasst, damit man, falls man ein Feature entfernen möchte, nur einen Commit löschen muss. Diese Methode nennt sich Squashing von Commits.


Ein weiterere Vorteil ist, dass ein Feature, falls es doch nicht implementiert werden sollte, einfach entfernt werden kann, indem man den Branch löscht.














### Git Flow
![No alt text available](/artikel/ct-programmieren/git-flow.png)
Der Git Flow ist praktisch ähnlich wie die Feature Branch strategie. Jedoch wird nicht für jedes feature ein neuer Branch angelegt. Man hat dagegen einen Master Branch, in welchem wieder die Stabile und releaste Version der Software ist. Im Release Branch ist die Version, welche releast wird. Der Entwicklungsbranch dev ist der Hauptbranch für die Entwicklung. Features werden im dev Branch gemergt. Wenn ein grober Fehler gefunden wird, welcher Zeitnah gefixt werden muss, erledigt man dies in dem Hotfix branch. Sobald die Version wieder Stabil ist, wird dieser zurück in den Master gemergt.






### Eigenständige Forks
![No alt text available](/artikel/ct-programmieren/git-fork.png)
Es kann manchmal vorkommen (vorallem im OpenSource Bereich), dass man einen Masterbranch hat, welchen man nicht allen Entwicklern mit Schreibezugriff zur Verfügung stellen möchte. Bei dieser Strategie macht ein Entwickler einen Fork des Masterbranches und bearbeitet ihn so, wie er sich eine Lösung vorstellt. Danach kann er einen Pull Request machen und ein Hauptverantwortlicher Maintainer kann den Pull Request annehmen oder ablehnen.





### Fazit
Jede dieser Strategien ist sehr gut. Man kann die Strategie an das Projekt anpassen. Die sinnvollste Strategie für Firmenprojekte finde ich jedoch die Git Flow Strategie.