import {Injectable} from '@angular/core';
import {User} from '../authorization/user';
import {CarsProvider} from './cars-provider';
import {CarOffer, Seller, Service} from './cars-card-carousel/car';
import {of, Observable} from 'rxjs';
import {SearchParams} from './search-box/search-params';

@Injectable()
export class CarsProviderService implements CarsProvider {

  private recommendations: CarOffer[] = [
    {
      service: Services.ALLEGRO,
      seller: Sellers.TADEUSZ,
      title: 'Best AUDI ever',
      images: ['https://static.cargurus.com/images/site/2018/01/28/15/06/2018_audi_a5_sportback_2_0t_quattro_premium_plus_awd-pic-6950271395309042165-640x480.jpeg'],
      favourite: true,
      car: {
        brand: 'Audi',
        model: 'A5',
        year: 2012,
        millage: 123400,
        hp: 310,
        capacity: 3.2
      },
      url: 'https://allegro.pl/ogloszenie/audi-a5-8t-7722268565',
      price: '15 000 zł',

    },
    {
      service: Services.GRATKA,
      seller: Sellers.RADEK,
      title: 'Your new Merc!',
      images: [
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InN2YnE1NXFndWRxcjEtT1RPTU9UT1BMIn0.3TCdoRy-5bpqpCEuUOgE89pozFoguwetYMedkh-m7cE/image;s=1080x720;cars_;/868480520_;slot=1;filename=eyJmbiI6InN2YnE1NXFndWRxcjEtT1RPTU9UT1BMIn0.3TCdoRy-5bpqpCEuUOgE89pozFoguwetYMedkh-m7cE_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjQ4eGxldnRnYjMxbi1PVE9NT1RPUEwifQ.5xy9ItJO6ySNf8GkzeIYiN__umc323hqZvX7tme0WwY/image;s=1080x720;cars_;/868480520_;slot=2;filename=eyJmbiI6IjQ4eGxldnRnYjMxbi1PVE9NT1RPUEwifQ.5xy9ItJO6ySNf8GkzeIYiN++umc323hqZvX7tme0WwY_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjVvc2IyZGV3bWdpbzMtT1RPTU9UT1BMIn0.mGwlZJijHyEJ2RnG2VXmwbg4xrCfhpfBssnWpRHmuF4/image;s=1080x720;cars_;/868480520_;slot=3;filename=eyJmbiI6IjVvc2IyZGV3bWdpbzMtT1RPTU9UT1BMIn0.mGwlZJijHyEJ2RnG2VXmwbg4xrCfhpfBssnWpRHmuF4_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjQ3dnF0enA2cnRlOTEtT1RPTU9UT1BMIn0.H9cGdbxptKMgktGce-ulYcIlXd3PELTR9AylkgvOkkw/image;s=1080x720;cars_;/868480520_;slot=4;filename=eyJmbiI6IjQ3dnF0enA2cnRlOTEtT1RPTU9UT1BMIn0.H9cGdbxptKMgktGce-ulYcIlXd3PELTR9AylkgvOkkw_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjFwbnhvbHY4aTY0bDEtT1RPTU9UT1BMIn0.QPOm9V6M2RdINJaI7Nk7CwVTQLcqB3Fwgwpumg1E-fI/image;s=1080x720;cars_;/868480520_;slot=5;filename=eyJmbiI6IjFwbnhvbHY4aTY0bDEtT1RPTU9UT1BMIn0.QPOm9V6M2RdINJaI7Nk7CwVTQLcqB3Fwgwpumg1E-fI_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImFndGQwZmlweGtzMzEtT1RPTU9UT1BMIn0.OAxCQK6irwloHIjRnPxJj1y807eeCksKHm4VctvYnbY/image;s=1080x720;cars_;/868480520_;slot=6;filename=eyJmbiI6ImFndGQwZmlweGtzMzEtT1RPTU9UT1BMIn0.OAxCQK6irwloHIjRnPxJj1y807eeCksKHm4VctvYnbY_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Imk4M2c3Zjlhc2IxcjItT1RPTU9UT1BMIn0.EZUvmlTz00QGEIBOVD_RULNTgFwSczKCs2gV5dnsMXI/image;s=1080x720;cars_;/868480520_;slot=7;filename=eyJmbiI6Imk4M2c3Zjlhc2IxcjItT1RPTU9UT1BMIn0.EZUvmlTz00QGEIBOVD+RULNTgFwSczKCs2gV5dnsMXI_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImsybWs2YnhuZ3N6ZjEtT1RPTU9UT1BMIn0.JZNmP4Q8ChLGPRVCfpLoTtJDe9-iQtW8kBOhHU-YAzM/image;s=1080x720;cars_;/868480520_;slot=8;filename=eyJmbiI6ImsybWs2YnhuZ3N6ZjEtT1RPTU9UT1BMIn0.JZNmP4Q8ChLGPRVCfpLoTtJDe9-iQtW8kBOhHU-YAzM_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImplMXNvbjludmx1Mi1PVE9NT1RPUEwifQ.Hc-bNtXaR4Ihu8VoADhWSYInP26aoAjNfKz1gwdo5Ko/image;s=1080x720;cars_;/868480520_;slot=9;filename=eyJmbiI6ImplMXNvbjludmx1Mi1PVE9NT1RPUEwifQ.Hc-bNtXaR4Ihu8VoADhWSYInP26aoAjNfKz1gwdo5Ko_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImhiYjZlbXFkdXM2djItT1RPTU9UT1BMIn0.kl7xs8qEzUbbt-gDpbWD1I5cD3rS7d-soPOHzfca_JY/image;s=1080x720;cars_;/868480520_;slot=10;filename=eyJmbiI6ImhiYjZlbXFkdXM2djItT1RPTU9UT1BMIn0.kl7xs8qEzUbbt-gDpbWD1I5cD3rS7d-soPOHzfca+JY_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Im9ib3B5cnloNXNpMTEtT1RPTU9UT1BMIn0.8uwLPIFUuTlg-SJBEh6_VkP34keTAwMNFS9NleUpVqo/image;s=1080x720;cars_;/868480520_;slot=11;filename=eyJmbiI6Im9ib3B5cnloNXNpMTEtT1RPTU9UT1BMIn0.8uwLPIFUuTlg-SJBEh6+VkP34keTAwMNFS9NleUpVqo_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImJxdzQyb2ZodGt5eTEtT1RPTU9UT1BMIn0.NFp66THBKeLn-HDE6n3bnfe6zta8QW6XVLPs1LQQRcg/image;s=1080x720;cars_;/868480520_;slot=12;filename=eyJmbiI6ImJxdzQyb2ZodGt5eTEtT1RPTU9UT1BMIn0.NFp66THBKeLn-HDE6n3bnfe6zta8QW6XVLPs1LQQRcg_rev001.jpg',
        'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InNyd2Z6cDZoNzJ5ZDMtT1RPTU9UT1BMIn0.p3LWFDnzQUjIP8PFblZ_zzK0EgZOP12au9dUBsNSJVY/image;s=1080x720;cars_;/868480520_;slot=13;filename=eyJmbiI6InNyd2Z6cDZoNzJ5ZDMtT1RPTU9UT1BMIn0.p3LWFDnzQUjIP8PFblZ+zzK0EgZOP12au9dUBsNSJVY_rev001.jpg',

      ],
      car: {
        brand: 'Mercedes-Benz',
        model: 'E-Class',
        year: 2011,
        millage: 31000,
        hp: 210,
        capacity: 2.2
      },
      url: 'https://gratka.pl/motoryzacja/mercedes-benz-klasa-e-w211-lift-4x4-gwarancja-pakiet-korzysci-swiat-rabaty/ob/8081451',
      price: '5 000 zł',
    },
    {
      service: Services.OTOMOTO,
      seller: Sellers.KRZYSZTOF,
      title: 'Fast Porsche FAST SELL',
      images: ['https://st.motortrend.com/uploads/sites/10/2015/09/porsche-911-gt3-rs-spied-front-three-quarters-03.jpg'],
      car: {
        brand: 'Porche',
        model: 'Carrera',
        year: 2018,
        millage: 56000,
        hp: 500,
        capacity: 4.5
      },
      url: 'https://www.otomoto.pl/oferta/porsche-carrera-gt-pierwszy-wlasciciel-po-serwisie-unikat-od-budrolpol-pelna-akcyza-i-vat-ID6B3tQI.html#54823fda81',
      price: '999 999 zł'
    },
    {
      service: Services.OLX,
      seller: Sellers.ANRZEJ,
      title: 'Honda after crash',
      images: ['https://www.autocentrum.pl/ac-file/gallery-photo/58947ccb592c7d8328944700.jpg'],
      car: {
        brand: 'Honda',
        model: 'Civic',
        year: 2017,
        hp: 190,
        millage: 11000,
        capacity: 2.2
      },
      url: 'https://www.olx.pl/oferta/honda-civic-viii-1-8-i-vtec-type-s-CID5-IDxDc9x.html#0c8909f4af',
      price: '1 000 000 zł',
    }
  ];

