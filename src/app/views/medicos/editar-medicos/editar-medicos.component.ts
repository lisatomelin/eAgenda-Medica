import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../models/medicos';
import { MedicosService } from '../services/medicos.service';
import { ToastrService } from 'ngx-toastr';
import { FormsMedicosViewModel } from '../models/forms-medicos.View-Model';

@Component({
  selector: 'app-editar-medicos',
  templateUrl: './editar-medicos.component.html',
  styleUrls: ['./editar-medicos.component.scss']
})
export class EditarMedicosComponent {
    form!: FormGroup;
    

    constructor(
      private fb: FormBuilder,
      private medicosService: MedicosService,
      private router: Router,
      private toastrService: ToastrService,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.form = this.fb.group({
        CRM: new FormControl('', [Validators.required]),
        Nome: new FormControl('', [Validators.required]),
        Telefone: new FormControl('', [Validators.required]),     
      });

      this.form.patchValue(this.route.snapshot.data['medico']);
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
  
      const id = this.route.snapshot.paramMap.get('id')!;
  
      this.medicosService.editar(id, this.form?.value).subscribe((res) => {
        this.toastrService.success(
          `O médico"${res.Nome}" foi editada com sucesso!`,
          'Sucesso'
        );
  
        this.router.navigate(['/medicos/listar']);
      });
    }
}