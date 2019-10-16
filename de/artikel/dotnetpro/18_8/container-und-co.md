## .NET, Container und Co.
Heutzutage gibt es verschiedene Lösungen, eine Applikation in einem Container laufen zu lassen. Um ein paar wenige davon zu nennen:
  * [Docker](https://www.docker.com/)
  * [Azure Container Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)
  * [Azure Container Instances](https://azure.microsoft.com/en-us/services/container-instances/)
  * [Kubernetes](https://kubernetes.io/)
  * [Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)



Diese Lösungen helfen alle bei der Virtualisierung von Applikationen. Docker ist hierbei die Virtualisierungslösung.





### Docker
Docker kann man für jedes einzelne Projekt konfigurieren. Diese Konfiguration erfolgt in einem ''dockerfile''. Jedoch muss man nicht das ganze Setup für z. B. .NET selber schreiben. Es gibt bereits Container, welche OpenSource als Basis zur Verfügung stehen. Diese Container bindet man im dockerfile mittels ''FROM'' ein. Der Container eines MS Nano Servers ist ''microsoft/nanoserver:latest''. latest repräsentiert die Version (die aktuellste Version).


Mit dem MS Nano Server ist nun die Grundlage für eine .NET CORE 2.0 Applikation geschaffen. Nun muss man diese Deployen. In .NET gibt es zwei Arten von Deployment:


  * **FDD** Framework Dependent Deployment
  * **FID** Framework Independent Deployment



Bei folgendem dockerfile handelt es sich um ein FDD. Die Dependency ist bereits integriert:


```
FROM microsoft/dotnet
ARG EXE_DIR=.
WORKDIR /app
COPY $EXE_DIR/ ./
```
[Weitere Informationen zu Docker](https://training.play-with-docker.com/#dev)





### Docker .NET API
Für .NET gibt es ebenfalls eine API zum ausführen von Docker. Der Code für das Starten eines Container über dessen ID wäre wie folgt:


```
DockerClient client = new DockerClientConfiguration(new Uri("npipe://localhost/pipe/docker_engine")).createClient()
IList<ContainerListResponse> containers = client.Containers.ListContainersAsync(
  new ContainersListParameters()
  {
    Limit = 100,
  }
).Result;

foreach (var container in containers)
{
  Console.WriteLine($"{container.Image}-{container.ImageID}-{container.ID}");
}

var res = client.Containers.StartContainersAsync("0af2e1fda1257d2e035031c898a89d37c1e94b0bbb9848ef59b7fd0f21da78f02", new ContainerStartParameters());
```
Die [.NET Docker API](https://github.com/Microsoft/Docker.DotNet) abstrahiert den Zugriff auf Docker über .NET. Dies kann durchaus sehr hilfreich sein, wenn man mit verschiedenen Containern arbeitet.





### Fazit
Docker ist eine coole Sache. Allgemein soll Docker das Problem von "Works on my Machine" beheben. Auch das Zusammenspiel mit .NET ist sehr einfach gestaltet mit der .NET Docker API.

