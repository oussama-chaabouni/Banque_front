import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {PayementComponent} from "./payement.component";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {InlineSVGModule} from "ng-inline-svg";

const routes: Routes = [
  {
    path: '',
    component: PayementComponent
  }
]

@NgModule({
  declarations: [PayementComponent],
  bootstrap: [PayementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2SearchPipeModule,
    InlineSVGModule

  ]
})

export class PayementModule {}
