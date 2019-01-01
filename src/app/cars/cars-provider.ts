import {User} from '../authorization/user';
import {CarOffer} from './cars-card-carousel/car';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {SearchParams} from './search-box/search-params';

export interface CarsProvider {
  getRecommendations(user?: User): Observable<CarOffer[]>;

  getSubscriptions(user?: User): Observable<CarOffer[]>;

  getLastViewed(user?: User): Observable<CarOffer[]>;

  searchCars(searchParams: SearchParams): Observable<CarOffer[]>;
}

export const CARS_TOKEN = new InjectionToken<CarsProvider>('cars_service');
