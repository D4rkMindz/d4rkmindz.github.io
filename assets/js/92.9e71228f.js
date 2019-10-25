(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{327:function(e,n,t){"use strict";t.r(n);var i=t(4),r=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"zehn-bedrohungen-fur-webanwendungen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zehn-bedrohungen-fur-webanwendungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Zehn Bedrohungen für Webanwendungen")]),e._v(" "),t("p",[e._v("In diesem Kapitel wurden nur OWASP 7 und 8 behandelt. Alle anderen wurden in vorherigen, respektive nachfolgenden Magazinen behandelt.")]),e._v(" "),t("h3",{attrs:{id:"platz-7-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#platz-7-xss","aria-hidden":"true"}},[e._v("#")]),e._v(" Platz 7: XSS")]),e._v(" "),t("p",[e._v("XSS ist die Abkürzung für "),t("a",{attrs:{href:"/de/wiki/hacking/xss"}},[e._v("Cross-Site-Scripting")]),e._v(". Bei dieser Attacke geht es darum, schädlichen Code in die Webseite über ein Formularfeld oder die URL einzufügen. Es gibt verschiedenen Arten von XSS.")]),e._v(" "),t("h4",{attrs:{id:"reflektierendes-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflektierendes-xss","aria-hidden":"true"}},[e._v("#")]),e._v(" Reflektierendes XSS")]),e._v(" "),t("p",[e._v('Hier wird schädliche JS Code in die Webseite eingefügt. Dies ist möglich, da die Webseite z.B. die Suchparameter nimmt und dem Benutzer wieder (URL: example.com/search?q=xss) ungefiltert anzeigt: "Der Begriff XSS wurde nicht gefunden". Jedoch ist dann auch so etwas möglich (URL: example.com/search?q='),t("script",[e._v("alert(&quot;You've been Hacked&quot;);")]),e._v(") wo man über die URL schädlichen Code in die Webseite einfügt.")]),e._v(" "),t("h4",{attrs:{id:"persistentes-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persistentes-xss","aria-hidden":"true"}},[e._v("#")]),e._v(" Persistentes XSS")]),e._v(" "),t("p",[e._v("Beim Persistenten XSS geht es darum, dass der schädliche JS Code ungeprüft persistiert wird (z. B. Kommentar im Forum). Jeder Benutzer, welcher dann die Seite mit z. B. dem schädlichen Kommentar aufruft ist automatisch infiziert.")]),e._v(" "),t("h4",{attrs:{id:"dom-basiertes-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-basiertes-xss","aria-hidden":"true"}},[e._v("#")]),e._v(" DOM-basiertes XSS")]),e._v(" "),t("p",[e._v("Hier wird der Schadcode im Code des Clients eingefügt. Ein Beispiel dafür ist ebenfalls die Möglichkeit Scripte über die URL einzuschleusen (siehe Beispiel Reflektierendes XSS).")]),e._v(" "),t("h4",{attrs:{id:"resident-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resident-xss","aria-hidden":"true"}},[e._v("#")]),e._v(" Resident XSS")]),e._v(" "),t("p",[e._v("Resident XSS ist praktisch ein Rootkit für Browser. Bei einem Angriff bleibt das betroffene Fenster im Hintergrund offen und ermöglicht so dem Hacker alles, was auf einem Computer möglich ist, zu machen.")]),e._v(" "),t("h4",{attrs:{id:"xss-verhindern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss-verhindern","aria-hidden":"true"}},[e._v("#")]),e._v(" XSS Verhindern")]),e._v(" "),t("p",[e._v("XSS kann schon recht gut abgefangen werden, wenn man jede Eingabe des Benutzers (auch die URL) escaped. Das Bedeutet, in nicht gefährliche Zeichen umwandeln.")]),e._v(" "),t("p",[e._v("Wenn man jedoch einen Editor hat und gewisse HTML Elemente zulassen möchte, dann sollte man alles unerwünschten Elemente entfernen und nur solche behalten, welche erlaubt sind. Ausserdem muss man die Attribute der Elemente filtern, da auch diese JavaScript ausführen könnten (z. B. onload, onerror, etc).")]),e._v(" "),t("h3",{attrs:{id:"insecure-deserialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insecure-deserialization","aria-hidden":"true"}},[e._v("#")]),e._v(" Insecure Deserialization")]),e._v(" "),t("p",[e._v("Objekte werden für die Kommunikation über Datenstreams serialisiert. Dazu werden diese in Strings konvertiert und anschliessend wieder deserialisiert (in Objekte umgewandelt).  Wenn ein Hacker Zugriff auf ein serialisiertes Objekt bekommt, kann dieser das Objekt verändern und unerwünschte Seiteneffekte hervorrufen.")]),e._v(" "),t("p",[e._v("Eine solche Attacke lässt sich recht einfach verhindern, indem man einen Hash des Objektes erstellt und diesen ebenfalls mitliefert. Somit kann niemand den Wert des Objektes verändern, ohne auch den Hash (mit dem Private Key) zu\nverändern.")]),e._v(" "),t("h3",{attrs:{id:"fazit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fazit","aria-hidden":"true"}},[e._v("#")]),e._v(" Fazit")]),e._v(" "),t("p",[e._v("Ein sehr spannender Artikel, welche die beiden Angriffsvektoren XSS und Insecure Deserialization schön und verständlich zusammengefasst hat.")])])}),[],!1,null,null,null);n.default=r.exports}}]);