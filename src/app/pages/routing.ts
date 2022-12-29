import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'test',
    loadChildren: () =>
      import('../modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'action',
    loadChildren: () =>
      import('../modules/action/action.module').then((m) => m.ActionModule),
  },
  {
    path: 'obligation',
    loadChildren: () =>
      import('../modules/obligation/obligation.module').then((m) => m.ObligationModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  }

  //BACK
  ,{
    path: 'transaction',
    loadChildren: () => import('../modules/transaction/transaction.module').then((m )=> m.TransactionModule)
  },
  /*{  HEDHI LEL REDIRECTION LI TALBETHA 3MANEWEL
    path: 'ajoutertransaction',
    loadChildren: () => import('./views/pages/addtransaction/add-transaction.module').then(m => m.AddTransactionModule)
  }, */
  {
    path: 'payement',
    loadChildren: () => import('../modules/payement/payement.module').then((m ) => m.PayementModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('../modules/reclamation/reclamation.module').then((m ) => m.ReclamationModule)
  },



// FRONT
  {
    path: 'depot',
    loadChildren: () => import('../modules/depot/depot.module').then((m )=> m.DepotModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('../modules/retrait/retrait.module').then((m )=> m.RetraitModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('../modules/paiement/paiement.module').then((m )=> m.PaiementModule)
  },
  {
    path: 'virementimmediat',
    loadChildren: () => import('../modules/virementimmediat/virementimmediat.module').then((m )=> m.VirementimmediatModule)
  },
  {
    path: 'virementdiffere',
    loadChildren: () => import('../modules/virementdiffere/virementdiffere.module').then((m )=> m.VirementdiffereModule)
  },
  {
    path: 'virementpermanent',
    loadChildren: () => import('../modules/virementpermanent/virementpermanent.module').then((m )=> m.VirementpermanentModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('../modules/formation/formation.module').then((m )=> m.FormationModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('../modules/formation/formation.module').then((m )=> m.FormationModule)
  },
  {
    path: 'formationfront',
    loadChildren: () => import('../modules/formationfront/formationfront.module').then((m )=> m.FormationfrontModule)
  },
  {
    path: 'formation_details',
    loadChildren: () => import('../modules/formation_details/formation_details.module').then((m )=> m.Formation_detailsModule)
  },
  {
    path: 'findallmyformation',
    loadChildren: () => import('../modules/findallmyformation/findallmyformation.module').then((m )=> m.FindallmyformationModule)
  },
  {
    path: 'findallmytransactions',
    loadChildren: () => import('../modules/findallmytransactions/findallmytransactions.module').then((m )=> m.FindallmytransactionsModule)
  },
  {
    path: 'afficherempsparticipants',
    loadChildren: () => import('../modules/afficherempsparticipants/afficherempsparticipants.module').then((m )=> m.AfficherempsparticipantsModule)
  },
  {
    path: 'paypal-button',
    loadChildren: () => import('../modules/paypal-button/paypal-button.module').then((m ) => m.PaypalButtonModule)
  },
  {
    path: 'salaire',
    loadChildren: () => import('../modules/salaire/salaire.module').then((m )=> m.SalaireModule)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
