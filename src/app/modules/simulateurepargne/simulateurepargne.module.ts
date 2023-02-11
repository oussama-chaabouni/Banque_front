import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { EpargnemensuelComponent } from './epargnemensuel/epargnemensuel.component';
import { EpargnetrimestrielComponent } from './epargnetrimestriel/epargnetrimestriel.component';
import { SimulateurepargneRoutingModule } from './simulateurepargne-routing.module';
import { SimulateurepargneComponent } from './simulateurepargne.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EpargnesemestrielComponent} from "./epargnesemestriel/epargnesemestriel.component";

@NgModule({
  declarations: [
    SimulateurepargneComponent,
    EpargnemensuelComponent,
    EpargnesemestrielComponent,
    EpargnetrimestrielComponent,
  ],
  imports: [
    CommonModule,
    SimulateurepargneRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    NgbModule,
    FormsModule,
  ],
})
export class SimulateurepargneModule {}
