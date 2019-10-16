## Testarten
Es gibt verschiedene Testarten. 
### Unit test
Ein Unit test spezifiziert und testet genau einen Auftrag einer Methode einer Klasse. Dabei ist sollte man in einem engen und gut definierten Umfang bleiben. Komplexe Dependencies und Interaktionen ausserhalb des Scopes sind [stubbed oder mocked](https://martinfowler.com/articles/mocksArentStubs.html).





### Integration test
Testet die korrekte interaktion zwischen mehreren sub-systemen. Es gibt ein komplettes Spektrum, vom testen der Integration zwischen zwei Klassen bis hin zum testen der Integration in der Produktiven Umgebung.





### Smoke test (sanity check)
Ein einfacher Integrationstest, welcher nur überprüft, ob das zu testende System Abrufbar ist und sich normal verhält. Der Smoke-Test kommt davon, dass wenn man zu ersten Mal Strom durch einen Kreislauf lässt und es raucht, dann ist es nicht gut. Alternativ kann es auch sein, dass der Name davon kommt, dass man früher Rauch durch Wasserrohre gelassen hat um zu testen ob diese dicht sind.





### Regression test
Dieser Test wird geschrieben, wenn ein Bug gefixt wurde. Es wird genau für diesen Bug ein Test geschrieben, dass dieserr Bug nicht mehr auftauchen und alles zerstören kann.  Der volle Name ist eigentlich "Non-Regression-Test". Ein Regressiontest kann ebenfalls geschrieben werden, wenn grundlegende Änderungen am Projekt vorgenommen werden, jedoch der Output gleich bleiben soll.





### Acceptance test
Testet, ob ein Feature oder ein Fall korrekt implementiert wurde. Dieser Test ist ähnlich wie ein Integration test, jedoch liegt der Fokus auf dem Anwendungsfall als auf den beteiligten Komponenten.





### System test
Testet das System als Black Box. Abhängingkeiten von anderen Systemen sind oft [stubbed oder mocked](https://martinfowler.com/articles/mocksArentStubs.html) während dem Test (sonst wäre es ein Integrationstest).





### Pre-flight test
Tests, welche wiederholt in Produktions ähnlichem Umfeld durchgeführt werden. Dadurch wird das 'builds on my machine'-Syndrom gelindert. Dieser Test wird oft durch einen Acceptance- oder Smoke Test in einer produktiven Umgebung durchgeführt.





