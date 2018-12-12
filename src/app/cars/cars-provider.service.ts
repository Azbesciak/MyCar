import {Injectable} from '@angular/core';
import {User} from '../authorization/user';
import {CarsProvider} from './cars-provider';
import {CarRecommendation} from './cars-card-carousel/car';
import {from, Observable} from 'rxjs';

@Injectable()
export class CarsProviderService implements CarsProvider {

  private baseCars: CarRecommendation[][] = [[
    {
      service: 'Allegro',
      owner: 'Tadeusz',
      title: 'Best AUDI ever',
      car: {
        brand: 'Audi',
        model: 'A5',
        city: 'Radom',
        imageURL: 'https://static.cargurus.com/images/site/2018/01/28/15/06/2018_audi_a5_sportback_2_0t_quattro_premium_plus_awd-pic-6950271395309042165-640x480.jpeg',
        year: 2012
      }
    },
    {
      service: 'Gratka',
      owner: 'Radek',
      title: 'Your new Merc!',
      car: {
        brand: 'Mercedes-Benz',
        model: 'E Klass',
        city: 'Rzeszów',
        imageURL: 'https://d-gr.ppstatic.pl/kadry/k/r/gr-ogl/1f/01/76090_179988184_mercedes-benz-klasa-e-w212-350-e350-cdi-full-led-navi-skory-gwarancja_xlarge.jpg',
        year: 2011
      }
    },
    {
      service: 'OtoMOTO',
      owner: 'Krzysztof',
      title: 'Fast Porsche FAST SELL',
      car: {
        brand: 'Porche',
        model: 'Carrera',
        city: 'Warszawa',
        imageURL: 'https://st.motortrend.com/uploads/sites/10/2015/09/porsche-911-gt3-rs-spied-front-three-quarters-03.jpg',
        year: 2018
      }
    },
    {
      service: 'OLX',
      owner: 'Andrzej',
      title: 'Honda after crash',
      car: {
        brand: 'Honda',
        model: 'Civic',
        city: 'Gdańsk',
        imageURL: 'https://www.autocentrum.pl/ac-file/gallery-photo/58947ccb592c7d8328944700.jpg',
        year: 2017
      }
    }
  ]];

  constructor() {
  }

  getRecommendations(user?: User): Observable<CarRecommendation[]> {
    return from(this.baseCars);
  }
}
