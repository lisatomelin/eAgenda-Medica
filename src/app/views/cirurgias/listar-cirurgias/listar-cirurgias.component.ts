import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cirurgia } from '../models/cirurgias';
import { CirurgiasService } from '../services/cirugias.service';
import { ListarCirurgiasViewModel } from '../models/listar-cirurgias.View-Model';


@Component({
  selector: 'app-listar-cirurgias',
  templateUrl: './listar-cirurgias.component.html',
  styleUrls: ['./listar-cirurgias.component.scss'],
})
export class ListarCirurgiasComponent implements OnInit {
  cirurgias$?: Observable<Cirurgia[]>;
  
  // cirurgias: ListarCirurgiasViewModel[] = [];

  constructor(private cirurgiasService: CirurgiasService) {}

  ngOnInit(): void {
    this.cirurgias$ = this.cirurgiasService.selecionarTodos();
  }
}