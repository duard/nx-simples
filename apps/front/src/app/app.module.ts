import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InspectorModule } from '@ngneat/inspector';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, environment.production ? [] : InspectorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
