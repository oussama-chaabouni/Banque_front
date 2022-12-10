import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditaccepteComponent } from './creditaccepte/creditaccepte.component';


const routes: Routes = [
  {
    path: '',
    component: CreditaccepteComponent,
  },
 ]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditaccepteRoutingModule { }
