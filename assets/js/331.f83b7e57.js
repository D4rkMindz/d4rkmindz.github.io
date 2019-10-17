(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{291:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"object-relational-mapper-orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-relational-mapper-orm","aria-hidden":"true"}},[e._v("#")]),e._v(" Object Relational Mapper (ORM)")]),e._v(" "),a("p",[e._v("Der Layer zwischen der Applikation und der Datenbank ist der ORM. In vielen Frameworks ist dieser bereits beinhaltet (bsp. Laravel mit Eloquent).")]),e._v(" "),a("p",[e._v("Den ORM kann man auf viele Arten implementieren, die bekanntesten sind jedoch der "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Mapper"),a("OutboundLink")],1),e._v(" sowie der "),a("a",{attrs:{href:"https://de.wikipedia.org/wiki/Active_Record",target:"_blank",rel:"noopener noreferrer"}},[e._v("Active Record"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"active-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-record","aria-hidden":"true"}},[e._v("#")]),e._v(" Active Record")]),e._v(" "),a("p",[e._v("Der Active Record Pattern ist der bekannteste (und nicht unbedingt der beste). Dieser basiert darauf, dass man ein Object mit den Daten hat. Dieses Object wird dann von einer Basisklasse abgeleitet, welche diverse Funktionen hat. Ein Beispiel für eine solche Funktion ist die save() Funktion, welche die geänderten Daten in die Datenbank speichert.")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Produkt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("name")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"Beispielprodukt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("preis")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Der dazugehörige SQL Befehl wäre")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" products "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VALUES")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Beispielprodukt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Der AR Pattern verstösst jedoch mit der Kombination aus Datenspeicherung sowie der Datenbanklogik gegen das "),a("a",{attrs:{href:"/de/wiki/programmiersprachen/programmiertipps/single-responsibility-principle"}},[e._v("Single Responsebility Principle")]),e._v(" und ist deshalb ein Anti-Pattern (sollte man nicht mehr brauchen).")]),e._v(" "),a("h3",{attrs:{id:"data-mapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-mapper","aria-hidden":"true"}},[e._v("#")]),e._v(" Data Mapper")]),e._v(" "),a("p",[e._v("Die Idee des Data Mapper ist, dass man die Daten in ein Object abspeichert und danach das Object mit einer statischen persist() Methode des EntityManager in die Datenbank abspeichert.")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Produkt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("name")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"Beispielprodukt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("preis")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nEntityManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("persist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$produkt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Die Datenbank Intervention ist mit diesem Pattern strikter geregelt. Auch erfolgt keine Vermischung von Verantwortlichkeiten.")]),e._v(" "),a("h4",{attrs:{id:"fazit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fazit","aria-hidden":"true"}},[e._v("#")]),e._v(" Fazit")]),e._v(" "),a("p",[e._v("Bis jetzt habe ich noch nie ein ORM bewusst angewendet und kann deshalb nicht sagen, was das Beste ist. Jedoch bin ich der Meinung, wenn ich irgendwann ein ORM verwenden muss, dann werde ich vorzugsweise eins verwenden mit Data Mapper Pattern. Jedoch kommt es dabei noch stark auf den Verwendungszweck des ORM an.")]),e._v(" "),a("p",[e._v("Ein interessander "),a("a",{attrs:{href:"http://culttt.com/2014/06/18/whats-difference-active-record-data-mapper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Artikel zum Thema (engl)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);