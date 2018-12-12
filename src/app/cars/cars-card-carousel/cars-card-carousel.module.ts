import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsCardCarouselComponent} from './cars-card-carousel.component';
import {CarouselModule} from '../../carousel/carousel.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [CarsCardCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MatCardModule
  ],
  exports: [CarsCardCarouselComponent]
})
export class CarsCardCarouselModule {
}
