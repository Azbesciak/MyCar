import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list.component';
import {CarOfferModule} from '../car-offer/car-offer.module';
import {MatCardModule} from '@angular/material';
import {FavouriteBtnModule} from '../favourite-btn/favourite-btn.module';

@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarOfferModule,
    MatCardModule,
    FavouriteBtnModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsListModule { }
