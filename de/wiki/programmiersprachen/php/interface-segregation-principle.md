=## Interface Segregation Principle
Das Interface Segregation Principle besagt sozusagen, dass man grosse Interfaces auf mehrere kleine verteilt. So wird verhindert, dass Klassen Methoden implementieren müssen, welche diese gar nicht brauchen. Bei dem Negativbeispiel werden mehrere Methoden implementiert, welche mit einem Rechteck zu tun haben.
```
<?php

interface Rectangle {
  public function setWidth(int $width);
  public function setHeight(int $height);
  public function getWidth(): int;
  public function getHeight(): int;
  public function getArea(): int;
}
```
Das Problem hier ist, dass man bei einem Rechteck zwar Höhe und Breite hat, was passiert jedoch wenn man ein Quadrat (welches praktisch ein Rechteck ist) implementieren muss? Beachtet man das [Liskov Substitution Principle](/de/wiki/programmiersprachen/php/liskov-substitution-principle) jedoch korrekt, merkt man, dass man zwar bei dem Rechteck sowie bei dem Quadrat eine ''getArea()'' Methode braucht. Jedoch bezieht man sich bei dem Quadrat auf eine Länge, während ein Rechteck eine Höhe und eine Breite hat. Hier splittet man die Interfaces in ein Shape-Interface sowie in ein Square- und ein Rectangle-Interface auf.


```
<?php

interface Shape {
  public function getArea(): int;
}

interface Rectangle {
  public function setWidth(int $width);
  public function setHeight(int $height);
  public function getWidth(): int;
  public function getHeight(): int;
}

interface Square {
  public function setLength(int $length);
  public function getLength(): int;
}
```
