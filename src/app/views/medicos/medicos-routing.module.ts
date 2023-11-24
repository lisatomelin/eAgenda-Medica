import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { InserirMedicosComponent } from './inserir-medicos/inserir-medicos.component';
import { EditarMedicosComponent } from './editar-medicos/editar-medicos.component';
import { ExcluirMedicosComponent } from './excluir-medicos/excluir-medicos.component';
import { MedicosService } from './services/medicos.service';

import { ConsultasService } from '../consultas/services/consultas.service';
import { VisualizarConsultasViewModel } from '../consultas/models/visualizar-consultas.View-Model';
import { VisualizarMedicosViewModel } from './models/visualizar-medicos.View-Model';


const listarMedicosResolver = () => {
  return inject(MedicosService).selecionarTodos();
};

const formsMedicosResolver = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id')!;  

  return inject(MedicosService).selecionarPorId(id);
};

const visualizarMedicosResolver: ResolveFn<VisualizarMedicosViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(MedicosService).selecionarPorId(
    route.paramMap.get('id')!
  );
};

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
    resolve: { medico: listarMedicosResolver },
  },

  {
    path: 'editar/:id',
    component: EditarMedicosComponent,
    resolve: { medico: formsMedicosResolver },
  },

  {
    path: 'excluir/:id',
    component: ExcluirMedicosComponent,
    resolve: { medico: visualizarMedicosResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
