import {Component, OnInit} from '@angular/core';
import {MutableValueInput} from '../../value-input';

@Component({
  selector: 'app-small-input',
  templateUrl: './small-input.component.html',
  styleUrls: ['./small-input.component.scss']
})
export class SmallInputComponent extends MutableValueInput<number> implements OnInit {
  placeholder;

  hidePlaceholder() {
    this.placeholder = undefined;
  }

  showPlaceholder() {
    this.placeholder = this.name;
  }

  ngOnInit(): void {
    this.placeholder = this.name;
  }
}
