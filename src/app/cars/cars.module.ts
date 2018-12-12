import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CARS_TOKEN} from './cars-provider';
import {CarsProviderService} from './cars-provider.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
      provide: CARS_TOKEN,
      useClass: CarsProviderService
    }
  ]
})
export class CarsModule {
}
