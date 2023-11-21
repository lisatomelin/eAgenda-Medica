import { Component, OnInit } from '@angular/core';
import { CirurgiasService } from '../services/cirugias.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cirurgia } from '../models/cirurgias';
import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';
import { MedicosService } from '../../medicos/services/medicos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inserir-cirurgias',
  templateUrl: './inserir-cirurgias.component.html',
  styleUrls: ['./inserir-cirurgias.component.scss']
})
export class InserirCirurgiasComponent implements OnInit {
  form?: FormGroup;
  medico: ListarMedicosViewModel[] = [];

  constructor(
    private fb: FormBuilder,
    private cirurgiasService: CirurgiasService,
    private medicosService: MedicosService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Titulo: [''],
      Data: [''],
      HoraInicio: [''],
      HoraTermino: [''],
      medicoId: new FormControl(''),
    });

    this.medicosService
      .selecionarTodos()
      .subscribe(
        (MedicosSelecionados) => (this.medico = MedicosSelecionados)
      );
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
