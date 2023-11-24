import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirurgiasRoutingModule } from './cirurgias-routing.module';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CirurgiasService } from './services/cirugias.service';
import { InserirCirurgiasComponent } from './inserir-cirurgias/inserir-cirurgias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import 'src/app/extensions/form-group.extension';
import { MedicosService } from '../medicos/services/medicos.service';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';
import { VisualizarMedicoCirurgiaComponent } from './visualizar-medico-cirurgia/visualizar-medico-cirurgia.component';



@NgModule({
  declarations: [
    ListarCirurgiasComponent,
    InserirCirurgiasComponent,
    EditarCirurgiaComponent,
    ExcluirCirurgiaComponent,
    VisualizarMedicoCirurgiaComponent,
    
    
  ],
  imports: [
    CommonModule,
    CirurgiasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  
  providers: [CirurgiasService, MedicosService],
})
export class CirurgiasModule { }
