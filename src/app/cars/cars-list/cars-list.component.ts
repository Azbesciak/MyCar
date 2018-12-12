import { Component, OnInit, Input, Inject} from '@angular/core';
import { CarRecommendation } from '../cars-card-carousel/car';
import { CARS_TOKEN } from '../cars-provider';
import { CarsProviderService } from '../cars-provider.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Input()
  offers: CarRecommendation[] = [];
  
  constructor(@Inject(CARS_TOKEN) private carsProviderService: CarsProviderService) { }

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.carsProviderService.getRecommendations().subscribe(
      offers => this.offers = offers
    );
  }
}
