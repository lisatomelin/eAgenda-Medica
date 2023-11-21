import { Component, Input } from '@angular/core';
import { ListarMedicosViewModel } from '../models/listar-medicos.View-Model';

@Component({
  selector: 'app-card-medico',
  templateUrl: './card-medico.component.html',
  styleUrls: ['./card-medico.component.scss']
})
export class CardMedicoComponent {

  @Input({ required: true }) medico!: ListarMedicosViewModel;
}


