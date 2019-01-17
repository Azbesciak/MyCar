import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CARS_TOKEN} from './cars-provider';
import {CarsProviderService} from './cars-provider.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
      provide: CARS_TOKEN,
      useClass: CarsProviderService
    }
  ],
  declarations: []
})
export class CarsModule {
}
