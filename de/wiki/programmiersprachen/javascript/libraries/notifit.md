# notifIt

[NotifIt](http://naoxink.hol.es/notifIt/) ist eine [JQuery](/wiki/programmiersprachen/javascript/libraries/jquery) Erweiterung, welche Benachrichtigungen einfacher, schneller und schöner darstellen lässt.

![No alt text available](/wiki/programmiersprachen/javascript/libraries/notifit.png )

Dies lässt sich beispielsweise erreichen mit
```js
notif({
  position: 'center', // oben zentriert
  multiline: true, // ist der Text zu lang, wird er auf einer weiteren Zeile ausgegeben
  zibdex: 9999999999, // hier wird ein beliebig hoher Wert eingestellt, so dass die Meldung immer zuvorderst ist
  opacity: 0.9, // Sichtbarkeit, 1.0 entspricht undurchsichtig
  msg: "Entry added successfully.", // angezeigter Text
  type: "success" // grüner Hintergrund
});
```
Typen:


success: grüner Hintergrund


error: roter Hintergrund


warning: oranger Hintergrund


info: blauer Hintergrund

