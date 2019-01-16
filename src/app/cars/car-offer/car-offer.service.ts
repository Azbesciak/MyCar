import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CarOffer} from '../cars-card-carousel/car';
import {CarOfferModalComponent} from './car-offer-modal/car-offer-modal.component';

@Injectable()
export class CarOfferService {

  constructor(private dialog: MatDialog) {
  }

  show(offer: CarOffer) {
    this.dialog.open(CarOfferModalComponent, {
      minWidth: 800,
      maxWidth: 1000,
      minHeight: 600,
      maxHeight: '80vh',
      panelClass: 'car-panel',
      data: {offer: offer}
    });
  }
}
