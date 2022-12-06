import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TransactionComponent} from "./transaction.component";
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";
import {TablesComponent} from "../widgets-examples/tables/tables.component";
import {WidgetsExamplesComponent} from "../widgets-examples/widgets-examples.component";
import {WidgetsExamplesRoutingModule} from "../widgets-examples/widgets-examples-routing.module";
import {WidgetsModule} from "../../_metronic/partials";
import {Ng2SearchPipeModule} from "ng2-search-filter";

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
        InlineSVGModule,
        Ng2SearchPipeModule

    ]
})
export class TransactionModule {}
