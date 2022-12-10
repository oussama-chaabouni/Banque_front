import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditrefuseRoutingModule } from './creditrefuse-routing.module';
import { CreditrefuseComponent } from './creditrefuse/creditrefuse.component';


@NgModule({
  declarations: [
    CreditrefuseComponent
  ],
  imports: [
    CommonModule,
    CreditrefuseRoutingModule
  ]
})
export class CreditrefuseModule { }
