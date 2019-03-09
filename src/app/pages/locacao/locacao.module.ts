import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocacaoPage } from './locacao.page';

const routes: Routes = [
  {
    path: 'menu',
    component: LocacaoPage,
    children: [
      {
        path: 'equipamentos',
        loadChildren: '../equipamentos/equipamentos.module#EquipamentosPageModule'
      },
      {
        path: 'carrinho',
        loadChildren: '../carrinho/carrinho.module#CarrinhoPageModule'
      },
      {
        path: 'pedidos',
        loadChildren: '../pedidos/pedidos.module#PedidosPageModule'
      },
      {
        path: 'ajuda',
        loadChildren: '../ajuda/ajuda.module#AjudaPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/equipamentos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocacaoPage]
})
export class LocacaoPageModule {}
