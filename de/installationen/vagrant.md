## Vagrant
Vagrant ist eine Virtualisierungslösung, welche es ermöglicht, eine Applikation lokal (unter Windows/Unix) so zu installieren, dass diese in einer Virtual Machine unter den genau gleichen Bedingungen laufen kann wie auf dem Server. Diese Lösung verhindert das "Works-On-My-Machine" Problem.





[Original Tutorial](https://www.cakedc.com/jorge_gonzalez/2018/01/17/using-a-vagrant-box-as-quick-environment-for-the-getting-started-with-cakephp-training-session)
### Vorraussetzungen
  * VirtualBox : [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
  * Vagrant : [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html)



### Installation
Um Vagrant korrekt starten zu können, muss man in dem Verzeichnis, welches man für Vagrant brauchen möchte (bspw.: C:
xampp
htdocs) ein Vagrantfile erstellen. In dieses File fügt man dann folgenden Inhalt ein:


```
# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "cakedc/cakephp-training"
  config.vm.network :forwarded_port, guest: 8765, host: 8765
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.customize ['modifyvm', :id, '--cableconnected1', 'on']
  end
end
```
Hier wird Vagrant so konfiguriert, dass es eine bereits vorhandene Virtual Machine (Ubuntu 18.04 LTS Bionic Beaver) nimmt und diese hochfährt.


Wenn man eine andere VM möchte kann man diese unter [app.vagrantup.com](https://app.vagrantup.com/boxes/search) suchen.


Um danach Vagrant zu starten muss man folgenden Befehl im selben Verzeichnis wie das Vagrantfile ausführen.
```
vagrant up
```
Die Ausführung dieses Befehls könnte eventuell eine gewisse Zeit dauern. Danach kann man sich auf die Virtuelle Maschine mittels  des aufgeführten Befehls verbinden.


```
vagrant ssh
```
Danach ist man auf der Maschine verbunden und alles sollte eingerichtet sein.


Sollten Fehlermeldungen auftauchen, kann man mittels ''vagrant destroy'' alle Vagrant VM Instanzen zurücksetzen und danach erneut mittels ''vagrant up'' starten.