import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CarOffer} from '../cars-card-carousel/car';
import {CarOfferService} from '../car-offer/car-offer.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent {
  @Input()
  offers: CarOffer[] = [];

  constructor(private offerService: CarOfferService) {
  }

  open(offer: CarOffer) {
    this.offerService.show(offer);
  }
}
