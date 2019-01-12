import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavouriteBtnComponent} from './favourite-btn.component';
import {MatButtonModule, MatIconModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [FavouriteBtnComponent],
  exports: [FavouriteBtnComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class FavouriteBtnModule {
}
