## Angular SEO
Viele Applikationen sind heutzutage sogenannte Single Page Applications (SPA). Diese werden mit [Angular](https://angular.io/), [React JS](https://reactjs.org/) oder [[https://vuejs.org/]] umgesetzt. Da diese Applikationen primär in JavaScript geschrieben sind, ist es für Crawler von Suchmaschinen nicht möglich, diese anständig zu interpretieren.


In Angular gibt es verschiedene Dinge, welche man machen kann, um das SEO-Ranking zu verbessern.





### HTML5 Tags verwenden
In Angular ist es möglich, sogenannte [Components](https://angular.io/guide/component-interaction) zu erstellen. Für ein optimales Ranking verwendet man direkt in diesen Components die HTML5 Attribute für eine bessere Interpretationsmöglichkeit der Crawler.


[The HTML5 Semantic Elements and What They Mean For SEO](https://www.inboundnow.com/html5-semantic-elements-mean-seo/)





### Modularer Aufbau
Ein Aufbau in Feature Modulen ist sehr empfehlenswert. Diese Module müssen in sich geschlossen sein und dürfen nicht von anderen Modulen verwendet werden. Wenn jedoch die Verwendung eines Services in mehreren Modulen benötigt wird, kann man ein Shared Modul machen, welches geteilte Services, Pipes, Direktiven, etc. beinhaltet.


Dieser Modulare Aufbau ermöglicht das Kompilieren der Module in eigene Dateien, welche erst nachgeladen werden, wenn diese benötigt werden. Dies beschleunigt den Initial Load (das erste Laden der Seite).





### Meta Tags
Meta Tags sind Tags im <head>-Tag der Seite. Jedoch wird bei den SPAs nur der Body erneut gerendert, wenn sich der Zustand der Applikation ändert. Dies führt dazu, dass die Meta-Tags überall gleich sind (was sie jedoch nicht sein sollten). Für Angular gibt es eine bereits mitgelieferte Lösung für dieses Problem. Die [Meta](https://angular.io/api/platform-browser/Meta)-API kümmert sich um das Ändern der Meta-Tags pro Seite.





### Links
[Angular SEO Demo](https://github.com/Strulle/angular-seo-demo)


[Angular Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)





### Fazit
Angular ist ein mächtiges Tool wenn es um SEO geht. Auch bezüglich der Dateigrössen ist bei einem Modularen Aufbau nicht mehr viel zu Meckern übrig. Bei einem Prod-Build werden die Modul-Dateien auf bis zu 6 kB komprimiert und verbessert.


Ich selber bin ebenfalls ein Fan von Angular und kannte vor dem Lesen bereits einen grossen Teil der Verbesserungsmöglichkeiten. Jedoch die Meta-API war mir bis jetzt Fremd (habe es auch noch nie gebraucht).

