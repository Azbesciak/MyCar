import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list.component';
import {CarOfferModule} from '../car-offer/car-offer.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarOfferModule,
    MatCardModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsListModule { }
