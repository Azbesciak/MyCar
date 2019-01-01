import {Component, Input, OnInit} from '@angular/core';
import {CarOffer} from './car';
import {CarOfferService} from '../car-offer/car-offer.service';

@Component({
  selector: 'app-cars-card-carousel',
  templateUrl: './cars-card-carousel.component.html',
  styleUrls: ['./cars-card-carousel.component.scss']
})
export class CarsCardCarouselComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  cars: CarOffer[];

  constructor(private offerService: CarOfferService) {
  }

  ngOnInit() {
  }

  open(offer: CarOffer) {
    this.offerService.show(offer);
  }

}
