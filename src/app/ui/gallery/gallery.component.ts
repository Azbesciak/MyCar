import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryAnimation} from 'ngx-gallery';
import {SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  @Input()
  images: Image[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '500px',
        height: '350px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

}

export interface Image {
  small?: string | SafeResourceUrl;
  medium?: string | SafeResourceUrl;
  big?: string | SafeResourceUrl;
  description?: string;
  url?: string;
  label?: string;
}
