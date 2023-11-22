import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';
import { MedicosService } from '../../medicos/services/medicos.service';
import { CirurgiasService } from '../services/cirugias.service';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
      data: [''],
      horaInicio: [''],
      horaTermino: [''],
      medicoId: new FormControl(''),
    });

    this.medicosService
      .selecionarTodos()
      .subscribe(
        (MedicosSelecionados) => (this.medicos = MedicosSelecionados)
      );
  }

  campoEstaInvalido(titulo: string) {
    return this.form?.get(titulo)!.touched && this.form?.get(titulo)!.invalid;
  }

  gravar() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }

    const id = this.route.snapshot.paramMap.get('id')!;

    this.cirurgiasService.editar(id, this.form?.value).subscribe((res) => {
      this.toastrService.success(
        `A cirurgia"${res.titulo}" foi editada com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/cirugias/listar']);
    });
  }
 
  


}
