import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HttpClientService } from './http-client/http-client.service';
import { EventsService } from './broadcast-event/broadcaster';
import { APIService } from './app-config/app-config.service';


@NgModule({
  imports: [],
  providers: [
    HttpClientService,
    EventsService,
    APIService
  ],
  exports: []
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
