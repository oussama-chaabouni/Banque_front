import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcheanceComponent } from './echeance/echeance.component';

const routes: Routes = [
  {
    path: '',
    component: EcheanceComponent,
  },
 ]
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcheanceRoutingModule { }
