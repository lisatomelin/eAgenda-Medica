import { Component, Input } from '@angular/core';
import { ListarCirurgiasViewModel } from '../models/listar-cirurgias.View-Model';

@Component({
  selector: 'app-card-cirurgia',
  templateUrl: './card-cirurgia.component.html',
  styleUrls: ['./card-cirurgia.component.scss']
})
export class CardCirurgiaComponent {
  @Input({ required: true }) cirurgia!: ListarCirurgiasViewModel;

}
