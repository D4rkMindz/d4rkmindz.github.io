# Alles andere als eine Textwüste
Worddokumente sind der Traum jedes Entwicklers. Diese sind sehr mühsam und übermässig kompliziert in der (automatisierten) Erstellung. Leider können gewisse Kunden nicht mit etwas anderem Umgehen.


In PHP gibt es die [PHPWord](https://github.com/PHPOffice/PHPWord) Library, welche von [PHPOffice](https://github.com/PHPOffice) entwickelt wird. Diese ist aktuell (November 2018) in der Version 0.15. Mit dieser Library kann man Word Dokumente (HTML, ODT, PDF und RTF) verhältnismässig einfach erstellen.


Man hat dazu zwei Optionen. Entweder man nimmt eine bestehende Datei und fügt über Platzhalter (${placeholder}) im Dokument den gewünschten Text ein oder man generiert selber ein Dokument.


Die Lösung mit den Platzhaltern ist jedoch insofern beschränkt, dass man nur einen Textabsatz pro Platzhalter einfügen kann.


Wenn man das Dokument selber erstellt ist man jedoch auch sehr eingeschränkt. Man kann einfache Text-Dokumente sehr gut erstellen. Jedoch wenn es darum geht, Bilder oder Wasserzeichen einzufügen wird das ganze denn schwieriger. Bei einem Dokument mit Wasserzeichen wird empfohlen, dass man eine Vorlage erstellt, diese ''.docx''-Datei dann mit zip entpackt und in der ''word/document.xml''-Datei nach dem Platzhalter sucht und diesen ersetzt. Jedoch muss man dann das Word-Schema beachten. Dieses ist sehr kompliziert und nur folgende Punkte können genauer beschrieben werden:


  * Styles und Eigenschaften sind per ID referenziert. Diese sind Unterschiedlich pro Word-Datei (ACHTUNG BEI MEHREREN TEMPLATES)
  * Word bricht Text auf, um Markierungen für die Word-Versionskontrolle unterzubringen. Man muss also entweder sicherstellen, dass der Platzhalter nicht aufgebrochen ist, oder ihn wieder zusammensetzen, bevor man den eigenen Inhalt hineinsetzt
  * In der ''word/document.xml''-Datei findet man die Section Properties. Man muss jede Section des generierten Inhalts kopieren
  * Falls ein generiertes Dokument Bilder oder externe Inhalte enthält, müssen auch diese Dateien kopiert werden. Ausserdem muss man sicherstellen, dass die IDs noch zusammenpassen
  * Das Styling von Listen ist in Word sehr kompliziert. Wenn man also Listen verwendet, ist es leichter sie mit PHPWord zu styen, anstatt deren Styles im Template zu steuern.






## Fazit
PHPWord ist ein sehr gutes Tool für die Generierung von Word-Dokumenten. Jedoch ist die Library noch lange nicht fertig. Wenn man diesen Fakt im Hinterkopf behält, ist die Library eine sehr gute Ergänzung.