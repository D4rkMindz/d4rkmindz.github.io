## Callback Hell
Wenn man heute in [JavaScript](/de/wiki/programmiersprachen/javascript) eine Applikation entwicklet kann es aufgrund der Asynchronität zu einer sogenannten "Callback hell" (engl., Callback Hölle) kommen. Ein Beispiel für eine Callback Hell ist der unten stehende Code:
```javascript
step1(function(value1){
  step2(value1, function(value2){
    step3(value2, function(value3){
      step4(value3, function(value4){
        step5(value4, function(value5){
          // Do something with value5
        });
      });
    });
  });
});
```
Um solche Situationen zu vermeiden wurden 2011 Promises entwickelt. Diese Promises nehmen dann einen Zustand ein. Folgende Zustände sind möglich:



![No alt text available](/de/artikel/web-and-mobile-developer/6_17/promises.png )

| Zustand |
| ------- | Beschreibung ^
| pending | initaler Zustand, weder erfüllt noch abgelehnt und wartet auf Verarbeitung|
| fulfilled | Erfolgreich |
| rejected | Abgelehnt |
| setteled | In Bearbeitung, bsp.: es läuft gerade eine Asynchrone Funktion und das Promise wurde weder erfüllt noch abgelehnt |
Ein Promise würde dann wie folgt geschrieben werden:
```javascript
function getData(url) {
  return new Promise(function(fulfill, reject){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if (request.status !== 200){
        reject(new Error('Something went wrong'));
        return;
      }
      fulfill(request.response);
    }
    request.onerror = function() {
      reject(new Error('Network error'));
    }
    request.send;
  });
}

getData('https://www.example.com/api/users')
  .then(function(result){
    // do something
  }, function(error){
    // handle error
  });
```
### Fazit
Dank diesem Artikel habe ich das Prinzip von Promises verstanden und es auch aktiv anwenden können.
