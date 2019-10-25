(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{581:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[s._v("#")]),s._v(" This")]),s._v(" "),e("p",[s._v("This ist ein in jeder OO-Programmiersprache bekanntes Syntax-Element. Man verwendet es um eine Instanz der Klasse selbst zu erzeugen. Es wir ein Abbild der Klasse, in welcher man gerade ist, gemacht. Wenn man in einer Klasse Car die Funktionen drive, stop und start hat kann man die Funktionen aus einer anderen Klasse (bsp. Motor) aus mittels einer Instanz der Klasse Car aufrufen. Umgekehrt funktioniert dies genau gleich. Da eine Klasse nicht eine Instanz von sich selbst erzeugen kann, verwendet man this. Also in der Klasse Car in der Funktion drive ruft man die Funktion start mittels this auf.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class car {\n     public void drive(){\n         int tries = 0;\n         do{\n             tries++;\n             System.out.println("Trying to restart the Motor");\n             this.start();\n         } while(this.start !== true && tries <= 100);\n         \n         if (tries == 100) {\n             System.out.println("Car is demolished");\n             this.stop;\n         } else {\n             System.out.println("Car is driving");\n         }\n    }\n     \n     public Motor start() {\n         Motor motor = new Motor("PS", 700);\n         motor.rotate("sec", 1);\n         motor.injectGas;\n         return motor.rotating();\n     }\n     \n     public void stop(){\n         // Do something\n     }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);