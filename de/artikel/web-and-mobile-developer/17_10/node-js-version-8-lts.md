## Node.JS-VERSION mit Long Term Support
Mit der neuen [Node.JS](/de/wiki/programmiersprachen/javascript/nodejs) Version kommen auch viele Neuerungen. Die Version 8 ist eine Long Term Support Version und wird länger 2019 unterstützt.


Da der LTS für die Version 4 im April 2018 abläuft, sollte man als Node.JS Entwickler dringendst eine Migration auf die Version 8 in Betracht ziehen. Da auch der Support für die Version 6 bereits in ein bisschen mehr als einem Jahr abläuft, lohnt sich auch hier die Migration.


### Neuerungen
Es gibt in Node.JS 8 viele Neuerungen. Unter anderem wird der von NPM Inc. entwickelte Node Package Manager 5 (**NPM5**) integriert. Die Neuerungen kann man auf der [Offiziellen Webseite](https://www.npmjs.com/package/npm5) nachsehen.


Ebenfalls wird mit NodeJS 8 der Support für **[async/await](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)** eingeführt. Auch Promises funktionieren nun ohne ein Plugin.


Native Addons können in Zukunft mit der [N-API (Node-API)](https://nodejs.org/api/n-api.html)einfacher entwickelt werden. **N-API** ist momentan als zukünfitger NaN-Ersatz experimentell implementiert.


Von der Node.JS Community wurde kam der Wunsch auf, dass man **Error Codes** einführt. Fehler enthalten nun neben der Fehlermeldung auch einen Errorcode. Zudem nimmt das Runtime nun zusätzlich eine Klassifizierung in Fehlerklassen vor, welche mittels der ** Methode in eine Zeichenkette umwandeln kann. Der String besteht aus der Fehlerklasse, dem Errorcode und der Fehlermeldung, wobei der Errorcode die einzige Konstante in dieser Klasse ist. Diese Neuerung gestaltet die Internationalisierung von Applikationen wesentlich einfacher und effizienter.


Node.JS verfügt bereits über das Modul REPL. REPL steht für Read-Evaluate-Print-Loop. Zusätzlich zu den bekannten [Features](https://nodejs.org/dist/latest-v8.x/docs/api/cli.html) kommt nun die Bereitstellung einer Umgebungsvariable namens **NODE_OPTIONS**.


Der von Node.JS entwickelte Debugger wurde von der Node.JS Foundation als ** erklärt. Dieser Debugger war auch nicht wirklich beliebt. Nun soll man den **[Node.JS Inspector](https://nodejs.org/en/docs/inspector/)** verwenden.





Weitere Neuerungen findet man im [Offiziellen Blogbeitrag](https://nodejs.org/en/blog/release/v8.0.0/).
