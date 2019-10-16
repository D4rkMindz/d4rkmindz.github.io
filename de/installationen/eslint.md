## ESLint installieren
[NodeJS](/http/**nodejs.org/en/download/). Nach der installation von NodeJS startet man das CMD und gibt folgenden Befehl ein:
```
$ eslint --init
```
Danach mit den Pfeiltasten auswählen:
```
$ Answer questions about your style
```
Diese Fragen beantwortet man dann. Man kann die Konfiguration jederzeit in der .eslintrc.json Datei anpassen. Diese Konfiguration sieht bei mir wie folgt aus:
```json
{
    "env": {
        "browser": true,
		"jquery": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "script"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```



### Testen
Man kann ein File auf Lints mit folgendem Befehl überprüfen:


```
$ eslint yourfile.js
```
Ein Verzeichnis:


```
$ eslint assets/js
```
Alle möglichen Probleme beheben:


```
$ eslint --fix assets/js
```