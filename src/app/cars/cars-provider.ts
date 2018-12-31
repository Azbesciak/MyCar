import {User} from '../authorization/user';
import {CarRecommendation} from './cars-card-carousel/car';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export interface CarsProvider {
  getRecommendations(user?: User): Observable<CarRecommendation[]>;

  getSubscriptions(user?: User): Observable<CarRecommendation[]>;

  getLastViewed(user?: User): Observable<CarRecommendation[]>;

  searchCars(brand: string): Observable<CarRecommendation[]>;
}

export const CARS_TOKEN = new InjectionToken<CarsProvider>('cars_service');
