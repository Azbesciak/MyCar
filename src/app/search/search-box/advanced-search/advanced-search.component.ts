import {Component, Input, OnInit} from '@angular/core';
import {SearchParams, petrols as p, transmission as t, steeringWheel as sw} from '../search-params';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  @Input()
  searchParams: SearchParams;

  petrols = p;
  transmission = t;
  steeringWheel = sw;

  constructor() {
  }

  ngOnInit() {
  }

}
