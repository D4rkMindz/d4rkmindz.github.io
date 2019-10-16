## Konkurrenz zu REST
[GraphQL](http://graphql.org/learn/) ist nicht wie viele denken eine Anfragesprache für eine Datenbank. Ebenso wenig handelt es sich um ein [ORM](/de/wiki/programmiersprachen/programmiertipps/orm). Es handelt sich vielmehr um eine neue Möglichkeit Webservice-APIs zu realisieren. Somit steht GraphQL in direkter Konkurrenz zu [REST](/de/wiki/divers/api/rest).


Bei REST ist jedoch das Problem, dass man teilweise mehrere Datensätze gleichzeitig abrufen muss. Dies führt zu unnötigen Zusatzdaten und enormen Netzwerktraffic sowie einer hohen Serverauslastung.


Um unnötige Felder zu vermeiden hat man angefangen, die gewünschten Felder via Parameter zu definieren. Jedoch für dies, vor allem bei komplexen Datenmodellen, zu sehr vielen Parametern und "Switches", welche dann wieder die Fehlerquellen erhöhen und die Testbarkeit erschweren.


Das Modell der Verwendung von Parametern für die Ausgabe von Datenfeldern ist dem Modell von GraphQL sehr ähnlich.


### GraphQL Typen
Die verschiedenen Formen von Daten (Repräsentationen) werden durch Typsysteme beschrieben. GraphQL definiert hier ein Schema, welches die Form jeglicher Daten und sämtlicher, erlaubter Operationen beinhaltet.


GraphQL erkennt Objekte und Skalare Datentypen. Skalare Werte sind Int, Float, String, Boolean und ID. Eine ID wird zum Schluss zu einem String serialisiert, jedoch wird der Typ als nicht Menschenlesbar definiert.


Werte lassen sich wie folgt definieren:


```
// Nur Werte AUTHOR, ADMIN, GUEST zugelassen
enum Role {
  AUTHOR,
  ADMIN,
  GUEST
}

// Definition eines Objektes
type User {
  id: ID, // type ID
  displayName: String, // type String
}

meinWert: String // darf null sein
meinWert2: String! // darf nicht null sein

meinFeld: [String] // Liste (Array) von Strings
meinFeld2: [User] // Liste (Array) des Objekttypes 'User'

meinFeld3: [User!] // Nullable Liste (Array) des Objekttypes 'User'. 'User' ist nicht nullable
meinFeld4: [User]! // Nicht nullable Liste (Array) des nullablen Objekttypes 'User'
meinFeld5: [User!]! // Die Liste (Array) des Objekttypes 'User' -  Beide nicht nullable
```
Das GraphQL-Schema besteht bis heute aus drei Wurzelobjekten von Query-Operationen.


##### Query
Dies ist das Wurzel-Objekt von Query Operationen. Somit definiert das Query-Objekt für das Anfrage-Wurzelobjekt.


##### Mutation
Die Mutation-Operation ist für die Bearbeitung von Daten zuständig. Wenn man Daten verändern möchte, muss man dies über die Mutation Operation machen.


##### Subscription
Eine Subscription-Operation benachrichtigt den Benutzer (Push-Benachrichtigun) bei einem Event.


```
schema {
  query: Query,
  mutation: Mutation,
  subscription: Subscription,
}

type User {
  id: ID!,
  displayName: String,
  roles: [String!]!,
  deputy: User,
}

type Query {
  users: [User!]!,
}

type Mutation {
  createUser(user: User) : User,
}

...
```
### Abfragen
Eine Abfrage kann man mit diversen Parametern beschränken. Folgende Anfragen kann man beispielsweise auf das vorher erstellte Schema machen.


```
# Benutzer mit der ID hans abfragen
{
  user(id: "hans") {
    id
    displayName
  }
}
# Admin Benutzer abfragenn
{
  users(role: "admin") {
    id
    displayName
  }
}
# Maximal fünf Benutzer, beginne bei dem 10ten Benutzer
{
  users(limit: 5, start: 10) {
    id
    displayName
  }
}
```
### Mutationen
Im Gegensatz zu Queryoperationen sind Muationsoperationen nicht auf das Lesen von Daten beschränkt. Wenn man einen Vergleich zu REST ziehen würde, dann würde die Queryoperation einem [GET](/de/wiki/divers/http-request#get-request) und die Mutationsoperation einem [POST](/de/wiki/divers/http-request#post-request)/[PUT](/de/wiki/divers/http-request#put-request) oder sogar [DELETE](/de/wiki/divers/http-request#delete-request) entsprechen. Da sich die Syntax bei der Anfrage auf eine Mutation klar von einer Queryoperation unterscheidet weiss der Server die entsprechende Operation zuzuweisen.


Trotz der hohen Ähnlichkeit der Syntax zu Methodensignaturen ist diese jedoch keineswegs eine. Das GraphQL-Typensystem behandelt eine Mutation als Feld mit Feldparametern.



### Subscriptions
Eine Subscription ist ein Stream, über welchen der Server Push-Benachrichtigungen übermittelt. Diese Verwendung ist in GraphQL noch sehr neu.


Ein Beispiel für eine Subscription:


```
subscription ChatMessages {
  newMessage(roomId: 123)
  {
    sender
    text
  }
}
```
Eine Antwort des Servers im Subscription Stream sähe dann wie folgt aus:


```json
{
  "data": {
    "newMessage": {
      "sender": "Paul",
      "message": "Hallo!"
    }
  }
}
```
### Implementierung in NodeJS
In NodeJS ist GraphQL.JS als ''graphql'' verfügbar. Das erste Objekt ist GraphQL, das zweite ist ein Objekt zur Bildung von GraphQL Schemas. Mit dem aufrufen der ''buildSchema''-Methode weiss der Server exakt, welche Felder und Typen es geben kann. Damit ist die Validierung der Anfragen erstellt.


Wenn man Funktionen für jedes Wurzelobjekt vom Typ Query erstellen möchte braucht man dazu das ''resolveRoot''-Objekt. 
```
var {graphql, buildSchema} = require('graphql');

var schema = buildSchema('
type Query {
  hello: String
}
');

var resolveRoot = {
  hello: () => 'Hello World',
};

var query = '{hello}';

let response = await graphql(schema, query, resolveRoot);
console.log(response); // => {data: {hello: 'Hello World'}}
```
### Implementierung in C#
Für .NET wurde ebenfalls eine Library entwickelt. Diese heisst [GraphQL for .NET](https://github.com/graphql-dotnet/graphql-dotnet). Hier ein kleines Beispiel für die Ausgabe von Hello World mit einem Query auf "hello"

 
```csharp
var schema = Schema.For(@"
  type Query {
    hello: String
  }
");

var root = new { Hello = "Hello World!" };
var result = schema.Execute(_ =>
{
  _.Query = "{ hello }";
  _.Root = root;
});

Console.WriteLine(result);
```
### Fazit
GraphQL ist durchaus eine Alternative zu REST. Jedoch habe ich dies noch nicht ausprobiert. Nach diesem Artikel jedoch denke ich, dass ich es sicher irgendeinmal gerne ausprobieren möchte.
