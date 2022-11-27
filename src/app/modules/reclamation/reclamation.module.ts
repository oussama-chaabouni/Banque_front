import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ReclamationComponent} from "./reclamation.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ReclamationComponent
  }
]

@NgModule({
  declarations: [ReclamationComponent],
  bootstrap: [ReclamationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

  ]
})

export class ReclamationModule {}
