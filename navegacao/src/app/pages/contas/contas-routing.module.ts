import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasPage } from './contas.page';

const routes: Routes = [
  {
    path: '',
    component: ContasPage
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasPageRoutingModule {}
