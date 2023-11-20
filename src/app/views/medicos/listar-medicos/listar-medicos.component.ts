import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';
import { Medico } from '../models/medicos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.scss']
})
export class ListarMedicosComponent implements OnInit{

  medicos$?: Observable<Medico[]>;

  constructor(private medicosService: MedicosService) {}

  ngOnInit(): void {
    this.medicos$ = this.medicosService.selecionarTodos();
  }
}
