import {Component, OnInit} from '@angular/core';
import {LastOfferService} from '../../cars/last-offer.service';
import {Subscriber} from '../../cars/subscriber';
import {CarOffer} from '../../cars/cars-card-carousel/car';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent extends Subscriber implements OnInit {
  offers: CarOffer[];

  constructor(private lastOffer: LastOfferService) {
    super();
  }

  ngOnInit() {
    this.addSubs(
      this.lastOffer.watch().subscribe(of => this.offers = of)
    );
  }

}
