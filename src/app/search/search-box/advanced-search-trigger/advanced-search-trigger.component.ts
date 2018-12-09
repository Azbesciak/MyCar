import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-advanced-trigger',
  templateUrl: './advanced-search-trigger.component.html',
  styleUrls: ['./advanced-search-trigger.component.scss']
})
export class AdvancedSearchTriggerComponent {

  @Input()
  advanced = false;

  @Output()
  advancedChange = new EventEmitter<boolean>();

  updateView(visible: boolean) {
    this.advanced = visible;
    this.advancedChange.emit(visible);
  }
}
