import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultercreditRoutingModule } from './consultercredit-routing.module';
import { ConsultercreditComponent } from './consultercredit/consultercredit.component';


@NgModule({
  declarations: [
    ConsultercreditComponent
  ],
  imports: [
    CommonModule,
    ConsultercreditRoutingModule
  ]
})
export class ConsultercreditModule { }
