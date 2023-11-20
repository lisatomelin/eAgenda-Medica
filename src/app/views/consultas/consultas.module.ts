import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';
import { InserirConsultasComponent } from './inserir-consultas/inserir-consultas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultasService } from './services/consultas.service';


@NgModule({
  declarations: [
    ListarConsultasComponent,
    InserirConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],

  providers: [ConsultasService],
})
export class ConsultasModule { }
