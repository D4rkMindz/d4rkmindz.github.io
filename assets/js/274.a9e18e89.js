(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{509:function(e,n,t){"use strict";t.r(n);var r=t(4),s=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"primarschlussel-primary-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primarschlussel-primary-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Primärschlüssel (Primary Key)")]),e._v(" "),t("h3",{attrs:{id:"tl-dr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr","aria-hidden":"true"}},[e._v("#")]),e._v(" TL;DR")]),e._v(" "),t("p",[e._v("Ein Primary Key (Primärschlüssel) ist ein eindeutiger Wert aus einem oder mehreren Attributen, welcher auf einen Datensatz (Entität) verweist")]),e._v(" "),t("h3",{attrs:{id:"pks-in-rdbms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pks-in-rdbms","aria-hidden":"true"}},[e._v("#")]),e._v(" PKs in RDBMS")]),e._v(" "),t("p",[e._v("In den oft verwendeten RDBMS ist der "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=Mpkg0RnkMkw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Primärschlüssel"),t("OutboundLink")],1),e._v(" sehr wichtig. Da man (meistens) eine Zeile aus einer Datenbank abfragen möchte muss das RDBMS diese Zeile auch eindeutig identifizieren können. Genau aus diesem Grund braucht man eben den Primärschlüssel. Um das sinnvoll zu erklären sieht man unten eine Tabelle")]),e._v(" "),t("p",[e._v("^Name       ^Vorname      ^Anstellung            ^Lohn  ^Soz. Vers. Nr. |\n^(text)     ^(text)       ^(text)                ^(int) ^(text, unique) |\n|Lustig     |Peter        |Wissenschaftler       |4550  | 123-45-69-001 |\n|Schwarzer  |Alice        |Frauenrechtlerin      |3750  | 123-65-96-156 |\n|Thatcher   |Maragret     |Iron Lady             |8630  | 356-45-86-126 |\n|Fist       |Peter        |Wissenschaftler       |5560  | 456-78-91-234 |\n|Schwarzer  |Herbert      |Finanzangestellter    |8630  | 785-23-35-789 |\n|Lustig     |Schantall    |Sekretärin            |4550  | 123-45-65-001 |")]),e._v(" "),t("p",[e._v("Wenn ich jetzt die Zeile von Peter Lustig möchte, wird es schwer, nur diese aus der Datenbank zu holen.")]),e._v(" "),t("p",[e._v("Wenn ich alle Datensätze mit "),t("strong",[e._v("Peter")]),e._v(" (Vorname) hole bekomme ich:\n|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |\n|Fist       |Peter        |Wissenschaftler      |5560  | 456-78-91-234 |\nWenn ich alle Datensätze mit "),t("strong",[e._v("Lustig")]),e._v(" (Nachname) hole bekomme ich:")]),e._v(" "),t("p",[e._v("|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |\n|Lustig     |Schantall    |Sekretärin           |4550  | 123-45-65-001 |\nWenn ich alle Datensätze mit "),t("strong",[e._v("Wissenschaftler")]),e._v(" (Anstellung) hole bekomme ich:")]),e._v(" "),t("p",[e._v("|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |\n|Fist       |Peter        |Wissenschaftler      |5560  | 456-78-91-234 |\nWenn ich alle Datensätze mit "),t("strong",[e._v("4550")]),e._v(" (Lohn) hole bekomme ich:")]),e._v(" "),t("p",[e._v("|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |\n|Lustig     |Schantall    |Sekretärin           |4550  | 123-45-65-001 |\nWenn ich alle Datensätze mit "),t("strong",[e._v("Lustig")]),e._v(" (Sozialversicherungsnummer ) hole bekomme ich nun endlich nur Peter Lustig:")]),e._v(" "),t("p",[e._v("|Lustig     |Peter        |Wissenschaftler      |4550  | 123-45-69-001 |")]),e._v(" "),t("p",[e._v("Das Problem hierbei ist, dass man, wenn man zum Beispiel eine Angestelltenidentitätskarte drucken möchte, man nich die (einzig) einzigartige Sozialversicherungsnummer darauf drucken kann, da diese Daten ja privat sind. Deshalb empfielt es sich immer, eine ID (oder bei Büchern ISBN) zu vergeben. Eine Angestellten ID kommt immer nur einmal in einer Datenbank vor. Ausserdem ist der Vorteil, dass man über die ID die Datensätze auch mit einer Anderen Datenbank verbinden kann. Am Schluss würde die Datenbank dann wie folgt aussehen:\n^ID            ^Name       ^Vorname      ^Anstellung            ^Lohn  ^Soz. Vers. Nr. |\n^(int, unique) ^(text)     ^(text)       ^(text)                ^(int) ^(text, unique) |\n|123           |Lustig     |Peter        |Wissenschaftler       |4550  | 123-45-69-001 |\n|452           |Schwarzer  |Alice        |Frauenrechtlerin      |3750  | 123-65-96-156 |\n|785           |Thatcher   |Maragret     |Iron Lady             |8630  | 356-45-86-126 |\n|109           |Fist       |Peter        |Wissenschaftler       |5560  | 456-78-91-234 |\n|128           |Schwarzer  |Herbert      |Finanzangestellter    |8630  | 785-23-35-789 |\n|002           |Lustig     |Schantall    |Sekretärin            |4550  | 123-45-65-001 |\nSo verhindert man, dass man falsche Daten bekommt (und z.B. den Lohn doppelt an einen Angestellten überweist).")])])}),[],!1,null,null,null);n.default=s.exports}}]);