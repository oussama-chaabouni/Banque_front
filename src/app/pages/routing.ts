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

  {
    path: 'creditencours',
    loadChildren: () =>
      import('../pages/creditencours/creditencours.module').then((m) => m.CreditencoursModule),
   },

   {
    path: 'creditrefuse',
    loadChildren: () =>
      import('../pages/creditrefuse/creditrefuse.module').then((m) => m.CreditrefuseModule),
   },

   {
    path: 'creditaccepte',
    loadChildren: () =>
      import('../pages/creditaccepte/creditaccepte.module').then((m) => m.CreditaccepteModule),
   },
   

   {
    path: 'echeance',
    loadChildren: () =>
      import('../modules/echeance/echeance.module').then((m) => m.EcheanceModule),
   },

   {
    path: 'amort',
    loadChildren: () =>
      import('../pages/amortissement/amortissement.module').then((m) => m.AmortissementModule),
   },

   {
    path: 'demandecredit',
    loadChildren: () =>
      import('../pages/demandecredit/demandecredit.module').then((m) => m.DemandecreditModule),
   },
   
   
   

];

export { Routing };
