import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObligationComponent} from "../obligation/obligation/obligation.component";

const routes: Routes = [
  {
  path: '',
  component: ObligationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObligationRoutingModule { }
