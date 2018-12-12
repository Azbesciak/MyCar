import {Injectable} from '@angular/core';
import {User} from '../authorization/user';
import {CarsProvider} from './cars-provider';
import {CarRecommendation} from './cars-card-carousel/car';
import {of, Observable} from 'rxjs';

@Injectable()
export class CarsProviderService implements CarsProvider {

  private baseCars: CarRecommendation[] = [
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
      },
      url: 'https://allegro.pl/ogloszenie/audi-a5-8t-7722268565',
      price: '15 000 zł',
      serviceUrl: 'https://allegro.pl/',
      serviceLogo: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/press_kit/file_name/2613/preview_Slajd2.jpg'
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
      },
      url: 'https://gratka.pl/motoryzacja/mercedes-benz-klasa-e-w211-lift-4x4-gwarancja-pakiet-korzysci-swiat-rabaty/ob/8081451',
      price: '5 000 zł',
      serviceUrl: 'https://gratka.pl/',
      serviceLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gratka_logo.svg/1280px-Gratka_logo.svg.png'
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
      },
      url: 'https://www.otomoto.pl/oferta/porsche-carrera-gt-pierwszy-wlasciciel-po-serwisie-unikat-od-budrolpol-pelna-akcyza-i-vat-ID6B3tQI.html#54823fda81',
      price: '999 999 zł',
      serviceUrl: 'https://www.otomoto.pl/',
      serviceLogo: 'http://rycar.pl/wp-content/uploads/2016/03/logo-otomoto.png'
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
      },
      url: 'https://www.olx.pl/oferta/honda-civic-viii-1-8-i-vtec-type-s-CID5-IDxDc9x.html#0c8909f4af',
      price: '1 000 000 zł',
      serviceUrl: 'https://www.olx.pl/',
      serviceLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/OLX_Logo.jpg/720px-OLX_Logo.jpg'
    }
  ];

  constructor() {
  }

  getRecommendations(user?: User): Observable<CarRecommendation[]> {
    return of(this.baseCars);
  }

  searchCars(brand: string): Observable<CarRecommendation[]> {
    return of(this.baseCars.filter(offer => offer.car.brand.toLowerCase().indexOf(brand.toLowerCase()) != -1));
  }
}
