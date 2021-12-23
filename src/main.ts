import { enableProdMode } from '@angular/core';
// 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// platformBrowserDynamic : 엥귤러가 우리가 만든 코드를 컴파일을 해서 실제 실행될 수 있는 자바스크립트 코드로 만들어내는데 브라우저에서 다이나믹하게 동적으로 하겠다는 메서드이다.
// bootstrapModule : 우리가 사용할 어플리케이션의 루트모듈을 설정하고 앵귤러 어플리케이션을 실행시키는 것이다. 루트모듈을 부트스트랩한다 라고도 한다.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
