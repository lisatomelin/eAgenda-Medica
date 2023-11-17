import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { InserirCirurgiasComponent } from './inserir-cirurgias/inserir-cirurgias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },

  {
    path: 'listar',
    component: ListarCirurgiasComponent,
  },

  {
    path: 'inserir',
    component: InserirCirurgiasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirurgiasRoutingModule { }
