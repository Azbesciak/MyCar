import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsCardCarouselComponent} from './cars-card-carousel.component';
import {CarouselModule} from '../../carousel/carousel.module';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {CarsModule} from '../cars.module';

@NgModule({
  declarations: [CarsCardCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CarsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CarsCardCarouselComponent]
})
export class CarsCardCarouselModule {
}
