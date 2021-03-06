import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeusDadosPage } from './meus-dados.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeusDadosPage]
})
export class MeusDadosPageModule {}
