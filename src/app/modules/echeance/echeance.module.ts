import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcheanceRoutingModule } from './echeance-routing.module';
import { EcheanceComponent } from './echeance/echeance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EcheanceComponent
  ],
  imports: [
    CommonModule,
    EcheanceRoutingModule,
    FormsModule
  ]
})
export class EcheanceModule { }
