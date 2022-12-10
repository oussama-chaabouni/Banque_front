import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongeComponent } from './conge/conge.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CongeComponent
  ],
  imports: [
    CommonModule,
    CongeRoutingModule,
    FormsModule,
  ]
})
export class CongeModule { }
