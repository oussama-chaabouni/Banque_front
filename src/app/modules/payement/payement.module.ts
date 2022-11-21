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
import {PayementComponent} from "./payement.component";
import {DrawersModule, DropdownMenusModule, ExtrasModule, ModalsModule} from "../../_metronic/partials";

const routes: Routes = [
  {
    path: '',
    component: PayementComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [PayementComponent],
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
export class PayementModule {}
