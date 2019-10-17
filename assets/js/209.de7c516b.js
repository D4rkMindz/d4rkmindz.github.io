(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{438:function(e,r,n){"use strict";n.r(r);var t=n(4),i=Object(t.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"critical-rendering-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#critical-rendering-path","aria-hidden":"true"}},[e._v("#")]),e._v(" Critical Rendering Path")]),e._v(" "),n("p",[e._v("Bevor eine Webseite im Browser angezeigt wird geschehen für den Nutzer nicht ersichtlich, mehrere Dinge. Das "),n("a",{attrs:{href:"/de/wiki/programmiersprachen/html"}},[e._v("HTML")]),e._v(" wird heruntergeladen und ein "),n("a",{attrs:{href:"/de/wiki/divers/dom"}},[e._v("DOM")]),e._v(" wird aufgebaut. Die verlinkten "),n("a",{attrs:{href:"/de/wiki/programmiersprachen/css"}},[e._v("CSS")]),e._v("-Dateien werden heruntergeladen und geparst. Ebenfalls werden auch die "),n("a",{attrs:{href:"/de/wiki/programmiersprachen/javascript"}},[e._v("JavaScipt")]),e._v("-Dateien heruntergeladen und ausgeführt.")]),e._v(" "),n("p",[e._v("Alle diese Schritte blockieren das Rendern (Anzeigen) der Webseite im Browser. Nachdem der DOM aufgebaut ist, wird ein CSSOM (CSS Object Model) aufgebaut. Auch dieses benötigt Zeit und blockiert.")]),e._v(" "),n("p",[e._v("Nach dem DOM und dem CSSOM berechnet der Browser das Layout der Webseite und teilt diese in "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS-Boxen"),n("OutboundLink")],1),e._v(" ein. Nachdem die Berechnung des Layouts erfolgt ist werden die Farben auf der Seite berechnet und anschliessend angezeigt.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/de/wiki/crp.png",alt:"No alt text available"}})]),e._v(" "),n("h3",{attrs:{id:"optimierungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#optimierungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Optimierungen")]),e._v(" "),n("p",[e._v("Man hat verschiedene Möglichkeiten zur Optimierung des CRP. Man kann z. B. nur gewisse, benötigte Styles (Navbar, Main-Content) inline vor allen anderen Styles machen.")]),e._v(" "),n("p",[e._v("Ebenfalls gibt es die Möglichkeit JavaScripts asynchron zu laden (nicht blockierend). Somit kann man JS-Dateien, welche nicht sofort benötigt werden asynchron nachladen (bsp. Google Analytics).")]),e._v(" "),n("p",[e._v("Netflix z. B. zeigt dem Benutzer erst einmal eine Vorschau in schwarz-weiss, wo danach Bilder hinein gerendert werden.")]),e._v(" "),n("h3",{attrs:{id:"weitere-artikel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#weitere-artikel","aria-hidden":"true"}},[e._v("#")]),e._v(" Weitere Artikel")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Critical Rendering Path"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding the critical rendering path"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://medium.freecodecamp.org/an-introduction-to-web-performance-and-the-critical-rendering-path-ce1fb5029494",target:"_blank",rel:"noopener noreferrer"}},[e._v("An introduction to web performance and the critical rendering path"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("How CSS works: Parsing & painting CSS in the critical rendering path"),n("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);