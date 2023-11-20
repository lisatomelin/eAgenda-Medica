import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from '../models/consultas';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-inserir-consultas',
  templateUrl: './inserir-consultas.component.html',
  styleUrls: ['./inserir-consultas.component.scss']
})
export class InserirConsultasComponent implements OnInit {

  form?: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private consultasService: ConsultasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Titulo: [''],
      Data: [''],
      HoraInicio: [''],
      HoraTermino: [''],
    });
    
  }

  gravar(): void {
    this.consultasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Consulta) {
    this.router.navigate(['/consultas', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }

}
