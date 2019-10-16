## Container im Griff
Docker Images werden öffentlich im [Docker Hub](https://hub.docker.com/) zur Verfügung gestellt. Wenn man jedoch nicht möchte, dass die eigenen Images öffentlich verfügbar sind, kann man sich entweder einen premium Account von Docker zutun oder die [Azure Container Registry (ACR)](https://azure.microsoft.com/en-us/services/container-registry/) verwenden. Die Azure Container Registry ist mit 11.18 Euro monatlich eine kostengünstige Alternative.





### Verwendung 
Zur Verwendung von ACR gibt es von Microsoft das [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest). Dieses bietet die Möglichkeit sich direkt mit dem Account lokal zu verbinden und danach die Docker Images zu pullen, respektive je nach konfigurierter Berechtigung auch zu pushen. Wenn man der Besitzer (Owner) einer Registry ist, kann man dieser Registry auch weitere Benutzer hinzufügen, welche dann entweder Lese- (pull) oder Schreibberechtigungen (push) haben.





### Webhooks
Mit der ACR ist es möglich, ein automatisches Deployment von Docker Images zu erstellen. Dazu verwendet man die von der ACR zur Verfügung gestellten Webhooks. Diese senden über ein HTTP POST Request die benötigten Daten. Je nach SKU (Stock-Keeping Unit) hat man dabei mehr oder weniger Webhooks zur Verfügung.





### Fazit
Um private Docker Images zentral verfügbar zu machen gibt es diverse Lösungen. Azure Container Registry ist eine gute und günstige Alternative, welche einfach zu bedienen ist.