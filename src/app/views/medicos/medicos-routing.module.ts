import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { InserirMedicosComponent } from './inserir-medicos/inserir-medicos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },

  {
    path: 'listar',
    component: ListarMedicosComponent,
  },

  {
    path: 'inserir',
    component: InserirMedicosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }