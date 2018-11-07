interface SearchParams {
  query?: String;
  brand?: String;
  model?: String;
  area?: String;
  areaRange: number;
  carBody: CarBody[];
  yearOfProd?: Range;
  hp?: Range;
  transmission: Transmission[];
  engineCapacity?: Range;
  milage?: Range;
  origin?: string[];
  price?: Range;
  petrol: Petrol[];
  condition?: Condition;
  color: string[];
  steeringWheel: SteeringWheelSide[];
}

interface Range {
  from?: number;
  to?: number;
}

type Condition = 'notDamaged' | 'damaged';
type Petrol = 'diesel' | 'petrol' | 'LPG' | 'CNG/Hybrid' | 'electric';
type Transmission = 'automatic.hydraulic' |
  'automatic.stepless (CVT)' |
  'automatic.dual-clutch(dct,dsg)' |
  'manual' |
  'half-automatic';

type SteeringWheelSide = 'right' | 'left';

type CarBody = 'cabrio' | 'sedan' | 'hatchback' | 'minibus' | 'minivan' | 'SUV' | 'coupe' | 'off road' | 'combi' | 'pickup';

