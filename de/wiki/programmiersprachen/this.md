## This
This ist ein in jeder OO-Programmiersprache bekanntes Syntax-Element. Man verwendet es um eine Instanz der Klasse selbst zu erzeugen. Es wir ein Abbild der Klasse, in welcher man gerade ist, gemacht. Wenn man in einer Klasse Car die Funktionen drive, stop und start hat kann man die Funktionen aus einer anderen Klasse (bsp. Motor) aus mittels einer Instanz der Klasse Car aufrufen. Umgekehrt funktioniert dies genau gleich. Da eine Klasse nicht eine Instanz von sich selbst erzeugen kann, verwendet man this. Also in der Klasse Car in der Funktion drive ruft man die Funktion start mittels this auf.
```
class car {
     public void drive(){
         int tries = 0;
         do{
             tries++;
             System.out.println("Trying to restart the Motor");
             this.start();
         } while(this.start !== true && tries <= 100);
         
         if (tries == 100) {
             System.out.println("Car is demolished");
             this.stop;
         } else {
             System.out.println("Car is driving");
         }
    }
     
     public Motor start() {
         Motor motor = new Motor("PS", 700);
         motor.rotate("sec", 1);
         motor.injectGas;
         return motor.rotating();
     }
     
     public void stop(){
         // Do something
     }
}
```