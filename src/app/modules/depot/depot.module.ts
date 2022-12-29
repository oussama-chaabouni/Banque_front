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
import {DepotComponent} from "./depot.component";

const routes: Routes = [
  {
    path: '',
    component: DepotComponent
  }
]

@NgModule({
  declarations: [DepotComponent],
  bootstrap: [DepotComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        InlineSVGModule,
        Ng2SearchPipeModule

    ]
})
export class DepotModule {}
