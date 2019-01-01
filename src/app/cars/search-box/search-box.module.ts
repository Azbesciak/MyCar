import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxComponent} from './search-box.component';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatIconModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchInputComponent} from './search-input/search-input.component';
import {BodyTypeComponent} from './body-type/body-type.component';
import {RangeInputComponent} from './range-input/range-input.component';
import {AdvancedSearchTriggerComponent} from './advanced-search-trigger/advanced-search-trigger.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {SmallInputComponent} from './range-input/small-input/small-input.component';
import {ColorSelectComponent} from './color-select/color-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    SearchInputComponent,
    BodyTypeComponent,
    RangeInputComponent,
    AdvancedSearchTriggerComponent,
    AdvancedSearchComponent,
    SmallInputComponent,
    ColorSelectComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule {
}
