import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'epargnemensuel',
        component: OverviewComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
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
export class AccountRoutingModule {}
