export interface Car {
  brand: string;
  model: string;
  year: number;
  city: string;
  imageURL: string;
}

export interface CarRecommendation {
  title: string;
  owner: string;
  car: Car;
  price: string;
  service: string;
  url: string;
  serviceLogo: string;
  serviceUrl: string;
}
