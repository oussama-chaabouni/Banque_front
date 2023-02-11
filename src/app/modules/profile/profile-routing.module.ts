import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'epargnemensuel',
        component: OverviewComponent,
      },
      {
        path: 'epargnetrimestriel',
        component: ProjectsComponent,
      },
      {
        path: 'epargnesemestriel',
        component: CampaignsComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
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
export class ProfileRoutingModule {}
