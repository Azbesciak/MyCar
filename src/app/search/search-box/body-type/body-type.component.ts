import {Component, OnInit} from '@angular/core';
import {CarBody, bodyTypes as bt} from '../search-params';
import {MutableValueInput} from '../value-input';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.scss']
})
export class BodyTypeComponent extends MutableValueInput<CarBody[]> implements OnInit {
  bodyTypes = bt;

  ngOnInit() {
  }

}