  private subscribtions: CarOffer[] = [
    {
      service: Services.AUTO_GIELDA,
      seller: Sellers.KAROL,
      images: ['https://zdjecia.autogielda.pl/Z11/740/994/mercedes_ml_63,IN8WKKJ,Z,1.jpg'],
      title: 'MERCEDES ML 63',
      car: {
        brand: 'Mercedes-Benz',
        model: 'ML 63',
        year: 2013,
        hp: 525,
        millage: 74000,
        capacity: 5.5
      },
      favourite: true,
      url: 'https://www.autogielda.pl/sprzedam_mercedes_ml_63,mercedes_ml_63,IN8WKKJ.html',
      price: '35 000 EUR',

    }, {
      service: Services.AUTO_GIELDA,
      seller: Sellers.RAFAL,
      images: ['https://zdjecia.autogielda.pl/Z13/652/034/gmc_acadia_denali,IN8TRYR,Z,2.jpg'],
      title: 'GMC ACADIA DENALI',
      car: {
        brand: 'GMC',
        model: 'Acadia Denali',
        year: 2015,
        hp: 280,
        millage: 50000,
        capacity: 3.6
      },
      favourite: true,
      url: 'https://www.autogielda.pl/sprzedam_inne,gmc_acadia_denali,IN8TRYR.html',
      price: '135 000 zł'
    }, {
      service: Services.AUTO_GIELDA,
      seller: Sellers.PRZEMEK,
      images: ['https://d-mf.ppstatic.pl/art/9v/6r/cy8lf0o4wc0ws840os8wo/4e4b8383bc29b-d.1200.jpg'],
      title: 'NISSAN QASHQAI +2 ROK 2013 DIESEL 1.5',
      car: {
        brand: 'NISSAN',
        model: 'QASHQAI +2',
        year: 2013,
        hp: 115,
        millage: 154000,
        capacity: 1.5
      },
      favourite: true,
      url: 'https://www.autogielda.pl/sprzedam_nissan_42,nissan_qashqai__2_rok_2013_diesel_1_5,IP8RWFX.html',
      price: '39 000 zł'
    }, {
      service: Services.KUP_AUTO,
      seller: Sellers.KASIA,
      images: ['http://www.autopanel.pl/upload/photos/1685589_b03d721d81fbb7ec024c95c23c16762c.jpg'],
      title: 'Audi A3 2.0TDi CR 150KM*Alu*Nawi*Ks serwis',
      car: {
        brand: 'Audi',
        model: 'A3',
        year: 2014,
        hp: 150,
        millage: 9513,
        capacity: 2.0
      },
      favourite: true,
      url: 'http://www.kup-auto.pl/index.php?s=card&id=100908',
      price: '51 900 zł',
    }
  ];

