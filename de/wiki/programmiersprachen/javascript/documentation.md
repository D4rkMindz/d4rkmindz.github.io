## JSDoc (Code Dokumentation)
JSDoc ist eine MarkUp Sprache, welche gebraucht wird um JavaScript Quellcode zu dokumentieren. 
Der Gebrauch von JSDoc kann einem Programmierer helfen, das implementierte Interface und den Code, 
welcher er geschrieben hat, zu beschreiben. Es gibt diverse Tools, welche aus diesen JSDocs verständliche Formate wie 
[HTML](/wiki/programmiersprachen/html) oder [Rich Text Format](https://de.wikipedia.org/wiki/Rich_Text_Format)
generieren.





### Geschichte
Das erste Vorkommen von Javadoc ähnlicher Syntax in einem JavaScript Dokument war im Jahr 1999 im Netscape/Mozilla Projekt namens Rhino. 
Rhino war ein JavaScript Echtzeit System, welches in Java geschrieben war.





Die Syntax und Regeln von JSDoc sind ähnlich wie die von JavaDoc. JavaDoc wird gebraucht um den Java Code zu dokumentieren.
JSDoc von JavaDoc unterscheiden sich jedoch ein bisschen, da JavaScript auch dynamisches Verhalten regeln muss.





### JSDoc Tags=
| **Tag** | **Beschreibung** |
| @author | Der Name des Entwicklers |
| @constructor | Markiert einen Funktion als Konstruktor |
| @deprecated | Markiert eine Funktion als veraltet |
| @exception | ein Synonym für @throws |
| @exports | Identifiziert eine Methode als exportiert durch das Modul |
| [@param](http://usejsdoc.org/tags-param.html) | Dokumentiert die Parameter der Methode. Optional können die {Datentypen} in geschweiften Klammern ergänzt werden |
| @private | Signalisiert, dass eine Funktion privat ist |
| [@return](http://usejsdoc.org/tags-returns.html) | Dokumentiert den Rückgabewert der Methode |
| [@returns](http://usejsdoc.org/tags-returns.html) | Synonym für @return |
| @see | Dokumentiert ein Zusammenhang/Abhängigkeit zu einem anderen Objekt |
| @this | Beschreibt den Typ, auf welcher "this" in einem Objekt zeigt |
| @throws | Dokumentiert die Exception, welche durch die Methode geworfen werden kann |
| @version | Liefert die Versionsnummer einer Library |



### Beispiel
```javascript
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @this {Circle}
 * @param {number} r The desired radius of the circle.
 */
function Circle(r) {
    /** @private */ this.radius = r;
    /** @private */ this.circumference = 2 * Math.PI * r;
}

/**
 * Creates a new Circle from a diameter.
 *
 * @param {number} d The desired diameter of the circle.
 * @return {Circle} The new Circle object.
 */
Circle.fromDiameter = function (d) {
    return new Circle(d / 2);
};

/**
 * Calculates the circumference of the Circle.
 *
 * @deprecated
 * @this {Circle}
 * @return {number} The circumference of the circle.
 */
Circle.prototype.calculateCircumference = function () {
    return 2 * Math.PI * this.radius;
};

/**
 * Returns the pre-computed circumference of the Circle.
 *
 * @this {Circle}
 * @return {number} The circumference of the circle.
 */
Circle.prototype.getCircumference = function () {
    return this.circumference;
};

/**
 * Find a String representation of the Circle.
 *
 * @override
 * @this {Circle}
 * @return {string} Human-readable representation of this Circle.
 */
Circle.prototype.toString = function () {
    return "A Circle object with radius of " + this.radius + ".";
};
```

(**en.wikipedia.org/wiki/JSDoc|Wikipedia (en)]]//)