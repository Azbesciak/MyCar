import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchBoxModule} from './search-box/search-box.module';
import {CarsCardCarouselModule} from '../cars/cars-card-carousel/cars-card-carousel.module';
import { CarsModule } from '../cars/cars.module';
import { CarsListModule } from '../cars/cars-list/cars-list.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchBoxModule,
    CarsCardCarouselModule,
    CarsModule,
    CarsListModule
  ]
})
export class SearchModule {
}
