## Sicherheit für die Webapplikation
Praktisch jede Webapplikation hat Daten, welche nicht öffentlich sind. Diese Daten werden mit einer Authentifizierung, einem Login, geschützt. Es gibt verschiedene Arten, einen Benutzer sich einloggen zu lassen. In .NET gibt es das [ASP.NET Core Identity Framework](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-2.1&tabs=visual-studio), welches folgende Authentifizerungstypen zulässt:


  * Individuelle Authentifizierung mit bspw. Benutzername und Passwort
  * Authentifizierung über OAuth2 Provider
  * Azure Active Directory (AAD)
  * Windows-Authentifierung
  * Active-Directory (AD) Authentifizierung
  * Token Authentifizierung

Jede Authentifizierungsmethode hat ihre Vor- und Nachteile bei der Integration sowie bei der Verwendung.


Das Framework abstrahiert eine Menge des Authentifizierungsprozesses, jedoch muss man es nur richtig konfigurieren.





### Fazit
Es gibt sehr viele Möglichkeiten Daten vor der Öffentlichkeit zu schützen. Welche Authentifizierungsmethode man wählt kommt ganz auf den Use-Case drauf an. Bei einer Enterprise Applikation empfiehlt sich eher die Verwendung einer AD- oder AAD-Authentifizierung. Ein Login mit den Microsoft Office Credentials zu ermöglichen lohnt sich vorallem für KMU-Applikationen, da diese für den Benutzer sehr einfach sind. Social-Media OAuth 2 Authentifizierungen sind eher bei öffentlichen Plattformen, welche über das Web oder über eine Applikation verfügbar sind, zu empfehlen.


Eine Windows Authentifizierung ist heute nicht mehr wirklich im Einsatz. Die Ausnahme sind alte Enterprise Applikationen.