import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CarOffer} from '../cars-card-carousel/car';
import {Image} from '../../ui/gallery/gallery.component';

@Component({
  selector: 'app-car-offer',
  templateUrl: './car-offer.component.html',
  styleUrls: ['./car-offer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarOfferComponent implements OnInit {

  @Input()
  offer: CarOffer;

  images: Image[] = [];
  carProperties: Entry[] = [];

  constructor() {
  }

  ngOnInit() {
    this.carProperties = Object.entries(this.offer.car).map(v => ({key: v[0], value: v[1]}));
    this.images = this.offer.images.map(i => ({big: i, medium: i, small: i}));
  }

}

interface Entry {
  key: string;
  value: any;
}
