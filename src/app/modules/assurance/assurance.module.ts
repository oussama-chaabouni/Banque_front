import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuranceRoutingModule } from './assurance-routing.module';
import { AssuranceComponent } from './assurance/assurance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssuranceComponent
  ],
  imports: [
    CommonModule,
    AssuranceRoutingModule,
    FormsModule,
  ]
})
export class AssuranceModule { }
