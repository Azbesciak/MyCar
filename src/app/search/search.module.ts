import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchBoxModule} from './search-box/search-box.module';
import {CarouselModule} from '../carousel/carousel.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchBoxModule,
    CarouselModule
  ]
})
export class SearchModule {
}
