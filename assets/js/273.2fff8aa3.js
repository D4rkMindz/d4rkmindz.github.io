(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{609:function(e,n,r){"use strict";r.r(n);var a=r(4),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"normalisierung"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#normalisierung","aria-hidden":"true"}},[e._v("#")]),e._v(" Normalisierung")]),e._v(" "),r("p",[e._v("Bei der Normalisierung geht es darum, ein sinnvolles "),r("router-link",{attrs:{to:"/de/wiki/programmiersprachen/datenbanken/#datenbankschema"}},[e._v("Datenbankschema")]),e._v(" zu haben. Das Hauptziel dabei ist, Redundanzen zu vermeiden. Wenn man zum Beispiel in einer Datenbank mehrere gleiche Attribute in einer Zeile hat, und man das Schema ändert, kann es zu fehlerhaften Daten kommen. Diese nennt man dann Anomalien.")],1),e._v(" "),r("p",[e._v("Um gegen Anomalien vorzugehen gibt es verschieden Datenbankschemen. Hierbei spricht man von Normalformen (NF). Eine Normalform kann nur gegeben sein, wenn die vorherige Normalform auch gegeben ist. Es gibt sieben Normalformen:")]),e._v(" "),r("ul",[r("li",[e._v("0NF")]),e._v(" "),r("li",[e._v("1NF")]),e._v(" "),r("li",[e._v("2NF")]),e._v(" "),r("li",[e._v("3NF")]),e._v(" "),r("li",[e._v("BCNF")]),e._v(" "),r("li",[e._v("4NF")]),e._v(" "),r("li",[e._v("5NF\nDie genannten Normalformen werden weiter unten genauer erklärt.")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"_0nf-nullte-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0nf-nullte-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF - Nullte Normalform")]),e._v(" "),r("p",[e._v("Die nullte Normalform wird auch unnormalisiert genannt. Eine Tabelle in der nullten normalform sieht wie folgt aus:")]),e._v(" "),r("p",[e._v("^CD_ID           ^Album                                  ^Erscheinungsjahr ^Titelliste |\n|@#BEE3FF:4711 |@#FFB4B4:Anastacia – Not That Kind       |2000             |@#FFB4B4:{1. Not That Kind, 2. I’m Outta Love, 3. Cowboys & Kisses}|\n|@#BEE3FF:4712 |@#FFB4B4:Pink Floyd – Wish You Were Here |1975             |{1. Shine On You Crazy Diamond}|\n|@#BEE3FF:4713 |@#FFB4B4:Anastacia – Freak of Nature     |2001             |{1. Paid my Dues}|")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"_1nf-erste-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1nf-erste-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF - Erste Normalform")]),e._v(" "),r("p",[e._v("Auf "),r("a",{attrs:{href:"https://de.wikipedia.org/wiki/Normalisierung_(Datenbank)#Erste_Normalform_.281NF.29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),r("OutboundLink")],1),e._v(" ist die erste Normalform wie folgt definiert:")]),e._v(" "),r("p",[e._v("**")]),e._v(" "),r("p",[e._v('Wenn man das ein wenig verständlicher beschreiben möchte, kann man sagen, dass kein Attribut eine "Liste" von Daten enthalten darf. Das bedeutet, wenn ich in einer Datenbank eine Adresse speichern muss, muss ich die Adresse aufteilen in Land, Kanton, Dorf/Stadt, PLZ, Strasse, Hausnummer, etc. Auf die oben gezeigte Tabelle würde sich das so auswirken, dass man pro Titel eine Zeile hat. Jedoch weiss man danach nicht mehr, in welcher Reihenfolge die Titel auf dem Album sind. Ebenso gibt es keinen '),r("a",{attrs:{href:"/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key"}},[e._v("eindeutigen Schlüssel")]),e._v(" mehr. Deshalb fügt man ein neues Attribut für die Position des Tracks im Album ein (und der Lesbarkeit halber wird Titelliste in Titel umbenannt). Auch das Attribut Album wird aufgeteilt in Albumtitel und Interpret. Nach der ersten Normalform normalisiert, würde diese Tabelle wie folgt aussehen:")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("CD_Liste")]),e._v("\n^CD_ID         ^Interpret ^Album                ^Erscheinungsjahr ^Track     ^Titel                          |\n|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:1|{1. Not That Kind,}            |\n|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:2|{2. I’m Outta Love}            |\n|@#BEE3FF:4711 |Anastacia | Not That Kind       |2000             |@#BEE3FF:3|{3. Cowboys & Kisses}          |\n|@#BEE3FF:4712 |Pink Floyd| Wish You Were Here  |1975             |@#BEE3FF:1|{1. Shine On You Crazy Diamond}|\n|@#BEE3FF:4713 |Anastacia | Freak of Nature     |2001             |@#BEE3FF:1|{1. Paid my Dues}              |")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"_2nf-zweite-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2nf-zweite-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF - Zweite Normalform")]),e._v(" "),r("p",[e._v("Auf "),r("a",{attrs:{href:"https://www.hdm-stuttgart.de/~riekert/lehre/db-kelz/chap4.htm#Chap4.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDM-Stuttgart"),r("OutboundLink")],1),e._v(" ist die zweite Normalform wie folgt definiert:")]),e._v(" "),r("p",[e._v("**")]),e._v(" "),r("p",[e._v("Anders beschrieben: Wenn manche Einträge Redundant sind, kann man diese in eine Neue Tabelle einfügen, jedoch mit einem klar zugewiesenen Primärschlüssel (bsp.: CD_ID).")]),e._v(" "),r("p",[e._v("2NF wird in dem unten dargestellten Beispiel verletzt:")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("CD_Liste")]),e._v("\n^CD_ID^Interpret          ^Album                 ^Erscheinungsjahr ^Track     ^Titel                          |\n|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:1|{1. Not That Kind,}            |\n|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:2|{2. I’m Outta Love}            |\n|1    |@#FFB4B4:Anastacia |@#FFB4B4:Not That Kind|@#FFB4B4:2000    |@#BEE3FF:3|{3. Cowboys & Kisses}          |\n|2    |Pink Floyd         | Wish You Were Here   |1975             |@#BEE3FF:1|{1. Shine On You Crazy Diamond}|\n|3    |Anastacia          | Freak of Nature      |2001             |@#BEE3FF:1|{1. Paid my Dues}              |")]),e._v(" "),r("p",[e._v("Die richte Aufteilung der Attribute nach der zweiten Normalform ist dann wie folgt:")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("CD")]),e._v("\n^CD_ID      ^Interpret ^Album                ^Erscheinungsjahr |\n|@#BEE3FF:1 |Anastacia |Not That Kind         |2000            |\n|@#BEE3FF:2 |Pink Floyd| Wish You Were Here   |1975            |\n|@#BEE3FF:3 |Anastacia | Freak of Nature      |2001            |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Liste")])]),e._v(" "),r("p",[e._v("^CD_ID      ^Track     ^Titel                     |\n|@#BEE3FF:1 |@#BEE3FF:1|Not That Kind             |\n|@#BEE3FF:1 |@#BEE3FF:2|I’m Outta Love            |\n|@#BEE3FF:1 |@#BEE3FF:3|Cowboys & Kisses          |\n|@#BEE3FF:2 |@#BEE3FF:1|Shine On You Crazy Diamond|\n|@#BEE3FF:3 |@#BEE3FF:1|Paid my Dues              |")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"_3nf-dritte-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3nf-dritte-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF - Dritte Normalform")]),e._v(" "),r("p",[e._v("**")]),e._v(" "),r("p",[e._v("Die 3NF wird erreicht, indem man Attribute, welche nicht von dem "),r("a",{attrs:{href:"/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key"}},[e._v("Primärschlüssel (CD_ID)")]),e._v(" abhängig sind, in eine neue Tabelle einfügt. Das heisst, dass man in der Tabelle CD den Interpret entfernt. Damit die CD aber immer noch einem Interpreten zugewiesen ist, vergibt man eine Interpreten_ID. In der Tabelle Interpret fügt man zusätzlich noch Merkmale hinzu, damit der Interpret unverwechselbar ist.")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Album")])]),e._v(" "),r("p",[e._v("^ID           ^Titel               ^Erscheinungsjahr |\n|@#BEE3FF:1   |Not That Kind        |2000            |\n|@#BEE3FF:2   |Wish You Were Here   |1975            |\n|@#BEE3FF:3   |Freak of Nature      |2001            |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Interpret")])]),e._v(" "),r("p",[e._v("^ID           ^Interpret ^Gründungsjahr |\n|@#BEE3FF:1   |Anastacia |1999          |\n|@#BEE3FF:2   |Pink Floyd|1960          |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Tracks")])]),e._v(" "),r("p",[e._v("^ID           ^Interpret_ID ^Album_ID   ^Track          ^Titel                     |\n|@#BEE3FF:1   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:1     |Not That Kind             |\n|@#BEE3FF:2   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:2     |I’m Outta Love            |\n|@#BEE3FF:3   |@#FFFCA8:1   |@#FFFCA8:1 |@#FFFCA8:3     |Cowboys & Kisses          |\n|@#BEE3FF:4   |@#FFFCA8:2   |@#FFFCA8:2 |@#FFFCA8:1     |Shine On You Crazy Diamond|\n|@#BEE3FF:5   |@#FFFCA8:1   |@#FFFCA8:3 |@#FFFCA8:1     |Paid my Dues              |")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"bcnf-boyce-codd-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bcnf-boyce-codd-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" BCNF - Boyce-Codd-Normalform")]),e._v(" "),r("p",[e._v("Ein Relationenschema ist in BCNF, wenn es in der 3NF ist.")]),e._v(" "),r("p",[e._v("**")]),e._v(" "),r("p",[e._v("Das heisst, man sortiert jeden Daten aus, welche voneinander abhängig sind, jedoch nur einer ist abhänging vom Primärschlüssel. Um hier wieder ein Beispiel zu machen, wird eine andere Tabelle dargestellt. Wichtig: Ein Spieler kann mehrere Sportarten in verschiedenen Klubs mache, jedoch nie in zwei Klubs Sport machen, welche die gleiche Sportart anbieten. Ausserdem kann nur ein Klub eine Sportart anbieten:")]),e._v(" "),r("h5",{attrs:{id:"_3-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Normalform")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Sport")]),e._v("\n^Nachname         ^Klub                     ^Sportart           |\n|@#BEE3FF:Mbolo   |@#BEE3FF:FC Basel        |@#FFB4B4:Fussball  |\n|@#BEE3FF:Meier   |@#BEE3FF:FC Basel        |@#FFB4B4:Fussball  |\n|@#BEE3FF:Federer |@#BEE3FF:TC Basel        |@#FFB4B4:Tennis    |\n|@#BEE3FF:Büetz   |@#BEE3FF:SSK Chur        |@#FFB4B4:Ski       |\n|@#BEE3FF:Meier   |@#BEE3FF:SEHC Winterthur |@#FFB4B4:Eishockey |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Spieler")]),e._v("\n^Nachname         ^Vorname |\n|@#BEE3FF:Mbolo   |Loris   |\n|@#BEE3FF:Meier   |Peter   |\n|@#BEE3FF:Federer |Roger   |\n|@#BEE3FF:Büetz   |Michael |")]),e._v(" "),r("p",[e._v("Da nun aber die Sportart überflüssig ist in der 3. Normalform, schreibt man diese in eine eigene Tabelle in der BCNF:")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Sport")]),e._v("\n^Nachname         ^Klub                     |\n|@#BEE3FF:Mbolo   |@#BEE3FF:FC Basel        |\n|@#BEE3FF:Meier   |@#BEE3FF:FC Basel        |\n|@#BEE3FF:Federer |@#BEE3FF:TC Basel        |\n|@#BEE3FF:Büetz   |@#BEE3FF:SSK Chur        |\n|@#BEE3FF:Meier   |@#BEE3FF:SEHC Winterthur |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Spieler")]),e._v("\n^Nachname         ^Vorname |\n|@#BEE3FF:Mbolo   |Loris   |\n|@#BEE3FF:Meier   |Peter   |\n|@#BEE3FF:Federer |Roger   |\n|@#BEE3FF:Büetz   |Michael |")]),e._v(" "),r("p",[e._v("Tabelle: "),r("strong",[e._v("Klubs")]),e._v("\n^Klub                     ^Sportart  |\n|@#BEE3FF:FC Basel        |Fussball  |\n|@#BEE3FF:FC Basel        |Fussball  |\n|@#BEE3FF:TC Basel        |Tennis    |\n|@#BEE3FF:SSK Chur        |Ski       |\n|@#BEE3FF:SEHC Winterthur |Eishockey |")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"_4nf-5nf-vierte-und-funfte-normalform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4nf-5nf-vierte-und-funfte-normalform","aria-hidden":"true"}},[e._v("#")]),e._v(" 4NF/5NF - Vierte und Fünfte Normalform")]),e._v(" "),r("p",[e._v("Die vierte Normalform wird nicht verwendet. Bei der Erstellung relationaler Datenmodelle hat sich die 3. NF als praxistauglich erwiesen und wird in der überwältigenden Mehrheit relationaler Datenmodelle eingesetzt. 1. und 2. NF kommen dann zum Einsatz, wenn Daten in Systeme geladen werden (z. B. im DWH Bereich) oder eine Normalisierung, aufgrund einer geringeren Relevanz und zugunsten von besserer Performance, in den Hintergrund tritt (z. B. Reporting).")]),e._v(" "),r("p",[e._v("Die fünfte Normalform kann nicht angewendet werden, da schon die vierte Normalform nicht gebraucht wird.")])])}),[],!1,null,null,null);n.default=t.exports}}]);