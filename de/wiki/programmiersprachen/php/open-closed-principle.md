## Open/Closed Principle
Das Open/Closed Principle wird von Bertrand Meyer wie folgt beschrieben:





"Eine Klasse sollte sowohl offen für Erweiterungen sowie verschlossen für Modifikationen sein."





Das Ziel ist, dass man nichts mehr an den eigentlichen Klassen verändert (der Kern bleibt gleich; "Do not hack the core"). Erweiterungen können je nach Bedarf erstellt werden. Eine Erweiterung ist dann abgeleitet (extended) von der Ursprungsklasse. Nur in ganz seltenen Fällen, wenn es gar nicht mehr anders geht (und es geht immer anders, passender wäre eher, wenn die Zeit dazu fehlt), kann man die Ursprungsklasse verändern.


 


Ein gutes Beispiel für Open/Closed Principle Code:


```
const shortid = require('shortid');

class Request {
  constructor(type, id = shortid.generate()) {
    this.id = id;
    this.type = type;
  }
}

class AlbumRequest extends Request {
  constructor(album, type) {
    super(type);
  }
}

class SaveAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'save');
  }
}

class loadAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'load');
  }
}

class UpdateAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'update'); 
  }
}

class RequestHandler {
  handleRequest(request) {
    
  }
}

class SaveAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('Saving Album');
    return {saved: true};
  }
}


class LoadAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('Loading Album');
    return {loaded: true};
  }
}

class UpdateAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('Updating Album');
    return {updated: true};
  }
}

class UnknownRequestHandler extends RequestHandler {
  handle(request) {
    console.error(`Unknown request ${request}`);
  }
}
class AlbumService {
  constructor() {
    this._requestHandlers = new Map();
    this._requestHandlers.set('save', new SaveAlbumRequestHandler());
    this._requestHandlers.set('load', new LoadAlbumRequestHandler());
    this._requestHandlers.set('update', new UpdateAlbumRequestHandler());
  }
  
  handleRequest(request) {
    const response = {requestId: request.id};
    const requestHandler = this._requestHandlers.get(request.type);
    if (requestHandler) {
      response.result = requestHandler.handle(request);
    }
    return new Promise.resolve(response);
  }
}

// Usage like this
const album = new Album({artist: 'Me', title: 'In the shower', year: 2018});
const service = new AlbumService();

(async () => {
  const response1 = await service.handleRequest(new SaveAlbumRequest(album));
  const response2 = await service.handleRequest(new LoadAlbumRequest(album));
  const response3 = await service.handleRequest(new UpdateAlbumRequest(album));
})();
```