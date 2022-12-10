import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditencoursRoutingModule } from './creditencours-routing.module';
import { CreditencoursComponent } from './creditencours/creditencours.component';


@NgModule({
  declarations: [
    CreditencoursComponent
  ],
  imports: [
    CommonModule,
    CreditencoursRoutingModule
  ]
})
export class CreditencoursModule { }
