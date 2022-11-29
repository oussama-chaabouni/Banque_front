import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObligationRoutingModule } from './obligation-routing.module';
import { ObligationComponent } from './obligation/obligation.component';
import {MatSliderModule} from "@angular/material/slider";
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ObligationComponent
  ],
  imports: [
    CommonModule,
    ObligationRoutingModule,
    MatSliderModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ObligationModule { }
