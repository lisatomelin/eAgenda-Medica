import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { InserirMedicosComponent } from './inserir-medicos/inserir-medicos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicosService } from './services/medicos.service';


@NgModule({
  declarations: [
    ListarMedicosComponent,
    InserirMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],

  providers: [MedicosService],
})
export class MedicosModule { }
