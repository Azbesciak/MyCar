import {Component, Inject, OnInit} from '@angular/core';
import {CARS_TOKEN, CarsProvider} from '../cars/cars-provider';
import {CarRecommendation} from '../cars/cars-card-carousel/car';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  recommendations: CarRecommendation[] = [];

  constructor(
    @Inject(CARS_TOKEN) private carsProvider: CarsProvider
  ) {
  }

  ngOnInit() {
    this.carsProvider.getRecommendations()
      .subscribe(c => this.recommendations = c);
  }
}
