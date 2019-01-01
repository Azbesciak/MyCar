export interface SearchParams {
  query?: String;
  brand?: String;
  model?: String;
  area?: String;
  areaRange?: number;
  carBody: CarBody[];
  yearOfProd?: ValueRange;
  hp?: ValueRange;
  transmission: Transmission[];
  engineCapacity?: ValueRange;
  millage?: ValueRange;
  origin: string[];
  price?: ValueRange;
  petrol: Petrol[];
  condition?: Condition;
  color: string[];
  steeringWheel: SteeringWheelSide[];
}

export interface ValueRange {
  from?: number;
  to?: number;
}

export type Condition = 'notDamaged' | 'damaged';
export type Petrol = 'diesel' | 'petrol' | 'LPG' | 'CNG/Hybrid' | 'electric';
export const petrols: Petrol[] = [
  'diesel',
  'petrol',
  'electric',
  'CNG/Hybrid',
  'LPG'
];
export type Transmission =
  'automatic hydraulic' |
  'automatic stepless (CVT)' |
  'automatic dual-clutch(dct,dsg)' |
  'manual' |
  'half-automatic';
export const transmission: Transmission[] = [
  'manual',
  'automatic dual-clutch(dct,dsg)',
  'automatic hydraulic',
  'automatic stepless (CVT)',
  'half-automatic'
];

export type SteeringWheelSide = 'right' | 'left';
export const steeringWheel: SteeringWheelSide[] = ['right', 'left'];

export type CarBody = 'cabrio' | 'sedan' | 'hatchback' | 'minibus' |
  'minivan' | 'suv' | 'coupe' | 'offroad' | 'combi' | 'pickup';

export const bodyTypes: CarBody[] = [
  'cabrio',
  'combi',
  'coupe',
  'hatchback',
  'minibus',
  'minivan',
  'pickup',
  'sedan',
  'offroad',
  'suv'
];

