import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchBoxModule} from '../../cars/search-box/search-box.module';
import {CarsCardCarouselModule} from '../../cars/cars-card-carousel/cars-card-carousel.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchBoxModule,
    CarsCardCarouselModule
  ]
})
export class SearchModule {
}
