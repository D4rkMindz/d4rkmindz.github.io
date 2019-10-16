## Deployment
Wenn man eine Applikation entwickelt, muss man diese früher oder später auf einen Server deployen. Da man jedoch meistens eine Kunden hat, welcher selber zuerst die Applikation testen will und man selten alleine entwickelt, gibt es eine Deploymentmethode für Server. Das ganze nennt sich **Continuous Delivery**. Die Server für Continuous Delivery sind wie folgt aufgebaut


|Umgebung            |Zweck                                       |Kürzel |
|localhost/example/  |Entwicklung                                 |DEV    |
|test.example.com/   |Interne Tests und Qualitätssicherung        |TEST   |
|staging.example.com/|Testen durch Kunde, Spiegel des PROD-Servers|STAGING|
|www.example.com/    |Produktivserver                             |PROD   |



Bei manchen Aufträgen kann es sein, dass aus finanziellen Gründen auf entweder STAGING oder TEST verzichtet wird. Es ist auch möglich dass weder STAGING noch TEST verwendet wird. Es gibt jedoch immer eine lokale Entwicklungsumgebung (DEV) und einen Produktivserver (PROD).


Zusätzlich dazu gibt es noch eine Integrationsumgebung (normalerweise [Jenkins](https://de.wikipedia.org/wiki/Jenkins_(Software))).