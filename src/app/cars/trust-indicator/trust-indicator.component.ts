import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trust-indicator',
  templateUrl: './trust-indicator.component.html',
  styleUrls: ['./trust-indicator.component.scss']
})
export class TrustIndicatorComponent implements OnInit {

  @Input()
  trustLevel: number;

  constructor() {
  }

  ngOnInit() {
  }

}
