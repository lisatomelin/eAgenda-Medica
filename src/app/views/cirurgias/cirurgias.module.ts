import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirurgiasRoutingModule } from './cirurgias-routing.module';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CirurgiasService } from './services/cirugias.service';
import { InserirCirurgiasComponent } from './inserir-cirurgias/inserir-cirurgias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';
import { CardCirurgiaComponent } from './card-cirurgia/card-cirurgia.component';
import 'src/app/extensions/form-group.extension';
import { MedicosService } from '../medicos/services/medicos.service';



@NgModule({
  declarations: [
    ListarCirurgiasComponent,
    InserirCirurgiasComponent,
    EditarCirurgiaComponent,
    ExcluirCirurgiaComponent,
    CardCirurgiaComponent,
    
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
