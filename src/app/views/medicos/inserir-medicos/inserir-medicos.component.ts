import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../models/medicos';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-inserir-medicos',
  templateUrl: './inserir-medicos.component.html',
  styleUrls: ['./inserir-medicos.component.scss']
})
export class InserirMedicosComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private medicosService: MedicosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      CRM: [''],
      Nome: [''],
      Telefone: [''],     
    });
  }

  gravar(): void {
    this.medicosService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Medico) {
    this.router.navigate(['/medicos', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }
}
