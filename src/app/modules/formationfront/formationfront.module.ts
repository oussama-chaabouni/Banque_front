import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FormationfrontComponent} from "./formationfront.component";
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {DropdownMenusModule} from "../../_metronic/partials";

const routes: Routes = [
  {
    path: '',
    component: FormationfrontComponent
  }
]

@NgModule({
  declarations: [FormationfrontComponent],
  bootstrap: [FormationfrontComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    InlineSVGModule,
    Ng2SearchPipeModule,
    DropdownMenusModule

  ]
})
export class FormationfrontModule {}
