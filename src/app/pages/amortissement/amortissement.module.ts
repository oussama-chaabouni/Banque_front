import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmortissementRoutingModule } from './amortissement-routing.module';
import { AmortissementComponent } from './amortissement/amortissement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AmortissementComponent
  ],
  imports: [
    CommonModule,
    AmortissementRoutingModule,
    FormsModule
    
  ]
})
export class AmortissementModule { }
