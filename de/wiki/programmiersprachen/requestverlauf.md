## Requestverlauf
Ein [HTTP-Request](/de/wiki/divers/http-request) wird von einem Browser ausgelöst und an einen Server gesendet. Dieser Request durchläuft verschiedene Elemente.



### Request
| Pos. |
| ---- | Handler ^
| 1    | Browser |
| 2    | Apache |
| 3    | PHP |
| 4    | Frontcontroller |
| 5    | Bootstrapping(Config, [Composer](https://lernjournal.d4rkmindz.ch/doku.php/installationen:composer), .env Files) |
| 6    | Routing & Dispatching |
| 7    | Controlleraction |
| 8    | Service |
| 9    | Repository |
| 10   | Table (oder API, etc.)|
| 11   | Querybuilder |
| 12   | PDO |
| 13   | MySQL (DBMS) |
| 13.5 | Engine (bsp. InnoDB) |
| 14   | Speichermedium (Festplatte, RAM) |
Ein Request wird von einem **Browser** zum Webserver (**Apache**) gesendet. Dort startet der Request **PHP**. Der **[FrontController](https://de.wikipedia.org/wiki/Front_Controller)** übernimmt den Request und startet das **Bootstrapping**. Danach wird über den **Router** die Route ermittelt und an den **Dispatcher** weitergeleitet, welcher mit diesen Informationen eine **Controlleraction** startet. Von dieser Controlleraction aus wird ein **Service** gestartet, welche sich die benötigten Daten aus einem **Repository** holt. Das Repository greift auf eine **Datenbank** (oder API, etc) zu, welche mittels **Querybuilder** und **PDO** Daten aus einer **MySQL** Datenbank holt. Die Datenbank wird mit einer **Engine** betrieben, welche die Daten aus vordefinierten **Speichermedien** holt.
### Response
| Pos. |
| ---- | Handler ^
| 14 | Speichermedium (Festplatte, RAM)  |
| 13.5   | Engine (bsp. InnoDB) |
| 13   | MySQL (DBMS) |
| 12   | PDO |
| 11   | Querybuilder |
| 10    | Daten als Array bekommen |
| 9    | Mapping in Entity (Hydrator) |
| 8    | Service (Businesslogik) |
| 6    | Controlleraction -> View (Rendering, Template) |
| 5    | Response erstellen & senden |
| 4    | (Bootstrapping) |
| 3    | Froncontroller |
| 3    | PHP |
| 2    | Apache|
| 1    | Browser |
Der Response bekommt die Daten der **Festplatte** von der **Engine**, welche von dem [RDBMS](/de/wiki/programmiersprachen/datenbanken/#datenbank_modelle) **MySQL** verwaltet werden. Der **PDO**-"Treiber" retourniert die Daten an den **Querybuilder**, welche als Array in eine **Entity** gemappt werden (mittels Hydrator). Die **Businesslogik** veratbeitet danach diese Daten und übergibt sie der Controlleraction, welche diese danach der **View** übergibt. In der View werden die Daten in ein Template gerendert. Mit der gerenderten View wird ein **Response erstellt**, welcher über den Frontcontroller zu **PHP** und schliesslich zu **Apache** weitergeleitet wird. Apache sendet danach den Response über das Internet zurück an den **Browser**.
