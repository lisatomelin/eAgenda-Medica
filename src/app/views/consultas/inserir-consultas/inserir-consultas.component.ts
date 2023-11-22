import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';

@Component({
  selector: 'app-inserir-consultas',
  templateUrl: './inserir-consultas.component.html',
  styleUrls: ['./inserir-consultas.component.scss']
})
export class InserirConsultasComponent implements OnInit {

    form?: FormGroup; 
    medico: ListarMedicosViewModel[] = []; 

    constructor(
      private formBuilder: FormBuilder,
      private consultasService: ConsultasService,
      private router: Router,
      private toastrService: ToastrService,
    ) {}

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        titulo: new FormControl('', [Validators.required]),
        data: new FormControl('', [Validators.required]),
        horaInicio: new FormControl('', [Validators.required]),
        horaTermino: new FormControl('', [Validators.required]), 
        medicoId: new FormControl(''),

      });
    }
  
    campoEstaInvalido(nome: string) {
      return this.form?.get(nome)!.touched && this.form?.get(nome)!.invalid;
    }
  
    gravar() {
      if (this.form?.invalid) {
        for (let erro of this.form.validate()) {
          this.toastrService.warning(erro);
        }
  
        return;
      }
  
      this.consultasService.criar(this.form?.value).subscribe((res) => {
        this.toastrService.success(
          `A consulta "${res.Titulo}" foi cadastrada com sucesso!`,
          'Sucesso'
        );
  
        this.router.navigate(['/consultas/listar']);
      });
    }

  
}
