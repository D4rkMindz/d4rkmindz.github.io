## img-cache
Um den Datenverbrauch so weit wie möglich zu reduzieren, kann man die Bilder unter Ionic cachen. Dafür gibt es leider nur eine "halbfertige" Erweiterung unter Ionic. [Hier](https://medium.com/ninjadevs/caching-images-ionic-ccf2f4ca8d1f) jedoch ist ein Tutorial, welches eine Caching-Möglichkeit beschreibt.





### Installation
Die ImgCache.js erweiterung einfach herunterladen:


```
npm install imgcache.js --save
```
### Provider
Anschliessend muss man einen Provider erstellen, welcher den img-cache verwaltet.
```
ionic generate provider img
```
Nun findet man unter /src/providers das Verzeichnis "img". In die Datei img.ts. kommt folgender Code:
```javascript
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import ImgCache from 'imgcache.js';

@Injectable()
export class ImgProvider {

  public imgQueue: string[] = [];

  constructor() {
    ImgCache.options.debug = true;
  }

  /**
   * Init imgCache library
   * @return {Promise}
   */
  public initImgCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (ImgCache.ready) {
        resolve();
      } else {
        ImgCache.init(() => resolve(), () => reject());
      }
    });
  }

  /**
   * Cache images
   * @param src {string} - img source
   * @param forceReload {boolean}
   */
  public cacheImg(src: string, forceReload: boolean= false): Promise<any> {
    return new Promise((resolve, reject) => {
      ImgCache.isCached(src, (path: string, success: boolean) => {
        // if not, it will be cached
        if (success && !forceReload) {
          ImgCache.getCachedFileURL(src,
            (originalUrl, cacheUrl) => {
              resolve(cacheUrl);
            },
            (e) => {
              reject(e)
            });
        } else {
          // cache img
          ImgCache.cacheFile(src);
          // return original img URL
          resolve(src);
        }
      });
    });
  }
}
```



### Directive
Nun muss man noch eine [Directive](https://angular.io/api/core/Directive) hinzufügen:


```
ionic generate directive lazy-load
```
Unter /src/directives findet man nun das Verzeichnis "lazy-load". In der lazy-load.ts-Datei kommt folgender Code:
```javascript
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit, OnDestroy, Renderer2
} from '@angular/core';
import {ImgProvider} from "../../providers/img/img";
import {Events, Refresher} from "ionic-angular";


/**
 * This directive is charge of cache the images and emit a loaded event
 */
@Directive({
  selector: '[lazy-load]'
})
/**
 * Class LazyLoadDirective
 */
export class LazyLoadDirective implements OnInit, OnDestroy {
  // attribute inputSrc
  @Input('inputSrc') src = '';
  @Output() loaded = new EventEmitter();

  public loadEvent: any;
  public errorEvent: any;

  constructor(public el: ElementRef,
              public imgCacheService: ImgProvider,
              public renderer: Renderer2,
              public events: Events) {
    **ionicframework.com/docs/api/components/refresher/Refresher/)
    this.events.subscribe('img:reload', (refresher: Refresher, forceReload: boolean) => {
      this.load(forceReload).then(res => {
        refresher.complete();
      });
    });
  }

  ngOnInit() {
    this.load().then(res => {
      console.log('loaded')
    });
  }

  ngOnDestroy() {
    // remove listeners
    this.loadEvent();
    this.errorEvent();
  }

  /**
   * Load image.
   *
   * @param {boolean} forceReload
   * @returns {Promise<any>}
   */
  private load(forceReload: boolean = false) {
    return new Promise(resolve => {
      // get img element
      const nativeElement = this.el.nativeElement;
      const render = this.renderer;

      // add load listener
      this.loadEvent = render.listen(nativeElement, 'load', () => {
        render.addClass(nativeElement, 'loaded');
        this.loaded.emit();
      });

      this.errorEvent = render.listen(nativeElement, 'error', () => {
        nativeElement.remove();
      });

      // cache img and set the src to the img
      this.imgCacheService.cacheImg(this.src, forceReload).then((value) => {
        render.setAttribute(nativeElement, 'src', value);
        resolve();
      });
    });
  }
}
```



### Component
Als letztes muss man noch die lazy-img Component hinzugfügen:
```
ionic generate component lazy-img
```
Danach findet man die "lazy-img.ts"- sowie die "lazy-load.scss"-Datei unter /src/components/lazy-load.
```javascript
import { Component, Input } from '@angular/core';

/**
 * Component in charge of lazy load images and cache them
 */
@Component({
  selector: 'lazy-img',
  template: `
  <div text-center [ngClass]="{ 'placeholder': placeholderActive }">
    <img [inputSrc]="inputSrc" lazy-load (loaded)="placeholderActive = false"/>
  </div>
  `
})
export class LazyImgComponent {

  @Input() inputSrc: string;

  public placeholderActive: boolean = true;

}
```
```css
lazy-img {
  div {
    background-color: transparent;
    color: gray;
    font-family: "Roboto", "Helvetica Neue", sans-serif;
    font-size: inherit;
    height: inherit;
    min-height: inherit;
    min-width: inherit;
    position: relative;
    transition: 2s background-color ease;
    width: 100%;
  }

  .placeholder {
    background-color: grey;

    &::before {
      align-items: center;
      content: '
f30e';
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
    }
  }

  img {
    display: block;
    height: inherit;
    position: relative;
    width: 100%;
    z-index: 1;
  }
}
```



### Import
Damit man nun das Tag <lazy-img> verwenden kann, muss man noch in der app.module.ts-Datei (/de/src/app) die Komponenten unter folgenden Punkten hinzufügen:


LazyImgComponent  -> declarations, entryComponents


LazyLoadDirective  -> declarations


ImgProvider  -> providers


[app.module.ts (stand 04.09.2017)](https://github.com/D4rkMindz/login-app/blob/9e53ee7d6dc7f610be8d0c216cddf7c7d99527cd/src/app/app.module.ts)
