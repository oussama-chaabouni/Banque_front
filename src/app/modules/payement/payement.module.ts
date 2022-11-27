import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {PayementComponent} from "./payement.component";
import {FormsModule} from "@angular/forms";

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

  ]
})

export class PayementModule {}
