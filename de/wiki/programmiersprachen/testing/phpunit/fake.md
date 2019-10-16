## Fake
"Fakes are objects that have working implementations, but not same as production one. Usually they take some shortcut and have simplified version of production code."





//Fakes sind Objekte, welche funktionierende Implementationen haben, jedoch nicht die selben wie die (Objekte) produktiven. Normalerweise sind diese verkürzt und bestehen aus einer vereinfachte Version des produktiven Codes.



[Dev.to](https://dev.to/milipski/test-doubles---fakes-mocks-and-stubs)//






Fakes können Datenbanken durch In-Memory Datenbanken ersetzen. Dabei wird die Originale Datenbank nicht verändert, jedoch ist es möglich Daten zu speichern (bsp. für den Test eines Logins). Auch könnte man eine Payment-System mittels eines Fakes, welcher immer einen Erfolg zurückliefert, testen.


![No alt text available](/wiki/programmiersprachen/testing/phpunit/unit-testing-fake.png)


(DAO = Data Access Object)