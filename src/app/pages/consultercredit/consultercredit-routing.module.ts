import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultercreditComponent } from './consultercredit/consultercredit.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultercreditComponent,
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultercreditRoutingModule { }
