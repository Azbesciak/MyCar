import {EventEmitter, Input, Output} from '@angular/core';

export abstract class ValueInput<T> {

  @Input()
  value: T;

  @Input()
  name: string;
}

export abstract class MutableValueInput<T> extends ValueInput<T> {

  @Output()
  valueChange = new EventEmitter<T>();

  updateValue(newVal: T) {
    this.value = newVal;
    this.valueChange.next(newVal);
  }

}
