# Datentypen
JavaScript ist eine schwach typisierte Sprache mit sechs primitiven Datentypen.


Boolean


Null


Undefined


Number


String


Symbol (ab ECMAScript 6)


Weiterhin unterstützt JavaScript Objekte und Arrays.





Dokumentiert werden diese Datentypen wie folgt:


| Datentyp  |
| --------- | JSDocBlock       | Beispiel                           |
| ---------------------------------- |
| Boolean   | {boolean}        | * @param {boolean} isEmailValid    |
| Null      | {null}           | * @param {null} isNothing          |
| Undefined | {undefined}      | * @param {undefined} notDefinedYet |
| Number    | {number}         | * @param {number} zipcode          |
| String    | {string}         | * @param {string} firstname        |
| Function  | {Function} func  | * @param {Function}  func          |
| Object    | {Object} obj     | * @param {Object} obj              |
| Array     | {Array.<number>} | * @param {Array.15}                |
| Callback  |                  | * @callback {myCallback}           |
Quelle: [jsdoc.org](http://usejsdoc.org/tags-type.html)



### Boolean
Ein boolean ist in jedam fall true oder false und wird für logische Operationen verwendet.


### Null
Der Datentyp "null" hat, wie es der Name schon sagt, immer den Wert null.


### Undefined
Wurde einer Variable noch kein Wert zugewiesen, so ist sie undefined.


### Number
In Javascript gibt es, anderst als beispiellsweise in PhP (Integer), keinen spezifischen Datentyp für Ganzzahlen. Das heisst, der Number Datentyp kann sowohl ganzzahlen als auch fliesskommazahlen speichern. Weiterhin kann der Wert von einer Number Variable +Infinity, -Infinity oder NaN sein.


+Infinity: Die Zahl ist grösser als der grösste erlaubte Wert (+2^63-1)


-Infinity: Die Zahl ist kleiner als der kleinste erlaubte Wert (-(2^63))


NaN: Not-a-Number, Der Datentyp ist keine Zahl.


Den Wert -Infinity kann man beispielsweise erreichen, indem man durch -0 Dividiert. Dividiert man durch +0, so erhält man +Infinity.


### String
Ein String hat in JS 16-bit. Jedes Zeichen, welches in einem String steht, ist ein "Element", welches eine Stelle im String einnimmt. Somit hat das erste Zeichen den Index 0, es steht also an erster stelle. Es wird nicht empfohlen und gilt als bad practice (schlechte Praxis), komplexe gebilde als strings zu speichern und zu verwalten. Strings sind nur für Texte und Wörter gedacht.


### Symbol
Ein Symbol ist ein eindeutiger und unveränderbarer Wert. Dieser Datentyp wurde mit ECMAScript 6 eingeführt (ECMAScript ist der standartisierte Sprachkern von JavaScript).


### Objekt
Objekte sind mit Arrays zu vergleichen, aber nicht zu verwächseln. Objekte sind meist mit einem identifier referenzierte Werte. Objekte sind in JavaScript also eigentlich Sammlungen von Eigenschaften (Properites), wessen Wert von jedem belibigen Datentyp sein kann. Auf einen Wert zugreifen kann man über dessen Key, welcher in jedem Fall Strings oder Symbole sind.


### Array
Ein Array ist eine Ansammlung von Key => Value Paaren. Wird kein Key angegeben, so wird dieser automatisch nummerisch erstellt. Das erste Element in einem Array hat den Key 0. Liest man die Eigenschaft "lenght" (länge) aus, bekommt man die Anzahl Elemente im Array.


### Keyed Collections: Maps, Sets, WeakMaps, WeakSets
Während Map und WeakMap einen Wert mit einem Objekt assoziieren (sich an- oder zusammenschließen), repräsentieren Set und WeakSet mehrere Objekte.


### JSON
JavaScript Object Notation ([JSON](/de/wiki/programmiersprachen/javascript/json)), wird zur leichtgewichtigen Datenübertragung verwendet. Mit JSON können universelle Datenstrukturen aufgebaut und verschickt werden, um beispielsweise mit einem Server zu kommunizieren (Wird häuffig zusammen mit Ajax (Asynchronous JavaScript and XML) verwendet).


### typeof
Mit hilfe vom typeof() Operator kann man eine Variable auf Ihren Datentyp testen.
