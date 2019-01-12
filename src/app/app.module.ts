import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './pages/routing-module/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './ui/header/header.module';
import {CarsModule} from './cars/cars.module';
import {registerLocaleData} from '@angular/common';

import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';

registerLocaleData(localePl, 'pl-PL', localePlExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    CarsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: (document['locale'] ? document['locale'] : 'pl-PL') }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
