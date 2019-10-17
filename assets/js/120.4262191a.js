(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{572:function(e,r,n){"use strict";n.r(r);var a=n(4),t=Object(a.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"virtuelle-maschinen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtuelle-maschinen","aria-hidden":"true"}},[e._v("#")]),e._v(" Virtuelle Maschinen")]),e._v(" "),n("p",[e._v('Als Entwickler geht man früher oder später auf das Thema Virtuelle Maschinen (VM) ein. Ein Beispiel für die Verwendung von VMs ist die Separation eines Prozesses, welcher nicht auf dem "gleichen Rechner" laufen soll wie die Applikation.')]),e._v(" "),n("p",[e._v("Bei der Verwendung von VMs entsteht jedoch ein grosses Problem: Der Arbeitsspeicher wird von zwei Rechnern gleichzeitig gebraucht. Das führt dazu dass die Prozesse langsamer abgearbeitet werden können. Genau wegen diesem Problem ist "),n("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),n("OutboundLink")],1),e._v(" entwickelt worden.")]),e._v(" "),n("h4",{attrs:{id:"container"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container","aria-hidden":"true"}},[e._v("#")]),e._v(" Container=")]),e._v(" "),n("p",[e._v("Docker regelt die Ausführung von sogenannten Containern. Diese Container sind kompilierte Images. Die Images sind grundsätzlich zustandslos. Dies gilt auch für die Zeit während der Arbeit der darauf basierenden Containern.")]),e._v(" "),n("h3",{attrs:{id:"erste-verwendung"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erste-verwendung","aria-hidden":"true"}},[e._v("#")]),e._v(" Erste Verwendung")]),e._v(" "),n("p",[e._v("Docker wird unter Linux mittels folgenden Befehls ausgeführt:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker run docker/whalesay cowsay HelloWorld!\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Das gute an Docker ist, wenn ein Image nicht vorhanden ist, wird auf das eingebene Repository zu gegriffen und das aufgerufene Image heruntergeladen.")]),e._v(" "),n("p",[e._v("Ein Beispiel, wie der Code dazu aufgebaut ist sieht man auf GitHub unter "),n("a",{attrs:{href:"https://github.com/docker/whalesay",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker/whalesay"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"erstes-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erstes-dockerfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Erstes Dockerfile")]),e._v(" "),n("p",[e._v("Man kann in einem Dockerfile den Grundcode definieren. Dieser ähnlich strukturiert wie "),n("a",{attrs:{href:"/de/wiki/programmiersprachen/assembly"}},[e._v("Assembly")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('FROM docker/whalesay:latest\nCMD cowsay "Hello World"\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v('Dieser Code ruft docker/whalesay in der aktuellsten Version auf und fürhrt den Befehl cowsay "Hello World" aus.')]),e._v(" "),n("p",[e._v("Wenn man eine Verbindung ins Internet herstellen möchte, kann man die bereits halb-fertige Dockerkomponente "),n("a",{attrs:{href:"https://hub.docker.com/_/httpd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Httpd"),n("OutboundLink")],1),e._v(" verwenden. Diese Komponente kann Ports des Rechners auf Ports der VM mappen. Folgender Befehl mappt zuerst Port 8888 des Rechners auf Port 80 ("),n("a",{attrs:{href:"/de/wiki/divers/protokolle/http"}},[e._v("HTTP")]),e._v(") der VM. Der Parameter ** sagt Docker, dass er in einer VM läuft.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker run -p 8888:80 <imageName>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Ein Cheatsheet zu "),n("a",{attrs:{href:"http://tips.tutorialhorizon.com/2016/07/01/docker-cheatsheet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker commands"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Wenn man jedoch nicht jedesmal diesen Befehl ausführen möchte, kann man das Mapping auch im Dockerfile machen.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("FROM httpd\nCOPY ./public_files/ /user/local/apache2/htdocs/\nEXPOSE 80\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("Der Befehl EXPOSE sagt Docker, dass Port 80 nach aussen gebracht werden soll.")]),e._v(" "),n("h3",{attrs:{id:"fazit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fazit","aria-hidden":"true"}},[e._v("#")]),e._v(" Fazit")]),e._v(" "),n("p",[e._v("In dem vor kurzer Zeit besuchten Überbetrieblichen Kurs kam das Thema Docker kurz zur Ansprache. Dank dieses Artikels weiss ich jetzt einiges mehr über die Einsatzweise und Verwendung von Docker.")])])}),[],!1,null,null,null);r.default=t.exports}}]);