import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CamelCaseToNormalPipe} from './camel-case-to-normal.pipe';

@NgModule({
  declarations: [CamelCaseToNormalPipe],
  exports: [CamelCaseToNormalPipe],
  imports: [
    CommonModule
  ]
})
export class CamelCaseToNormalModule { }
