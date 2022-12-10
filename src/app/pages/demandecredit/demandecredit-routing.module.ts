import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandecreditComponent } from './demandecredit/demandecredit.component';

const routes: Routes = [
  {
    path: '',
    component: DemandecreditComponent,
  },
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandecreditRoutingModule { }
