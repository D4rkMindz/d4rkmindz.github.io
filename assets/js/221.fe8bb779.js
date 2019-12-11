(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{455:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"rest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest","aria-hidden":"true"}},[t._v("#")]),t._v(" REST")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/odan/de7f5452fb165c2d27f20d1d16bfe54d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weitere Informationen zum Thema REST"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Reprensentational State Transfer oder auch REST ist ein Webservice Architekturstil bei welchem der Fokus auf der Präsentation der Daten des Systems (Resource) liegt. Jede Resource muss durch einen globalen, einzigartigen Identifikator (mittels "),s("a",{attrs:{href:"/de/wiki/url"}},[t._v("URI")]),t._v(")erreichbar sein. Um eine Resource zu erreichen muss der Client dem REST Service über HTTP eine Anfrage übermitteln, auf welche der Server mit einer Repräsentation der Resource antwortet. Die Resource wird oft in Form von "),s("a",{attrs:{href:"/de/wiki/programmiersprachen/javascript/json"}},[t._v("JSON")]),t._v(" oder XML übertragen. Service, welche die REST Archtiektur brauchen werden als ** bezeichnet. Die Anbieter solcher Restful services werden of scherzhaft auch RESTafarians genannt.")]),t._v(" "),s("p",[t._v("Inzwischen gibt es sehr viele Webseiten welche ein RESTful service anbieten. Grob gesagt, kann man behaupten, dass jeder Anbieter eines RSS oder RDF Feeds ein Anbieter eines RESTful services ist. Wichtig dabei ist, dass RESTful services nur die "),s("a",{attrs:{href:"/de/wiki/divers/http-request"}},[t._v("HTTP GET Methode")]),t._v(" auf eine Resource akzeptieren sollten.")]),t._v(" "),s("h3",{attrs:{id:"restful-service-in-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-service-in-php","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful Service in PHP")]),t._v(" "),s("p",[t._v('Wenn man einen RESTful Service mittels PHP benutzen möchte, empfiehlt es sich mit SimpleXML zu arbeiten. Sehr viele RESTful Services senden eine XML-Antwort. In diesem Beispiel wird die Seite "del.icio.us", welche einen RESTful Service hat, verwendet. Die URL für diese API ist "api.del.icio.us". Der Code zum Ausgeben der Links würde dann wie folgt aussehen.')]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$u = 'username';\n$p = 'password';\n\n$tag = \"https://{$u}:${$p}@api.del.icio.us/v1/posts/all?tag=php\";\n\n//XML\n$bookmarks = new SimpleXMLElement($tag, NULL, true);\n\n//JSON\n$file = file_get_contents($tag);\n$bookmarks = json_decode($file);\n\nforeach ($bookmarks->posts as $bookmark){\n    echo '<a href=\"' . htmlentities($bookmark['href']) . '\">';\n    echo htmlentities($bookmark['description']);\n    echo '</a><br />';\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("https://{$u}😒{$p}@api.del.icio.us/v1/posts/all?tag=php\n|        |     |   |        |      |   |    |     |\n|        |     |   |        |      |   |    |     ⎿ Sortierung\n|        |     |   |        |      |   |    ⎿ Alle\n|        |     |   |        |      |   ⎿ Posts\n|        |     |   |        |      ⎿ Version 1")]),t._v(" "),s("pre",[s("code",[t._v("Vom Anbieter definiert (und dokumentiert)\n------------------------------------------------------------------------\nStandard\n\n|        |     |   |        ⎿ Domain (del.icio.us)\n|        |     |   ⎿ Subdomain (api)\n|        |     ⎿ Login (Passwort)\n|        ⎿ Login (Benutzername)\n⎿ Protokoll\n")])]),t._v(" "),s("p",[t._v("Der oben geschriebene PHP Code würde (zum Beispiel) dann folgende Ausgabe bekommen:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("del.icio.us/first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Eine erste Beschreibung"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("del.icio.us/second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Eine zweite Beschreibung"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("del.icio.us/third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Eine dritte Beschreibung"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("del.icio.us/fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Eine vierte Beschreibung"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("del.icio.us/fifth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Eine fünfte Beschreibung"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);