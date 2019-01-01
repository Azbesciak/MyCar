import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultListComponent} from './result-list.component';
import {ResultListRoutingModule} from './result-list-routing.module';
import {CarsListModule} from '../../cars/cars-list/cars-list.module';
import {SearchBoxModule} from '../../cars/search-box/search-box.module';

@NgModule({
  declarations: [ResultListComponent],
  imports: [
    CommonModule,
    ResultListRoutingModule,
    SearchBoxModule,
    CarsListModule
  ]
})
export class ResultListModule {
}
