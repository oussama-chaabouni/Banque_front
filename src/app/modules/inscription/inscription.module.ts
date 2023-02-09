import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import {Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
     ]
})
export class InscriptionModule { }
