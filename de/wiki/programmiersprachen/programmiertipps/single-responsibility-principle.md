## Single Responsibility Prinzip
Das Single Responsibility Prinzip in der objektorientierten Programmierung sagt das SRP aus, dass jede Klasse nur eine fest definierte Aufgabe zu erfüllen hat. In einer Klasse sollten lediglich Funktionen vorhanden sein, die direkt zur Erfüllung dieser Aufgabe beitragen.



   “There should never be more than one reason for a class to change.”
   
   – Robert C. Martin: SRP: The Single Responsibility Principle

#### Verstoss
```
public sealed class PersonRepository : IPersonRepository
{
    private static ILogger Log = ...;

    public Person GetByName(string name)
    {
        try
        {
            return ...;
        }
        catch(Exception ex)
        {
            Log.Error(ex, $"Could not get Person named {name}");
            throw;
        }
    }
}
```
**de.wikipedia.org/wiki/Single-Responsibility-Prinzip|Wikipedia]])//


Viele Personen denken, dass logging auch in die Geschäftslogik gehört. Diese Annahme ist falsch. Das Logging zerstört in diesem Fall das SRP der Funktion "GetByName()".


Um diesem Problem entgegen zu wirken gibt es die Decorator Methode.





#### Decorator Methode
```
public sealed class PersonRepository : IPersonRepository
{
    private static ILogger Log = ...;
    public Person GetByName(string name)
    {
        try
        {
            // Aufruf zur SRP Methode
            return GetByNameWithoutLogging(name);
        }
        catch(Exception ex)
        {
            Log.Error(ex, $"Could not get Person named {name}");
            throw;
        }
    }
  
    // Eigentliche Methode nach SRP
    private Person GetByNameWithoutLogging(string name)
    {
       return ...;
    }
}
```
**de.wikipedia.org/wiki/Single-Responsibility-Prinzip|Wikipedia]])//


Die Decorator Methode ist nach SRP akzeptabel, da sie die Geschäftslogik vom Logging trennt. Jedoch ist dies schwieriger zum Testen. Ausserdem besteht die Gefahr, dass man viele Klassen mit wenigen Methoden hat. Abhilfe schaffen hier Namespaces.