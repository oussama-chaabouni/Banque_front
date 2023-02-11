import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpargnemensuelComponent } from './epargnemensuel/epargnemensuel.component';
import { EpargnetrimestrielComponent } from './epargnetrimestriel/epargnetrimestriel.component';
import { SimulateurepargneComponent } from './simulateurepargne.component';
import {EpargnesemestrielComponent} from "./epargnesemestriel/epargnesemestriel.component";

const routes: Routes = [
  {
    path: '',
    component: SimulateurepargneComponent,
    children: [
      {
        path: 'epargnemensuel',
        component: EpargnemensuelComponent,
      },
      {
        path: 'epargnetrimestriel',
        component: EpargnetrimestrielComponent,
      },
      {
        path: 'epargnesemestriel',
        component: EpargnesemestrielComponent,
      },
      { path: '', redirectTo: 'epargnemensuel', pathMatch: 'full' },
      { path: '**', redirectTo: 'epargnemensuel', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulateurepargneRoutingModule {}
