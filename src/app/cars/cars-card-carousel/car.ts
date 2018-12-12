export interface Car {
  brand: string;
  model: string;
  year: number;
  city: string;
  imageURL: string;
  hp: number;
  millage: number;
  capacity: number;
}

export interface CarRecommendation {
  title: string;
  owner: string;
  car: Car;
  price: string;
  service: string;
  favourite?: boolean;
  url: string;
  serviceLogo: string;
  serviceUrl: string;
}
