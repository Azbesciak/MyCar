import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CarOffer} from '../cars-card-carousel/car';

@Component({
  selector: 'app-car-offer',
  templateUrl: './car-offer.component.html',
  styleUrls: ['./car-offer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarOfferComponent implements OnInit {

  @Input()
  offer: CarOffer;

  constructor() {
  }

  ngOnInit() {
  }

}