  lastViewed: CarOffer[] = [
    {
      service: Services.GUM_TREE,
      seller: Sellers.IZA,
      title: '2010 Skoda Superb Sedan',
      images: ['https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/xbIAAOSw18Jb1cDS/$_20.JPG'],
      car: {
        brand: 'Skoda',
        model: 'Superb',
        year: 2010,
        hp: 150,
        millage: 165000,
        capacity: 1.8
      },
      url: 'https://www.gumtree.pl/a-samochody-osobowe/krakow/2010-skoda-superb-sedan/1003369242660911225329709',
      price: '29 500 zł',
    }, {
      service: Services.AAA_AUTO,
      seller: Sellers.AAA_AUTO_WAW,
      images: ['https://img.aaaauto.eu/thumb/300022102_1024x768x75.jpg'],
      title: 'Toyota Yaris 2016',
      car: {
        brand: 'Toyota',
        model: 'Yaris',
        year: 2016,
        hp: 100,
        millage: 10341,
        capacity: 1.5
      },
      favourite: true,
      url: 'https://www.aaaauto.pl/pl/toyota-yaris/car.html?id=242229257#category=12&srclp=small&promo=b',
      price: '55 000 zł',
    }, {
      service: Services.AAA_AUTO,
      seller: Sellers.AAA_AUTO_POZ,
      title: 'Volkswagen Arteon 2017',
      images: ['https://img.aaaauto.eu/thumb/300014658_1024x768x75.jpg'],
      car: {
        brand: 'Volkswagen',
        model: 'Arteon',
        year: 2017,
        hp: 236,
        millage: 13630,
        capacity: 2.0
      },
      favourite: true,
      url: 'https://www.aaaauto.pl/pl/vw-arteon/car.html?id=220542916',
      price: '207 000 zł',
    }, {
      service: Services.AAA_AUTO,
      seller: Sellers.AAA_AUTO_POZ,
      title: 'Audi A5 2016',
      images: ['https://img.aaaauto.eu/thumb/900162112_1_1024x768x75.jpg'],
      car: {
        brand: 'Audi',
        model: 'A5',
        year: 2016,
        hp: 187,
        millage: 30641,
        capacity: 2.0
      },
      url: 'https://www.aaaauto.pl/pl/audi-a5/car.html?id=236141387#category=15&srclp=4x4&promo=b',
      price: '125 000 zł'
    }
  ];

