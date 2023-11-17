import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';
import { InserirConsultasComponent } from './inserir-consultas/inserir-consultas.component';


@NgModule({
  declarations: [
    ListarConsultasComponent,
    InserirConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
