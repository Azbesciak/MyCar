import {Component, Input, OnInit} from '@angular/core';
import {CarRecommendation} from './car';

@Component({
  selector: 'app-cars-card-carousel',
  templateUrl: './cars-card-carousel.component.html',
  styleUrls: ['./cars-card-carousel.component.scss']
})
export class CarsCardCarouselComponent implements OnInit {

  @Input()
  cars: CarRecommendation[];

  constructor() {
  }

  ngOnInit() {
  }

}
