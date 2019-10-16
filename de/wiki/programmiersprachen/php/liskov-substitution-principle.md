## Liskov Substitution Principle
Das Liskov Substitution Principle (LSP), welches auch Ersetzbarkeitsprinzip genannt wird, besagt, dass eine Klasse durch Erweiterung nicht in Ihrer Basisfunktionalität verändert werden darf. In dem Negativbeispiel wird eine Klasse ''Square'' von einer Klasse ''Rectangle'' abgeleitet, da ein Quadrat ein Rechteck ist. Jedoch verhält sich ein Quadrat anders als ein Rechteck. Bei einem Quadrat sind die Höhe und die Breite immer gleich, während diese Werte bei einem Rechteck sich unterscheiden können. In dem Beispiel vonn ''Square'' hat man den Ansatz verfolgt, dass wenn einer der beiden Werte gesetzt wird, dass dann automatisch auch der andere gesetzt wird. Jedoch kann das auch zu Fehlern führen. Man setzt beispielsweise den Wert der Höhe und danach den der Breite. Für die meisten Menschen ist dies verständlich, jedoch kann genau so etwas (bei einem komplexeren Beispiel) zu blockierenden oder unverständlichen Bugs führen.


```
<?php

class Rectangle {
  protected $width = 0;
  protected $height = 0;
  
  public function setWidth(int $width) {
    $this->width = $width;
  }
  
  public function setHeight(int $height) {
    $this->height = $height;
  }
  
  public function getWidth(): int {
    return $this->width;
  }
  
  public function getHeight(): int {
    return $this->height;
  }
  
  public function getArea(): int {
    return $this->height * $this->width;
  }
}

class Square extends Rectangle {
  public function setHeight($height) {
    $this->height = $height;
    $this->width = $height;
  }
  
  public function setWidth(int $width) {
    $this->height = $width;
    $this->width = $width;
  }
}

function test() {
  $rect = new Rectangle();
  $rect->setHeight(7);
  $rect->setWidth(8);
  echo $rect->getArea(); // echoes "56"
  
  $square = new Square();
  $square->setHeight(7);
  $square->setWidth(8);
  echo $square->getArea(); // echoes "64", maybe "49" expected
}

test();
```
Korrekt wäre es, wenn man eine Superklasse ''Shape'' würde machen, da ein Rechteck sowie ein Quadrate je eine ''Shape'' sind. Von dieser ''Shape'' leitet man die anderen beiden Klassen ab. Idealerweise übergibt man noch die Standardwerte im Konstruktor. So kann Missbrauch vorbeugen und Fehlerquellen reduzieren.


```
<?php

class Shape {}

class Rectangle extends Shape {
  protected $width = 0;
  protected $height = 0;
  
  public function __construct(int $width, int $height) {
    $this->width = $width;
    $this->height = $height;
  } 
  
  public function setWidth(int $width) {
    $this->width = $width;
  }
  
  public function setHeight(int $height) {
    $this->height = $height;
  }
  
  public function getWidth(): int {
    return $this->width;
  }
  
  public function getHeight(): int {
    return $this->height;
  }
  
  public function getArea(): int {
    return $this->height * $this->width;
  }
}

class Square extends Shape {
  private $lenght

  public function __construct(int $length)

  public function setHeight(int $length) {
    $this->length = $length;
  }
  
  public function getLength() {
    return $this->length;
  }
}

function test() {
  $rect = new Rectangle(7,8);
  echo $rect->getArea(); // echoes "56"
  
  $square = new Square(8);
  echo $square->getArea(); // echoes "64"
}

test();
```