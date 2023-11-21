import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { InserirCirurgiasComponent } from './inserir-cirurgias/inserir-cirurgias.component';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';

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

  {
    path: 'editar',
    component: EditarCirurgiaComponent,
  },

  {
    path: 'excluir',
    component: ExcluirCirurgiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirurgiasRoutingModule { }
