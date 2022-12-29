import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ReclamationComponent} from "./reclamation.component";
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg";
import {Ng2SearchPipeModule} from "ng2-search-filter";

const routes: Routes = [
  {
    path: '',
    component: ReclamationComponent
  }
]

@NgModule({
  declarations: [ReclamationComponent],
  bootstrap: [ReclamationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    InlineSVGModule,
    Ng2SearchPipeModule,

  ]
})

export class ReclamationModule {}
