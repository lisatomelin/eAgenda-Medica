import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirurgiasRoutingModule } from './cirurgias-routing.module';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CirurgiasService } from './services/cirugias.service';
import { InserirCirurgiasComponent } from './inserir-cirurgias/inserir-cirurgias.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarCirurgiasComponent,
    InserirCirurgiasComponent,
    
  ],
  imports: [
    CommonModule,
    CirurgiasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  
  providers: [CirurgiasService],
})
export class CirurgiasModule { }
