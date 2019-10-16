## Facebooks JavaScript-Bibliothek React
[React](https://facebook.github.io/react/) ist eine von Facebook entwickelte Library welche (zurecht) in Konkurrenz zu [AngularJS](https://angular.io),
 Backbone.js und Ember.js steht. Der grösste Vorteil von React ist die kurze Ladezeit, da die Manipulation des [DOMs](/wiki/divers/dom) in einem Virtuellen 
 DOM stattfindet und erst am Ende der veränderte Teil des DOMs ersetzt wird. React wird wie jede andere JavaScript-Datei mittels eines <script>-Tags eingebunden.


```
<!DOCTYPE html>
<html>
    <head>
        <title>Hello React</title>
	<script type="text/javascript" src="react.js" />
	<script type="text/javascript" src="react-dom.js" />
    </head>
    <body>
	<main></main>
	<script type="text/javascript" src="helloWorld.js" />
    </body>
</html>
```
```
// Beispiel 1
var h1 = React.createElement('h1', null, "Hallo Welt!");
ReactDOM.render(h1, document.getElementByTagName('main')[0]);

//Beispiel 2
React.render(
    <h1>Hallo Welt!</h1>,
    document.getElementsByTagName('main')[0]
);
```
In der helloWorld.js-Datei (Beispiel 1) wird ein <h1> Element erzeugt und mittels ReactDOM bei dem <main>-Tag eingefügt. Das Erzeugen eines Elementes ist jedoch zu kompliziert. Die bessere Variante ist bei Beispiel 2 dargestellt. In diesem Fall wird das <h1>-Tag nicht als HTML geschrieben, sondern als XML (XML-Regeln beachten).





### Babel
React verwendet [Babels](https://babeljs.io/) JSX was den Vorteil bringt, dass man alle neuen Vorteile von ES6 verwenden kann. Babel sollte normal installiert werden ("**"), danach importiert man die "Presets" von react ("**") und am Schluss sagt man Babel, dass es das src/ Verzeichnis überwachen soll und bei Veränderungen direkt automatisch den Code nach build/ kompilieren soll ("**"). Vom build/ Verzeichnis kann man dann die JavaScript-Dateien importieren (<script>-Tag)





### HTML
Im Beispiel wird ein Quiz programmiert, bei dem man so viele HTML-Elemente wie möglich innerhalb eines gewissen Zeitraumes eingeben soll.


```
'use strict';
const elements = ['html','head','body', (...)];
let els = new Map();
elements.forEach((el) => {
  els.set(el, false);
});
```
In diesem Beispiel wird ein Array mit möglichen Tags gefüllt und danach alles auf false gemappt.





### Modular
Das Quiz besteht aus mehreren Komponenten:


  * Eingabefeld, welches auf  Änderungen überwacht wird
  * Countdown
  * Liste der bereits korrekt genannten Elemente
  * Zähler
  * Auswertung nach Ablauf des Coundowns



React ist sehr effizient wenn man ein System in mehrere Komponenten aufteilen will. Das zentrale Modul soll 'Game' heissen.


```
const Game = React.createClass({
  render: function() {
    return <div>Spiel ...</div>;
  }
});
ReactDOM.render(
  <Game/>,
  document.getElementsByTagName('main')[0];
);
```
### Zustände
Der Countdown soll im Sekundentakt herunter bis auf (int) Null zählen. Dies passiert in der Komponente Timer.


```
const Timer = React.createClass({
  render: function() {
    return <div id="timer">0:00</div>;
  }
});
```
Zusätzlich dazu sollte man den Zustand des Countdowns speichern (abgelaufen oder nicht). Dies wird in einer Zustandsvariable in Game gemacht. Die Funktion getInitialState() erstellt diese State-Variable.
```
const Game = React.createClass({
  getInitialState: () => {
    return {
       seconds: 0,
       timer: 'off'
    };
  },
  render: function() {
    return <section>
      <Timer time={this.state.seconds} status={this.state.timer} />
    </section>;
  }
});
```
Über this.state lassen sich die Werte unter getInitialState() abrufen. Der Vorteil von Statevariablen ist, dass bei einer Aktualisierung einer Statevariable alle Views aktualisier werden. Nun muss noch das Modul Timer angepasst werden. 
```
const Timer = React.createClass({
  render: function() {
    let sec = this.props.time % 60;
    let min = (this.props.time - sec) / 60;
    sec = sec < 10 ? '0' + sec : sec.toString();
    return <div id="timer" className={this.props.status}>{min}:{sec}</div>;
  }
});
```
Um die Dauer des Countdowns zu bestimmen legt man die Zeit in Sekunden in einer Variable ab (bsp. 300 für 5 Minuten). In diesem Fall reichen jedoch 10 für Testzwecke.
```
timer: function() {
  let start = 0, millisec = 0, diff = 0, passed = 0, limit = this.state.seconds;
  const timerInstance = () => {
    if (this.state.timer === 'out')
      return;
    millisec += 1000;
    diff = (Date.now() - start) - millisec;
    passed = Math.round(Math.floor(millisec / 1000));
    this.setState({secounds: limit - passed});
    if (passaed >= limit){
      this.setState({seconds: 0, timer: 'out'});
      return;
    }
    setTimeout(timerInstance, (1000 - diff));
  }
  start = Date.now();
  this.setState({seconds: limit, timer: 'on'});
  setTimeout(timerInstance, 1000)
},
render: function() {...}
```
Die Funktion timerInstance() ist this für die Klasse Timer. 


Jetzt muss der Timer noch gestartet werden.
```
const Game = React.createClass({
  getInitialState: ... ,
  componentDidMount: function() {
    this.timer();
  },
  timer: ... ,
  render: ... 
});
```
### Events
Nach jeder Eingabe muss man den Wert im Feld überprüfen, ob dieser Wert ein gültiges HTML-Tag ist.
```

const Game = React.createClass({
  getInitialState: ... ,
  componentDidMount: ... ,
  handleInput: function(event) {
    console.log(event.directory.value);
  },
  timer: ... ,
  render: ... 
});
```
Damit die handleInput() Funktion funktioniert braucht es einen Input (und eine Input Klasse).
```
// Game Klasse:
  render: function() {
    return <section>
      <input val={this.state.input}
             process={tis.handleInput}
             disabled={(this.state.timer === 'out')? true : false }
             />
      <Timer ... />
    </section>;
  };
// Input Klasse
const Input = React.createClass({
  render: function() {
    return <input type="text" 
                  value={this.props.val}
                  autofocus="true"
                  disabled={this.props.disabled}
                  onInput{this.props.process}
                  />;
  }
});
```
Da jetzt die richtigen Inputs vorhanden sind kann man die handleInput() Funktionslogik anpassen.
```
  handleInput: function(event) {
    if (this.state.timer === 'off')
      this.timer();
    let inp = event.directory.value;
    this.setState({input: inp});
    if (!els.has(inp)) return;
    if (els.get(inp) === false) {
      els.set(inp, true);
      this.setState({
        input: '',
        found: this.state.found.concat(inp);
      });
    }
  },
```
Zuerst wird geprüft, ob der Timer nicht aktiv ist. Wenn ja wird er gestartet. Danach wird der Wert des Inputs in eine Variable geschrieben und anschliessend in die Zustandsvariable input gesetzt. Anschliessend wird die Map "els" auf den input geprüft und dem entsprechend angepasst.
### Erfolgsmeldung
Jetzt muss nur noch angezeigt werden, welche Elemente der Spieler bereits gefunden hat. Dies macht man in "render" in der Klasse Game
```
<section>
  <Counter done={this.state.found.length} />
  <Input val= {this.state.Input}
         process={tis.handleInput}
         disabled={(this.state.timer === 'out')? true : false } 
         />
  <Timer time={this.state.seconds}
         status={this.state.timer}
         />
  <Output color="green" desc="HTML5-Elemente">
    {this.state.found}
  </Output>
</section>
```
Für den Zähler wird eine eigene Klasse erstellt.
```
const Counter = React.createClass({
  render: function() {
    return <div id="counter">
      {this.props.done} von {elements.lengt}
    </div>
  }
});
```
Um den Output zu regeln braucht es ebenfalls eine Klasse. Diese regelt mittels join() die Anzeige der bereits gefundenen Elemente.
```
const Output = React.createClass({
  render: function() {
    return <div className={this.props.color}>
      {this.props.desc}:
      
      {this.props.children.sort().join(', ')}
    </div>
  }
});
```
### Game Over
Man kann jedes Mal, wenn sich eine Komponente verändert, prüfen ob die Zeit abgelaufen ist (oder der Benutzer alle Elemente gefunden hat). Dies kann man mit der componentDidUpdate() Funktion machen. In der Game Klasse:
```
  componentDidUpdate: function() {
    if (this.state.found.length === elements.length && timer !== 'out')
      this.setState({timer: 'out'});
  }
```
Um am Ende eine Auswertung anzuzeigen kann man diese in einer Report Klasse machen. Dazu sollte man noch in der Game Klasse den Report-Tag einfügen 
```
// Game Klasse
  render: function() {
    return ...
      <Report show={this.state.timer === 'out' ? true : false}>{this.state.found}</Report>
  }
// Report Klasse
const Report = React.createClass({
  render: function() {
    if (!this.props.show)
      return <span />;
    let missed = elements.filter((el) => {
      return this. props.children.indexOf(el) < 0;
    });
    return <ul className="elementsList">
      {missed.map((el, i) => 
        <ReportRow key={i} style="missed">
           {el}
        </ReportRow>
      )}
    </ul>;
  }
});
```
### XSS Bremse
Um [Cross Site Scriting](/wiki/hacking/xss) zu verhindern wird von React in der join() Funktion keine String Konkatenantion zugelassen. Deshalb muss man die gefundenen Elemente in ein code-Tag setzen.
```
const ReportRow = React.createClass({
  render: function() {
    return <li>
      ```
        {this.props.children}
      ```
    </li>
  }
});
```
### Fazit
Grundsätzlich wirkt React sehr einfach. Auch der Aufbau einer simplen Webapplikation ist gut gelöst. Was mir nicht gefallen hat, ist dass c't Programmieren bei den if-Statements auf die geschweiften Klammern verzichtet. Jedoch im Gesamten würde ich mir jetzt zutrauen, eine einfache kleine Applikation mit React umsetzen zu können.
