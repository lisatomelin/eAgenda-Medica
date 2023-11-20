import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consultas';
import { Observable } from 'rxjs';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.scss']
})
export class ListarConsultasComponent implements OnInit{

  consultas$?: Observable<Consulta[]>;

  constructor(private consultasService: ConsultasService) {}

  ngOnInit(): void {
    this.consultas$ = this.consultasService.selecionarTodos();
  }
  

}
