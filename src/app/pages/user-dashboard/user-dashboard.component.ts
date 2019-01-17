import { Component, Inject, OnInit } from '@angular/core';
import { Subscriber } from '../../cars/subscriber';
import {CARS_TOKEN, CarsProvider} from '../../cars/cars-provider';
import { CarOffer } from '../../cars/cars-card-carousel/car';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent extends Subscriber implements OnInit {
  subscriptions: CarOffer[] = [];

  constructor(@Inject(CARS_TOKEN) private carsProvider: CarsProvider) {
    super();
  }

  ngOnInit() {
    this.addSubs(
      this.carsProvider.getSubscriptions()
        .subscribe(c => this.subscriptions = c)
    );
  }
}
