import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    NgxGalleryModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule {
}
