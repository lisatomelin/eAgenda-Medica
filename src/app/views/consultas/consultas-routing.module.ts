import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';
import { InserirConsultasComponent } from './inserir-consultas/inserir-consultas.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
