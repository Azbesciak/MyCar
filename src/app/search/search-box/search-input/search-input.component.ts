import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  myControl = new FormControl();
  @Input()
  title: string;

  @Input()
  possibleValues: string[] = [];
  suggestions: Observable<string[]>;

  ngOnInit() {
    this.suggestions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.possibleValues
      .filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
