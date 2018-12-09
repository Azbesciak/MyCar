import {Component, Input, OnInit} from '@angular/core';
import {ValueRange} from '../search-params';
import {ValueInput} from '../value-input';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent extends ValueInput<ValueRange> implements OnInit {
  @Input()
  name: string;

  ngOnInit() {
  }


}
