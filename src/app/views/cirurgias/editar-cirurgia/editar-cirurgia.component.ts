import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';
import { MedicosService } from '../../medicos/services/medicos.service';
import { Cirurgia } from '../models/cirurgias';
import { CirurgiasService } from '../services/cirugias.service';

@Component({
  selector: 'app-editar-cirurgia',
  templateUrl: './editar-cirurgia.component.html',
  styleUrls: ['./editar-cirurgia.component.scss']
})
export class EditarCirurgiaComponent implements OnInit{

  form?: FormGroup;
  medicos: ListarMedicosViewModel[] = [];

  constructor(
    private fb: FormBuilder,
    private cirurgiasService: CirurgiasService,
    private medicosService: MedicosService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
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
        (MedicosSelecionados) => (this.medicos = MedicosSelecionados)
      );
  }

  gravar(): void {

    const id = this.route.snapshot.paramMap.get('id')!; 

    this.cirurgiasService.editar(id, this.form?.value).subscribe({
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
