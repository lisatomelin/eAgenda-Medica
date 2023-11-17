import { Component, OnInit } from '@angular/core';
import { CirurgiasService } from '../services/cirugias.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cirurgia } from '../models/cirurgias';

@Component({
  selector: 'app-inserir-cirurgias',
  templateUrl: './inserir-cirurgias.component.html',
  styleUrls: ['./inserir-cirurgias.component.scss']
})
export class InserirCirurgiasComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cirurgiasService: CirurgiasService,
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
    this.cirurgiasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Cirurgia) {
    this.router.navigate(['/cirurgias', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }
 
  

}
