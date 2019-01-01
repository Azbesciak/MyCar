import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarOfferService} from './car-offer.service';
import {MatDialogModule} from '@angular/material';
import {CarOfferModalComponent} from './car-offer-modal/car-offer-modal.component';
import {CarOfferComponent} from './car-offer.component';
import {KeyValueModule} from '../../ui/key-value/key-value.module';

@NgModule({
  declarations: [CarOfferModalComponent, CarOfferComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    KeyValueModule
  ],
  providers: [
    CarOfferService
  ],
  entryComponents: [CarOfferModalComponent, CarOfferComponent]
})
export class CarOfferModule {
}
