import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrustIndicatorComponent} from './trust-indicator.component';

@NgModule({
  declarations: [TrustIndicatorComponent],
  exports: [TrustIndicatorComponent],
  imports: [
    CommonModule
  ]
})
export class TrustIndicatorModule {
}
