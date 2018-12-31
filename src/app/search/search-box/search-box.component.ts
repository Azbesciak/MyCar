import {Component, OnInit} from '@angular/core';
import {CarBody, Condition, Petrol, SearchParams, SteeringWheelSide, Transmission, ValueRange} from './search-params';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchParams = new SearchParamsModel();
  advancedSearch = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

}

class SearchParamsModel implements SearchParams {
  area: String;
  areaRange: number;
  brand: String;
  carBody: CarBody[] = [];
  color: string[] = [];
  condition: Condition;
  engineCapacity: ValueRange = {};
  hp: ValueRange = {};
  millage: ValueRange = {};
  model: String;
  origin: string[] = [];
  petrol: Petrol[] = [];
  price: ValueRange = {};
  query: String;
  steeringWheel: SteeringWheelSide[] = [];
  transmission: Transmission[] = [];
  yearOfProd: ValueRange = {};
}