  getRecommendations(user?: User): Observable<CarOffer[]> {
    return of(this.recommendations);
  }

  searchCars(params?: SearchParams): Observable<CarOffer[]> {
    let cars = [
      ...this.recommendations,
      ...this.subscribtions,
      ...this.lastViewed
    ];
    if (params && params.brand) {
      cars = cars.filter(offer => offer.car.brand.toLowerCase().indexOf(params.brand.toLowerCase()) !== -1);
    }
    return of(cars);
  }

  getLastViewed(user?: User): Observable<CarOffer[]> {
    return of(this.lastViewed);
  }

  getSubscriptions(user?: User): Observable<CarOffer[]> {
    return of(this.subscribtions);
  }
}

class Services {
  static ALLEGRO: Service = {
    logoUrl: 'https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg',
    name: 'Allegro',
    url: 'https://allegro.pl/'
  };
  static GRATKA: Service = {
    name: 'Gratka',
    url: 'https://gratka.pl/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gratka_logo.svg/1280px-Gratka_logo.svg.png'
  };
  static OTOMOTO: Service = {
    name: 'OtoMOTO',
    url: 'https://www.otomoto.pl/',
    logoUrl: 'http://rycar.pl/wp-content/uploads/2016/03/logo-otomoto.png'
  };
  static OLX: Service = {
    name: 'OLX',
    url: 'https://www.olx.pl/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/OLX_Logo.jpg/720px-OLX_Logo.jpg'
  };
  static AUTO_GIELDA: Service = {
    name: 'autogielda',
    url: 'https://www.autogielda.pl',
    logoUrl: 'https://www.autogielda.pl/assets_ag/images/logo_stare.png'
  };
  static KUP_AUTO: Service = {
    name: 'Kup auto',
    url: 'http://www.kup-auto.pl',
    logoUrl: 'http://www.kup-auto.pl/assets/img/nowe.jpg'
  };
  static GUM_TREE: Service = {
    name: 'gumtree',
    url: 'https://www.gumtree.pl',
    logoUrl: 'https://securet9.classistatic.com/1.1.1279/images/pl_PL/logo.png'
  };
  static AAA_AUTO: Service = {
    name: 'AAA auto',
    url: 'https://www.aaaauto.pl/',
    logoUrl: 'https://www.aaaauto.pl/images/white/logo_aaaauto_cz.jpg'
  };
}

class Sellers {
  static RAFAL: Seller = {
    name: 'Rafał',
    city: 'Katowice'
  };
  static TADEUSZ: Seller = {
    name: 'Tadeusz',
    city: 'Radom'
  };
  static RADEK: Seller = {
    name: 'Radek',
    city: 'Radom'
  };
  static KRZYSZTOF: Seller = {
    name: 'Krzysztof',
    city: 'Warszawa'
  };
  static ANRZEJ: Seller = {
    name: 'Andrzej',
    city: 'Gdańsk'
  };
  static KAROL: Seller = {
    name: 'Karol',
    city: 'Wrocław'
  };
  static PRZEMEK: Seller = {
    name: 'Przemysław',
    city: 'Jelenia Góra',
  };
  static KASIA: Seller = {
    name: 'Katarzyna',
    city: 'Nowy Sącz',
  };
  static IZA: Seller = {
    name: 'Izabela',
    city: 'Kraków',
  };
  static AAA_AUTO_WAW: Seller = {
    name: 'AAA Auto',
    city: 'Warszawa',
  };
  static AAA_AUTO_POZ: Seller = {
    name: 'AAA Auto',
    city: 'Poznań',
  };
}
