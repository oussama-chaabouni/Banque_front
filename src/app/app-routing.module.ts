import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },

  {
    path: 'transaction',
    loadChildren: () => import('./modules/transaction/transaction.module').then((m )=> m.TransactionModule)
  },
  /*{  HEDHI LEL REDIRECTION LI TALBETHA 3MANEWEL
    path: 'ajoutertransaction',
    loadChildren: () => import('./views/pages/addtransaction/add-transaction.module').then(m => m.AddTransactionModule)
  }, */
  {
    path: 'payement',
    loadChildren: () => import('./modules/payement/payement.module').then((m ) => m.PayementModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./modules/reclamation/reclamation.module').then((m ) => m.ReclamationModule)
  },

  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },



  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
