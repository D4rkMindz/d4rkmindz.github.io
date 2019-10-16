## Internationalisierung und Lokalisierung
Die Welt umfasst gesamt 194 Länder auf der Erde viele unterscheiden sich allein durch die Sprache. Bei der Lokalisierung kann man auch von einer Angleichung eines Produktes an die Kultur der jeweiligen Staaten reden.

----

### Lokalisierung
Wie genau die Lokalisierung (l10n[10 Buchstaben zwischen l und n, "localization"]) definiert ist, kommt auf die Person, mir der man spricht drauf an. [W3](https://www.w3.org/International/questions/qa-i18n) jedoch hat eine Richtlinie erstellt, welche zwar nicht alles definiert, jedoch schon sehr viel umfasst:
  - Numerische, Datums- und Zeitformate
  - Einsatz von Währung
  - Tastaturgebrauch
  - Vergleichung und Sortierung
  - Symbole, Zeichen und Farben
  - Texte und Grafiken, die Verweise auf Objekte, Aktionen oder Konzepte beinhalten, die in einem bestimmten
  - Kulturkreis fehlinterpretiert oder als unsensibel angesehen werden können
  - Abweichende gesetzliche Bestimmungen
  - und viele weitere Dinge.

----

### Internationalisierung
**www.w3.org/International/questions/qa-i18n#i18n|W3]])//


Internationaliserung hat genau wie Lokalisierung (l10n) [Numeronym](https://de.wikipedia.org/wiki/Numeronym). Dieses Numeronym ist i18n (18 Buchstaben zwischen i und n). Bei der Internationalisierung oder auch Globalisierung geht es darum, seinen Code möglichst allgemein zu erstellen. Dies würde bedeuten:
  - Gebrauch von [UNICODE](https://unicode-table.com/de/), oder der korrekte gebrauch von alten Zeichenketten (z. B. ASCII) welche die Programmierung und Lokalisierung der App nicht einschränken
  - Funktionen unterstützen, welche nicht vor dem Einsatz der Lokalisierung verwendet werden dürfen (Bsp.: [CSS](/wiki/programmiersprachen/css) für vertikalen Text, oder das Hinzufügen von [Document Type Definition](https://de.wikipedia.org/wiki/Dokumenttypdefinition)).
  - Code so gestalten, dass er alles, was in der Lokalisierung erwähnt ist, unterstütz.
  - Lokalisierbare Inhalte aus dem Quellcode trennen. Zum Beispiel einen Text aus einer .txt Datei laden.
