import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditencoursComponent } from './creditencours/creditencours.component';

const routes: Routes = [
  {
    path: '',
    component: CreditencoursComponent,
  },
 ]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditencoursRoutingModule { }
