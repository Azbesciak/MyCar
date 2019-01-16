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
      images: [
        'https://3.allegroimg.com/original/011e97/b4eedc624d53bcec22dc212ce263',
        'https://e.allegroimg.com/original/0113b1/336d7f3947949760ae55b3d36a1e',
        'https://c.allegroimg.com/original/01b129/414f74c34fe2a7bb551edf2e475c',
        'https://1.allegroimg.com/original/01e120/adc5513b4b2ca9ddb1b4ef28a6e1',
        'https://e.allegroimg.com/original/01a6b5/f0e6d8534b5fa216d578b72d711e',
        'https://5.allegroimg.com/original/016960/754310644db19d77e902de243705',
        'https://5.allegroimg.com/original/01160b/3e62ec2a44449221da1652046305',
        'https://3.allegroimg.com/original/010595/8f2c0dc5402fb18cef8dc729da03',
        'https://b.allegroimg.com/original/013d3d/8565e78f46cebbd0a643818a798b',
        'https://a.allegroimg.com/original/01b179/6890f9fc468a9bb56a0e364cdf5a',
        'https://7.allegroimg.com/original/01d454/f2473f0349e2a98fc95fa8ef21f7',
        'https://a.allegroimg.com/original/01b424/1e8340ef4378819dcf753bc0dcca',
        'https://7.allegroimg.com/original/0143f3/b69fad1f4a2398153aee4ef71927',
        'https://1.allegroimg.com/original/01bb07/e378482f40c49a5e8db43efc2681'
      ],
      features: {
        favourite: true,
        premium: true,
        trustLevel: 10
      },
      car: {
        brand: 'Audi',
        model: 'A5',
        year: 2017,
        millage: 33110,
        hp: 190,
        capacity: 2.0,
        body: 'hatchback',
        color: 'black',
        doorsNumber: 4,
        seatsNumber: 5,
        transmission: 'automatic hydraulic',
        condition: 'used',
        FV: 'yes',
        petrolType: 'petrol',
        steeringWheel: 'left'
      },
      url: 'https://allegro.pl/ogloszenie/audi-a5-audi-a5-sportback-2-0-tfsi-s-7769636519',
      price: {
        currency: 'PLN',
        net: true,
        rates: 60,
        value: 159_900,
        rateValue: 2830
      },
      description: `
<h4>PORSCHE INTERAUTO POLSKA, Autoryzowany Dealer Marki AUDI, przedstawia</h4>
<b>AUDI A5</b>
<p>Samochód, który oglądasz pochodzi z oferty Audi Select :plus.
Audi Select :plus to program odkupu i sprzedaży wyselekcjonowanych i sprawdzonych samochodów używanych.
 Oprócz możliwości zakupu sprawdzonego auta używanego w doskonałym stanie
technicznym zyskujesz okazję do sprzedaży lub zamiany posiadanego samochodu na nowszy.</p>
<p>Program Audi select :plus to nie tylko najwyższa jakość aut używanych, ale również
szereg dodatkowych korzyści:
<ul>
<li>wyselekcjonowane samochody</li>
<li>sprawdzony przebieg i pochodzenie</li>
<li>sprawdzony stan techniczny</li>
<li>profesjonalne przygotowanie auta</li>
<li>jazda próbna</li>
<li>gwarancja</li>
<li>dedykowane opcje finansowania</li>
<li>samochód w rozliczeniu</li>
<li>prawo do wymiany</li>
<li>personalizacja pojazdu</li>
<li>gwarancja mobilności</li>
</ul>
Wyposażenie dodatkowe:
<ul>
<li>pakiet: Pakiet oświetlenia zewnętrznego i wnętrza Ambiente (Iluminacja konsoli środkowej
 Podświetlane klamki drzwi, Pakiet dodatkowego oświetlenia wnętrza)</li>
<li>pakiet: System nawigacji satelitarnej MMI Navigation plus na dysku twardym z MMI touch SD/WLAN/DVD/USB/Bluet
 (System nawigacji satelitarnej MMI Navigation plus na dysku twardym z MMI touch SD/WLAN/DVD/USB/Bluet, Audi Connect - 3 lata)</li>
<li>Audi Connect - 3 lata</li>
<li>Audi parking system - czujniki parkowania tył</li>
<li>Audi smartphone Interface</li>
<li>Audi sound system</li>
<li>Fotele przednie sportowe</li>
<li>Elektryczna regulacja podparcia kręgosłupa, fotele przednie</li>
<li>Kierownica wielofunkcyjna plus 3-ramienna - skórzana</li>
<li>Przedni podłokietni, przesuwany</li>
<li>Szyby dodatkowo przyciemniane, tył</li>
<li>Tapicerka łączona Alcantara/skóra</li>
<li>Tempomat</li>
<li>Tuner cyfrowy stacji radiowych (DAB)</li>
</ul>
Wyposażenie standardowe:
<ul>
<li>ABS - system zapobiegający blokowaniu się kół podczas hamowania</li>
<li>Airbag 6 sztuk (czołowe poduszki kierowcy i pasażera, boczne poduszki- przód, kurtyny powietrzne)</li>
<li>Alarm</li>
<li>Asystent podjazdu z Auto Hold, Audi Connect safety&service</li>
<li>Audi drive select - regulacja charakterystyki układu kierowniczego</li>
<li>Audi pre sense city - system zapobiegania kolizji poprzez ingerencję w układ hamulcowy</li>
<li>Czujnik ciśnienia w oponach</li>
<li>Czujnik zmierzchowy świateł z czujnikiem deszczu</li>
<li>Dywaniki welurowe - przód i tył</li>
<li>ESC - układ stabilizacji toru jazdy</li>
<li>Elementy dekoracyjne wnętrza - Micrometallic</li>
<li>Felgi aluminiowe 17 (15 ramienne) z ogumieniem 225/50</li>
<li>Fotele przednie z manualną regulacją wysokości</li>
<li>Hamulec postojowy - elektromechaniczny</li>
<li>Interfejs Bluetooth</li>
<li>Kierownica wielofunkcyjna 3-ramienna - skórzana</li>
<li>Klimatyzacja automatyczna</li>
<li>Kolumna kierownicy z manualną regulacją położenia</li>
<li>Komputer pokładowy</li>
<li>Koło zapasowe - dojazdowe, Lakier uni, Lampy ksenonowe z dynamiczną regulacją zasięgu</li>
<li>światła do jazdy dziennej w technice LED</li>
<li>Lampy tylne wykonane w technice diodowej (LED)</li>
<li>Listwy ozdobne wokół szyb w kolorze srebrnym, Lusterka boczne ogrzewane i regulowane elektrycznie</li>
<li>Lusterko wsteczne z automatyczną funkcją p/oślepieniową</li>
<li>Pakiet dla palących</li>
<li>Przycisk Start/Stop</li>
<li>Radio MMI plus z Bluetooth, 8 głośników</li>
<li>Sygnalizacja niezapiętych pasów bezpieczeństwa</li>
<li>System Start/Stop z systemem rekuperacji, Szyby przednie elektryczne</li>
<li>Szyby termoizolacyjne</li>
<li>Tapicerka tkaninowa Index</li>
<li>Tylna kanapa składana, dzielona, Uchwyty ISOFIX - przód i tył</li>
<li>Wspomaganie układu kierowniczego - Servotronic</li>
<li>Wspomaganie unoszenia i opuszczania pokrywy bagażnika, elektryczne</li>
<li>Zamek centralny z pilotem, Zawieszenie dynamiczne</li>
<li>Śruby zabezpieczające koła przed kradzieżą</li>
<li>Światła do jazdy dziennej LED</li>
</ul>
</p>
<p>
W razie jakichkolwiek dodatkowych pytań pozostajemy do Państwa dyspozycji.
</p>
<p>
Niniejsze ogłoszenie jest wyłącznie informacją handlową i nie stanowi oferty w myśl art. 66, §1. Kodeksu Cywilnego.
 Sprzedający nie odpowiada za ewentualne błędy lub nie aktualność ogłoszenia.
</p>`
    },
    {
      service: Services.OTOMOTO,
      seller: Sellers.RADEK,
      title: 'Mercedes-Benz Klasa E W212 Lift AMG Kombi 2.2',
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
        year: 2013,
        millage: 239_000,
        hp: 170,
        capacity: 2.2,
        body: 'combi',
        color: 'grey',
        doorsNumber: 4,
        seatsNumber: 5,
        transmission: 'automatic hydraulic',
        condition: 'used',
        FV: 'no',
        petrolType: 'diesel',
        steeringWheel: 'right'
      },
      url: 'https://www.otomoto.pl/oferta/mercedes-benz-klasa-e-w212-lift-amg-kombi-2-2-cdi-170km-anglik-v5c-mot-zadbany-ID6zlX3R.html',
      price: {
        value: 45_900,
        currency: 'PLN',
        rates: 72,
        rateValue: 692,
        toNegotiate: true
      },
      features: {
        trustLevel: 5,
        premium: true
      },
      description: `
      Witam posiadam Mercedesa E W212 Pakiet AMG po lifcie 2013r 2.2 CDI 170KM dowód
       V5C ważny mot stan bdb 2 kluczyki bezwypadkowy więcej info pod nr tel 608 - wyświetl numer - Możliwa zamiana!!`
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
        capacity: 4.5,
        body: 'coupe',
        color: 'black',
        transmission: 'automatic stepless (CVT)',
        condition: 'used',
        FV: 'yes',
        petrolType: 'petrol',
        steeringWheel: 'left',
        doorsNumber: 2,
        seatsNumber: 4
      },
      url: 'https://www.otomoto.pl/oferta/porsche-carrera-gt-pierwszy-wlasciciel-po-serwisie-unikat-od-budrolpol-pelna-akcyza-i-vat-ID6B3tQI.html#54823fda81',
      price: {
        value: 999_999,
        currency: 'EUR'
      },
      features: {
        trustLevel: 9
      }
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
        capacity: 2.2,
        body: 'hatchback',
        color: 'green',
        doorsNumber: 2,
        seatsNumber: 5,
        transmission: 'automatic hydraulic',
        condition: 'used',
        FV: 'yes',
        petrolType: 'petrol',
        steeringWheel: 'left'
      },
      url: 'https://www.olx.pl/oferta/honda-civic-viii-1-8-i-vtec-type-s-CID5-IDxDc9x.html#0c8909f4af',
      price: {
        value: 1_000_000,
        currency: 'GBP'
      },
      features: {
        trustLevel: 1
      }
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
        capacity: 5.5,
        body: 'suv',
        color: 'black',
        doorsNumber: 5,
        seatsNumber: 5,
        transmission: 'automatic dual-clutch(dct,dsg)',
        condition: 'used',
        FV: 'no',
        petrolType: 'diesel',
        steeringWheel: 'left'
      },
      features: {
        favourite: true
      },
      url: 'https://www.autogielda.pl/sprzedam_mercedes_ml_63,mercedes_ml_63,IN8WKKJ.html',
      price: {
        value: 35_000,
        currency: 'EUR'
      },

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
        capacity: 3.6,
        body: 'suv',
        color: 'black',
        doorsNumber: 5,
        seatsNumber: 5,
        transmission: 'automatic dual-clutch(dct,dsg)',
        condition: 'used',
        FV: 'no',
        petrolType: 'diesel',
        steeringWheel: 'left'
      },
      features: {
        favourite: true
      },
      url: 'https://www.autogielda.pl/sprzedam_inne,gmc_acadia_denali,IN8TRYR.html',
      price: {
        value: 135_000,
        currency: 'PLN'
      }
    }, {
      service: Services.AUTO_GIELDA,
      seller: Sellers.PRZEMEK,
      images: ['https://d-mf.ppstatic.pl/art/9v/6r/cy8lf0o4wc0ws840os8wo/4e4b8383bc29b-d.1200.jpg'],
      title: 'NISSAN QASHQAI +2 2013 DIESEL 1.5',
      car: {
        brand: 'NISSAN',
        model: 'QASHQAI +2',
        year: 2013,
        hp: 115,
        millage: 154000,
        capacity: 1.5
      },
      features: {
        favourite: true
      },
      url: 'https://www.autogielda.pl/sprzedam_nissan_42,nissan_qashqai__2_rok_2013_diesel_1_5,IP8RWFX.html',
      price: {
        value: 39_000,
        currency: 'PLN'
      }
    }, {
      service: Services.KUP_AUTO,
      seller: Sellers.KASIA,
      images: ['http://www.autopanel.pl/upload/photos/1685589_b03d721d81fbb7ec024c95c23c16762c.jpg'],
      title: 'Audi A3 2.0TDi CR 150KM Alu Nawi Ks serwis',
      car: {
        brand: 'Audi',
        model: 'A3',
        year: 2014,
        hp: 150,
        millage: 9513,
        capacity: 2.0
      },
      features: {
        favourite: true
      },
      url: 'http://www.kup-auto.pl/index.php?s=card&id=100908',
      price: {
        value: 51_900,
        currency: 'PLN'
      }
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
      price: {
        value: 29_500,
        currency: 'PLN'
      },
      features: {
        trustLevel: 7
      }
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
      features: {
        favourite: true
      },
      url: 'https://www.aaaauto.pl/pl/toyota-yaris/car.html?id=242229257#category=12&srclp=small&promo=b',
      price: {
        value: 55_000,
        currency: 'PLN'
      },
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
      features: {
        favourite: true,
        trustLevel: 10,
        premium: true
      },
      url: 'https://www.aaaauto.pl/pl/vw-arteon/car.html?id=220542916',
      price: {
        value: 207_000,
        currency: 'PLN'
      },
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
      price: {
        value: 125_000,
        currency: 'PLN',
        rateValue: 2_000,
        rates: 60
      },
      features: {
        premium: true,
        trustLevel: 10
      }
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
