import {Component, Input} from '@angular/core';
import {MutableValueInput} from '../value-input';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html'
})
export class MultiSelectComponent<T extends Array<any>> extends MutableValueInput<T> {

  @Input()
  possibleValues: T;

}
