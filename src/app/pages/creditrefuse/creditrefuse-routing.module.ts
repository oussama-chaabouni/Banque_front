import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditrefuseComponent } from './creditrefuse/creditrefuse.component';

const routes: Routes = [
  {
    path: '',
    component: CreditrefuseComponent,
  },
 ]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditrefuseRoutingModule { }
