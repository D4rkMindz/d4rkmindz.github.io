(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{522:function(e,n,a){"use strict";a.r(n);var t=a(4),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"vagrant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vagrant","aria-hidden":"true"}},[e._v("#")]),e._v(" Vagrant")]),e._v(" "),a("p",[e._v('Vagrant ist eine Virtualisierungslösung, welche es ermöglicht, eine Applikation lokal (unter Windows/Unix) so zu installieren, dass diese in einer Virtual Machine unter den genau gleichen Bedingungen laufen kann wie auf dem Server. Diese Lösung verhindert das "Works-On-My-Machine" Problem.')]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cakedc.com/jorge_gonzalez/2018/01/17/using-a-vagrant-box-as-quick-environment-for-the-getting-started-with-cakephp-training-session",target:"_blank",rel:"noopener noreferrer"}},[e._v("Original Tutorial"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"vorraussetzungen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vorraussetzungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Vorraussetzungen")]),e._v(" "),a("ul",[a("li",[e._v("VirtualBox : "),a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.virtualbox.org/wiki/Downloads"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Vagrant : "),a("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.vagrantup.com/downloads.html"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Um Vagrant korrekt starten zu können, muss man in dem Verzeichnis, welches man für Vagrant brauchen möchte (bspw.: C:\nxampp\nhtdocs) ein Vagrantfile erstellen. In dieses File fügt man dann folgenden Inhalt ein:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# -*- mode: ruby -*-\n# vi: set ft=ruby :\nVagrant.configure("2") do |config|\n  config.vm.box = "cakedc/cakephp-training"\n  config.vm.network :forwarded_port, guest: 8765, host: 8765\n  config.vm.provider "virtualbox" do |vb|\n    vb.memory = "1024"\n    vb.customize [\'modifyvm\', :id, \'--cableconnected1\', \'on\']\n  end\nend\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Hier wird Vagrant so konfiguriert, dass es eine bereits vorhandene Virtual Machine (Ubuntu 18.04 LTS Bionic Beaver) nimmt und diese hochfährt.")]),e._v(" "),a("p",[e._v("Wenn man eine andere VM möchte kann man diese unter "),a("a",{attrs:{href:"https://app.vagrantup.com/boxes/search",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.vagrantup.com"),a("OutboundLink")],1),e._v(" suchen.")]),e._v(" "),a("p",[e._v("Um danach Vagrant zu starten muss man folgenden Befehl im selben Verzeichnis wie das Vagrantfile ausführen.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vagrant up\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Die Ausführung dieses Befehls könnte eventuell eine gewisse Zeit dauern. Danach kann man sich auf die Virtuelle Maschine mittels  des aufgeführten Befehls verbinden.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vagrant ssh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Danach ist man auf der Maschine verbunden und alles sollte eingerichtet sein.")]),e._v(" "),a("p",[e._v("Sollten Fehlermeldungen auftauchen, kann man mittels ''vagrant destroy'' alle Vagrant VM Instanzen zurücksetzen und danach erneut mittels ''vagrant up'' starten.")])])}),[],!1,null,null,null);n.default=r.exports}}]);