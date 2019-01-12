import {ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
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

  constructor(
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  updateFavourite() {
    const action = this.reverseFavourite() ? 'added to' : 'removed from';
    this.snackBar.open(`Offer '${this.offer.title}' ${action} favourites!`, 'UNDO', {duration: 5000})
      .afterDismissed().subscribe(v => {
      if (v.dismissedByAction) {
        this.reverseFavourite();
        this.changeDetector.detectChanges();
      }
    });
  }

  private reverseFavourite() {
    return this.offer.features.favourite = !this.offer.features.favourite;
  }
}
