import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsCardCarouselComponent} from './cars-card-carousel.component';
import {CarouselModule} from '../../ui/carousel/carousel.module';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {CarsModule} from '../cars.module';
import {CarOfferModule} from '../car-offer/car-offer.module';

@NgModule({
  declarations: [CarsCardCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CarsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CarOfferModule
  ],
  exports: [CarsCardCarouselComponent]
})
export class CarsCardCarouselModule {
}
