import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploisRoutingModule } from './emplois-routing.module';
import { EmploisComponent } from './emplois/emplois.component';
import { CardsModule } from 'src/app/_metronic/partials';


@NgModule({
  declarations: [
    EmploisComponent
  ],
  imports: [
    CommonModule,
    EmploisRoutingModule,
    CardsModule,
  ]
})
export class EmploisModule { }
