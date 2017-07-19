import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { CoreModule } from './core/core.module';
import { ReportModule } from './reportModule/report.module';
import { AppComponent } from './app.component';
import { ReportManagerComponent } from './components/report-manager/report-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    ReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
