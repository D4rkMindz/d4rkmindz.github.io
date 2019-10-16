## Portanalyse
Manchmal ist es nötig, auf einem Server oder Computer eine Analyse zu machen, welche Ports gegen aussen geöffnet sind. Man kann sich eine Auflistung aller Ports, welche gegen aussen geöffnet sind über Webseiten anzeigen lassen. Dazu sucht man entweder nach "Online portscan" oder man verwendet eine (oder mehrere) der unten genannten Webseiten:
  - [dnstools](http://www.dnstools.ch/port-scanner.html)
  - [mxtoolbox](https://mxtoolbox.com/PortScan.aspx)
  - [pentest-tools](https://pentest-tools.com/network-vulnerability-scanning/tcp-port-scanner-online-nmap)

Um sich unter Linux eine solche Auflistung für intern geöffnete Ports anzeigen zu lassen muss man lediglich folgenden befehl eingeben:


```
$ netstat -tulpen
```
[man netstat](https://wiki.ubuntuusers.de/netstat/)