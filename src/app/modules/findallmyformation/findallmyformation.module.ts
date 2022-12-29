import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FindallmyformationComponent} from "./findallmyformation.component";
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {DropdownMenusModule} from "../../_metronic/partials";

const routes: Routes = [
  {
    path: '',
    component: FindallmyformationComponent
  }
]

@NgModule({
  declarations: [FindallmyformationComponent],
  bootstrap: [FindallmyformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    InlineSVGModule,
    Ng2SearchPipeModule,
    DropdownMenusModule

  ]
})
export class FindallmyformationModule {}
