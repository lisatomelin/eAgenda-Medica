import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';
import { Medico } from '../models/medicos';
import { Observable, map } from 'rxjs';
import { ListarMedicosViewModel } from '../models/listar-medicos.View-Model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.scss']
})
export class ListarMedicosComponent implements OnInit{

  medicos: ListarMedicosViewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(map((dados) => dados['medicos'])).subscribe({
      next: (medicos) => this.obterCmedicos(medicos),
      error: (erro) => this.processarFalha(erro),
    });
  }

  obterCmedicos(medicos: ListarMedicosViewModel[]) {
    this.medicos = medicos;
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}

