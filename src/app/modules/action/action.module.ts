import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionRoutingModule } from './action-routing.module';
import { ActionComponent } from './action/action.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {TradingComponent} from "../trading/trading.component";
import * as CanvasJSAngularChart from 'src/assets/canvasjs.angular.component';
import {MatTabsModule} from "@angular/material/tabs";
import { NgApexchartsModule } from "ng-apexcharts";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    ActionComponent,TradingComponent,CanvasJSChart
  ],
    imports: [
        CommonModule,
        ActionRoutingModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTabsModule,
        NgApexchartsModule,
      ReactiveFormsModule

    ]
})
export class ActionModule { }
