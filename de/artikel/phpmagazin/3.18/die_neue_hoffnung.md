## Die neue Hoffnung
Web Assembly ist eine schon sehr gut [unterstützte](https://caniuse.com/#feat=wasm) Programmiersprache für den Browser. Man kann Dateien, welche der Sprache C sehr ähneln schreiben und diese dann mit einem [emscripten emSDK compiler](https://github.com/juj/emsdk) kompilieren.





Jedoch muss man für die Benutzung von Web Assembly noch einen Wrapper bauen, welcher dann den Code ausführt.


Nach der Kompilierung muss die entsprechende Funktion aufgerufen werden.


```
int myFunctino(int* what, int howMany) {
  int accu;
  for(int i=0;i<howMany;i++) {
    accu += what;
  }
  
  return accu;
}
```
```
fetch('worker.wasm').then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, importObject))
  .then(instance => {
    var i32 = new Uint32Array(myMemory.buffer);
    for (var i = 0;i < 10;i++) {
      i32[i] = i;
    }
    console.log(instance.instance.exports._myFunction(i32,3));
  });
```



Ein weiteres Tutorial findet man auf [Medium.com](https://medium.com/@BenedekGagyi/the-simplest-way-to-get-started-with-webassembly-1f92f6f90d24)


### Fazit
Web Assembly löst sicher nicht JavaScript ab. Ein Grund dafür ist die fehlende DOM-API. Auch ist JavaScript (noch) einfacher zum programmieren. Es lohnt sich jedoch über Web Assembly nachzudenken, wenn man rechenintensive, mathematische Algorithmen berechnen muss. Jedoch muss man immer auch den investierten Aufwand bedenken, denn Web Assembly ist nicht einfach.