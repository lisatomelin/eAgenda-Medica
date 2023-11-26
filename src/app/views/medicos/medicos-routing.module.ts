import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { InserirMedicosComponent } from './inserir-medicos/inserir-medicos.component';
import { EditarMedicosComponent } from './editar-medicos/editar-medicos.component';

import { MedicosService } from './services/medicos.service';
import { VisualizarMedicosViewModel } from './models/visualizar-medicos.View-Model';
import { ListarConsultaViewModel } from '../consultas/models/listar-consultas.View-Model';
import { ListarCirurgiasViewModel } from '../cirurgias/models/listar-cirurgias.View-Model';
import { VisualizarConsultasMedicoComponent } from './visualizar-consultas-medico/visualizar-consultas-medico.component';
import { VisualizarCirurgiasMedicoComponent } from './visualizar-cirurgias-medico/visualizar-cirurgias-medico.component';
import { ExcluirMedicoComponent } from './excluir-medicos/excluir-medicos.component';


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

const visualizarConsultasMedicoResolver: ResolveFn<ListarConsultaViewModel[]> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(MedicosService).selecionarConsultasMedico(
    route.paramMap.get('id')!
  );
};

const visualizarCirurgiasMedicoResolver: ResolveFn<ListarCirurgiasViewModel[]> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(MedicosService).selecionarCirurgiasMedico(
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
    component: ExcluirMedicoComponent,
    resolve: { medico: visualizarMedicosResolver },
  },

  {
    path: 'visualizar-medico-consultas/:id',
    component: VisualizarConsultasMedicoComponent,
    resolve: { consultas: visualizarConsultasMedicoResolver },
  },
  {
    path: 'visualizar-medico-cirurgias/:id',
    component: VisualizarCirurgiasMedicoComponent,
    resolve: { cirurgias: visualizarCirurgiasMedicoResolver },
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
