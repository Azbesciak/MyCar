import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CarOffer} from '../../cars-card-carousel/car';

@Component({
  selector: 'app-car-offer-moda',
  templateUrl: './car-offer-modal.component.html',
  styleUrls: ['./car-offer-modal.component.scss']
})
export class CarOfferModalComponent implements OnInit {

  offer: CarOffer;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CarOfferData) {
    this.offer = data.offer;
  }

  ngOnInit() {
  }

}

export interface CarOfferData {
  offer: CarOffer;
}
