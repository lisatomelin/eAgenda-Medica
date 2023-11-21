import { Component, Input } from '@angular/core';
import { ListarConsultasViewModel } from '../models/listar-consultas.View-Model';

@Component({
  selector: 'app-card-consulta',
  templateUrl: './card-consulta.component.html',
  styleUrls: ['./card-consulta.component.scss']
})
export class CardConsultaComponent {

  @Input({ required: true }) consulta!: ListarConsultasViewModel;
}



