import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TransactionComponent} from "./transaction.component";
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  }
]

@NgModule({
  declarations: [TransactionComponent],
  bootstrap: [TransactionComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        InlineSVGModule

    ]
})
export class TransactionModule {}
