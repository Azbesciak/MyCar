import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {MutableValueInput} from '../value-input';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent extends MutableValueInput<string> implements OnInit {
  myControl = new FormControl();

  @Input()
  possibleValues: string[] = [];
  suggestions: Observable<string[]>;

  ngOnInit() {
    this.myControl.setValue(this.value);
    this.suggestions = this.myControl.valueChanges.pipe(
      tap(v => this.updateValue(v)),
      map(value => this._filter(value))
    );
  }

  updateValue(newVal: string) {
    super.updateValue(newVal);
    this.myControl.setValue(newVal, {emitEvent: false, onlySelf: true});
  }

  private _filter(value: string): string[] {
    if (!value) {
      return this.possibleValues;
    }
    const filterValue = value.toLowerCase();

    return this.possibleValues
      .filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
