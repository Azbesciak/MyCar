import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxComponent} from './search-box.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatAutocompleteModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import {BodyTypeComponent} from './body-type/body-type.component';

@NgModule({
  declarations: [SearchBoxComponent, SearchInputComponent, BodyTypeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule {
}
