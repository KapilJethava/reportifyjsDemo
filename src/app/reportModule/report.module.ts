import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [],
  providers: [],
  exports: []
})

export class ReportModule {
  constructor(@Optional() @SkipSelf() parentModule: ReportModule) {
    if (parentModule) {
      throw new Error(
        'ReportModule is already loaded. Import it in the AppModule only');
    }
  }
}
