import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CarOffer} from '../cars-card-carousel/car';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-favourite-btn',
  templateUrl: './favourite-btn.component.html',
  styleUrls: ['./favourite-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavouriteBtnComponent implements OnInit {

  @Input()
  offer: CarOffer;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  updateFavourite() {
    this.offer.features.favourite = !this.offer.features.favourite;
    const action = this.offer.features.favourite ? 'added to' : 'removed from';
    this.snackBar.open(`Offer '${this.offer.title}' ${action} favourites!`);
  }
}
