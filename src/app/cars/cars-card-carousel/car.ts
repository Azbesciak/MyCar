export interface Car {
  brand: string;
  model: string;
  year: number;
  hp: number;
  millage: number;
  capacity: number;
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
  price: string;
  images: string[];
  car: Car;
  service: Service;
  seller: Seller;
  favourite?: boolean;
  url: string;
}
