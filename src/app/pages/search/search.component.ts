import {Component, Inject, OnInit} from '@angular/core';
import {CARS_TOKEN, CarsProvider} from '../../cars/cars-provider';
import {CarOffer} from '../../cars/cars-card-carousel/car';
import {Subscriber} from '../../cars/subscriber';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends Subscriber implements OnInit {
  recommendations: CarOffer[] = [];
  subscriptions: CarOffer[] = [];
  lastViewed: CarOffer[] = [];

  constructor(
    @Inject(CARS_TOKEN) private carsProvider: CarsProvider
  ) {
    super();
  }

  ngOnInit() {
    this.addSubs(
      this.carsProvider.getRecommendations()
        .subscribe(c => this.recommendations = c),
      this.carsProvider.getSubscriptions()
        .subscribe(c => this.subscriptions = c),
      this.carsProvider.getLastViewed()
        .subscribe(c => this.lastViewed = c)
    );
  }
}
