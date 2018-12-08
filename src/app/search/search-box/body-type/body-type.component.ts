import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.scss']
})
export class BodyTypeComponent implements OnInit {
  bodyTypes: CarBody[] = [
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
  constructor() {
  }

  ngOnInit() {
  }

}
