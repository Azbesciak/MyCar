import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeyValueComponent {

  @Input()
  key: string;

  @Input()
  value: string;

}
