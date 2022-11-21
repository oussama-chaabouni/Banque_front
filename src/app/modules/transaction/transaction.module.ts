import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from '../../modules/i18n';
import { Routing } from '../../pages/routing';
import {TransactionComponent} from "./transaction.component";
import {DrawersModule, DropdownMenusModule, ExtrasModule, ModalsModule} from "../../_metronic/partials";

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
  ],
  exports: [RouterModule],
})
export class TransactionModule {}
