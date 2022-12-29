import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditaccepteRoutingModule } from './creditaccepte-routing.module';
import { CreditaccepteComponent } from './creditaccepte/creditaccepte.component';


@NgModule({
  declarations: [
    CreditaccepteComponent
  ],
  imports: [
    CommonModule,
    CreditaccepteRoutingModule
  ]
})
export class CreditaccepteModule { }
