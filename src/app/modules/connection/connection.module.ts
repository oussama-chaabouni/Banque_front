import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {InscriptionRoutingModule} from "../inscription/inscription-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    InscriptionRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ConnectionModule { }
