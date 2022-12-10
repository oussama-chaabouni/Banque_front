import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandecreditRoutingModule } from './demandecredit-routing.module';
import { DemandecreditComponent } from './demandecredit/demandecredit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemandecreditComponent
  ],
  imports: [
    CommonModule,
    DemandecreditRoutingModule,
    FormsModule
  ]
})
export class DemandecreditModule { }
