## Der Pfeil hat es in sich
[TypeScript](https://de.wikipedia.org/wiki/TypeScript) ist eine von Microsoft entwickelte Programmiersprache, welche sich an den ECMAScript Standard hält. Somit ist jeder JavaScript Code auch valider TypeScript Code.


Jedoch ist TypeScript typisierbar.


```
// untyped function
function a(value1, value2) {
  // ...
}

// typed function with any parameter (value2) and optional parameter (value3)
function b(value1: number, value2: any, value3?: number): void {
  // ...
  return;
}
```
#### Spread Operator
Der [Spread Operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) ist zum übergeben einer oder mehrerer Werte unbestimmter Menge. Wie im folgenden Beispiel dargestellt lassen sich zwei oder auch fünf Werte der Methode übergeben. Zu beachten gilt jedoch, dass der Spread Operator nur der letzte Parameter sein kann. Wenn man davor noch einen anderen Parameter definiert wird zuerst dieser mit dem übergebenen Wert befüllt und erst dann der Spread Operator.


Der Spread Operator wird mit ''...'' definiert.


```
function c(value1:number, ...value2:number[]):void {
  console.log("Value1: %s", value1);
  console.log(value2);
}

// outputs: 
// Value1: 1
// Array: [2]
c(1, 2);

// outputs:
// Value1: 1
// Array: [2, 3, 4, 5, 6]
c(1, 2, 3, 4, 5, 6);
```
#### Anonyme Funktionen
Eine Anonyme Funktion ist eine Funktion, welche über keinen Namen und nur über eine Referenz oder einen Zeiger Verfügt. In TypeScript lassen sich Funktionen auf verschiedene Arten Definieren. Einerseits die normale Variante mit ''function(){}'', andererseits die Arrowfunction Methode ''()=> {}''. Bei Arrowfunctions sind jedoch die geschweiften Klammern nicht nötig, wenn man einen Wert direkt retourniert.


```
// anonymous function
let d = function () {
  // ...
  return 1;
}

// call anonymous function
d();

// anonymous arrowfunction
let e = ()=>{
  // ...
  return 1;
};

// shortend, anonymous arrowfunction
let f = (value1, value2) => value1 + value2;

// typed, shortend, anonymous arrowfunction
let g = (value1: number, value2: number): number => value1 + value2;
```

### Fazit
TypeScript ist eine sehr angenehme Sprache (im Vergleich zu JavaScript), da diese stark typisiert ist. Genau diesen Vorteil nutzt [Angular 4](https://angular.io/) und somit auch [Ionic](/de/ionic/) aus.
