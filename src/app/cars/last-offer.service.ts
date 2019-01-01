import {Inject, Injectable} from '@angular/core';
import {SearchParams} from './search-box/search-params';
import {CARS_TOKEN, CarsProvider} from './cars-provider';
import {CarOffer} from './cars-card-carousel/car';
import {BehaviorSubject, Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastOfferService {
  private params = new BehaviorSubject<SearchParams>(null);

  constructor(@Inject(CARS_TOKEN) private carsProvider: CarsProvider) {
  }

  submit(search: SearchParams) {
    this.params.next(search);
  }

  watch(): Observable<CarOffer[]> {
    return this.params.pipe(
      flatMap(p => this.carsProvider.searchCars(p))
    );
  }
}
