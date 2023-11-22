import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';
import { InserirConsultasComponent } from './inserir-consultas/inserir-consultas.component';
import { EditarConsultasComponent } from './editar-consultas/editar-consultas.component';
import { ExcluirConsultasComponent } from './excluir-consultas/excluir-consultas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },

  {
    path: 'listar',
    component: ListarConsultasComponent,
  },

  {
    path: 'inserir',
    component: InserirConsultasComponent,
  },

  {
    path: 'editar/:id',
    component: EditarConsultasComponent,
  },

  {
    path: 'excluir/:id',
    component: ExcluirConsultasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
