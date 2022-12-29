import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploisComponent } from './emplois/emplois.component';


const routes: Routes = [
  {
    path: '',
    component: EmploisComponent,
  },
 ]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploisRoutingModule { }
