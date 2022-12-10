import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmortissementModule } from './amortissement.module';
import { AmortissementComponent } from './amortissement/amortissement.component';

const routes: Routes = [
  {
    path: '',
    component: AmortissementComponent,
  },
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmortissementRoutingModule { }
