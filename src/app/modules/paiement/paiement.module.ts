import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {TablesComponent} from "../widgets-examples/tables/tables.component";
import {WidgetsExamplesComponent} from "../widgets-examples/widgets-examples.component";
import {WidgetsExamplesRoutingModule} from "../widgets-examples/widgets-examples-routing.module";
import {WidgetsModule} from "../../_metronic/partials";
import {PaiementComponent} from "./paiement.component";
import {NgxPayPalModule} from "ngx-paypal";

const routes: Routes = [
  {
    path: '',
    component: PaiementComponent
  }
]

@NgModule({
  declarations: [PaiementComponent],
  bootstrap: [PaiementComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        InlineSVGModule,
        Ng2SearchPipeModule,
      NgxPayPalModule

    ]
})
export class PaiementModule {}
