import {Component, OnInit} from '@angular/core';
import {MutableValueInput} from '../value-input';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss']
})
export class ColorSelectComponent extends MutableValueInput<string[]> implements OnInit {
  colors = [
    'red',
    'orange',
    'yellow',
    'black',
    'blue',
    'gray'
  ];

  ngOnInit() {
  }

}
