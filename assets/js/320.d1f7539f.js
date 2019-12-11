(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{555:function(e,n,r){"use strict";r.r(n);var i=r(4),a=Object(i.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"php-sicherheit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php-sicherheit","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP - Sicherheit")]),e._v(" "),r("p",[e._v("Die Sicherheit ist bei einer Webapplikation, welche über einen Server läuft sehr wichtig. Für die Sicherheit gibt es viele, unterschiedliche Faktoren. Zum einten gibt es Bereiche, welche nur für den Entwickler zugänglich sein sollten ("),r("a",{attrs:{href:"/de/wiki/webseitenstruktur"}},[e._v("Ordnerstruktur")]),e._v("), zum anderen dürfen manche User nicht an Informationen gelangen, welche nur für andere User gedeacht ist ("),r("a",{attrs:{href:"/de/wiki/programmiersprachen/php/validierung"}},[e._v("korrekte Validierung")]),e._v(").\nMan muss aber auch darauf achten, dass ein User nicht nach einem Logout wieder in den geschützten Bereich kommt. Dies kann man mit "),r("a",{attrs:{href:"/de/wiki/programmiersprachen/php/session"}},[e._v("Session")]),e._v(" erreichen.")]),e._v(" "),r("h3",{attrs:{id:"formulare"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#formulare","aria-hidden":"true"}},[e._v("#")]),e._v(" Formulare")]),e._v(" "),r("p",[e._v("Ein interaktives Fomular (z. B.: ein "),r("a",{attrs:{href:"/de/wiki/programmiersprachen/php/beispiele/login"}},[e._v("Loginformular")]),e._v(") ist Teil einer Webseite, welche mit dem "),r("a",{attrs:{href:"/de/wiki/backend"}},[e._v("Server")]),e._v(" interagieren muss. Man kann etwa mit den eingegebenen Daten eine "),r("a",{attrs:{href:"/de/wiki/email"}},[e._v("E-Mail")]),e._v(" verschicken oder in einer Datenbank abspeichern. Für beides braucht man PHP und eine hohe Sicherheit. Man kann einen mögliche Überlastung der Datenbank auf dem Server bereits im Code, respektive in der Logik verhindern. Dazu braucht man die "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Post/Redirect/Get",target:"_blank",rel:"noopener noreferrer"}},[e._v("Post/Redirect/Get-Methode"),r("OutboundLink")],1),e._v(". Dabei speichert man die eingegebenen Daten in der globalen Variable $_POST. Nach dem Abschicken sind diese Daten jedoch immernoch vorhanden, wenn man die Seite erneuert (F5). So kann man, indem man die Seite sehr oft und sehr schnell hintereinander erneuert die Datenbank unnötig befüllen. Dies kann man verhindern, indem man nach dem Absenden des Formulares wieder auf die gleiche Seite verlinkt. In PHP macht man das wie folgt:")]),e._v(" "),r("p",[r("code",[e._v('phpheader("Location: contactform.php");')]),e._v("\nDadurch werden alle Daten in der $_POST Variable nach Abschicken des Formulares zurückgesetzt. Jetzt kann man die Seite beliebig oft erneuern. Wenn ich jedoch eine Erfolgsmeldung darstellen möchte, sollte ich diese in der "),r("a",{attrs:{href:"/de/wiki/programmiersprachen/php/session"}},[e._v("$_SESSION")]),e._v(" Variable speichern.")])])}),[],!1,null,null,null);n.default=a.exports}}]);