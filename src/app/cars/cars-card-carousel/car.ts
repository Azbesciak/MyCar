import {CarBody, Condition, FVType, Petrol, SteeringWheelSide, Transmission} from '../search-box/search-params';

export interface Car {
  brand: string;
  model: string;
  condition?: Condition;
  year: number;
  hp: number;
  millage: number;
  capacity: number;
  body?: CarBody;
  transmission?: Transmission;
  petrolType?: Petrol;
  color?: string;
  FV?: FVType;
  steeringWheel?: SteeringWheelSide;
  doorsNumber?: number;
  seatsNumber?: number;
  [key: string]: any;
}

export interface Service {
  logoUrl: string;
  url: string;
  name: string;
}

export interface Seller {
  name: string;
  city: string;
}

export interface CarOffer {
  title: string;
  price: Price;
  images: string[];
  car: Car;
  service: Service;
  seller: Seller;
  features: Features;
  url: string;
}

export interface Price {
  value: number;
  currency: string;
  toNegotiate?: boolean;
  rates?: number;
  rateValue?: number;
  net?: boolean;
}

export interface Features {
  premium?: boolean;
  trustLevel?: number;
  favourite?: boolean;
}
