import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsCardCarouselComponent} from './cars-card-carousel.component';
import {CarouselModule} from '../../ui/carousel/carousel.module';
import {MatCardModule} from '@angular/material';
import {CarsModule} from '../cars.module';
import {CarOfferModule} from '../car-offer/car-offer.module';
import {FavouriteBtnModule} from '../favourite-btn/favourite-btn.module';

@NgModule({
  declarations: [CarsCardCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CarsModule,
    MatCardModule,
    CarOfferModule,
    FavouriteBtnModule
  ],
  exports: [CarsCardCarouselComponent]
})
export class CarsCardCarouselModule {
}
