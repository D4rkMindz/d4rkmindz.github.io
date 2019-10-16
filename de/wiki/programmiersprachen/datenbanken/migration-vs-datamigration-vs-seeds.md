# Migration vs. Data-Migration vs. Seeds

Die Migration von Datenbanken ist ein komplizierter Vorgang. Wenn man ein Feld in einer bestehenden Tabelle hinzufügt und dies nicht NULL enthalten darf, wird es Konflikte bei der Migration geben. Ebenfalls wird es schwierig, wenn man [Foreign Keys](/wiki/programmiersprachen/datenbanken/relational/key_concept/foreign_key) verwendet. Diese erfordern immer, dass ein Wert, welcher eingetragen wird, bei dem referenzierenden Tabellenfeld auch wirklich existiert.





## Migration
Eine Datenbankmigration ist die Anpassung des Datenbankschemas. Wenn ein Feld oder eine Tabelle hinzugefügt, respektive entfernt wird, geschieht dies in der Migration. Eine sehr gute Library für die Nutzung von Migrations in PHP ist [Phinx](https://phinx.org/). Hier beschreibe ich die Verwendung von Phinx, jedoch ist das Prinzip in praktisch jeder Library ähnlich.


In einer Migration gibt es eine ''up()''-Methode sowie eine ''down()''-Methode.


In der ''up()''-Methode wird festgehalten, was die Differenz zwischen dem alten und dem Neuen Schema ist. Es erfolgt eine Migration von dem vorherigen Stand auf den aktuellsten.


Die ''down()''-Methode wird verwendet um die Datenbank, welche mit ''up()'' migriert wurde wieder auf den alten Stand zu bringen. Sozusagen ein ''revert'' der Datenbank.





## Datenmigration
Eine Datenmigration ist dann wichtig, wenn man ein neues Feld hinzugefügt hat, welches einen Default-Wert hat (z.B. eine ID von einem User). Um dies zu migrieren muss man nach der Migration die neuen Daten in die Datenbank schreiben. Dazu kann man die ''change()''-Methode verwenden. In dieser Methode kann man dann die benötigten Daten sammeln und in die entsprechenden Felder einfügen.


Eine Datenmigration sorgt dafür, dass nach der Anpassung der Datenbank mit einer (Datenbank-)Migration die Werte immer noch korrekt sind.





## Seeds
Seeds ist das englische Wort für "Samen". Datenbank-Seeds sind die Samen, welche man am Anfang in eine Datenbank einfügt. Ein Beispiel dafür sind Benutzerrollen, welche zwar gespeichert werden sollen, jedoch niemals oder nur sehr selten geändert werden (nicht durch den Benutzer, sondern durch den Entwickler/die Applikation).


Auch können Daten für Tests oder Daten für die Entwicklung in Seeds gespeichert werden.


Allgemein nennt man dann jedoch Testdaten oder Daten für die Entwicklung "Fixtures".





[Diskussion zum Thema Seeds](https://groups.google.com/d/msg/rails-oceania/BmTqmoiiP-k/WFKncZ2wi_EJ)