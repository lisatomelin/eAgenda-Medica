import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from '../services/consultas.service';
import { Observable, map } from 'rxjs';
import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { FormsConsultaViewModel } from '../models/forms-consultas.View-Model';

@Component({
  selector: 'app-editar-consultas',
  templateUrl: './editar-consultas.component.html',
  styleUrls: ['./editar-consultas.component.scss']
})
export class EditarConsultasComponent {

    form?: FormGroup;
    medicos?: Observable<ListarMedicosViewModel[]>

    constructor(
      private formBuilder: FormBuilder,
      private consultasService: ConsultasService,      
      private router: Router,
      private notification: NotificationService,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        titulo: new FormControl('', [Validators.required]),
        data: new FormControl('', [Validators.required,]),
        horaInicio: new FormControl('', [Validators.required]),
        horaTermino: new FormControl('', [Validators.required]),
        medicoId: new FormControl('', [Validators.required]),
      }); 
    

      this.medicos = this.route.data.pipe(map(dados => dados['medicos']));

      const consulta = this.route.snapshot.data['consulta'];

      this.form.patchValue(consulta);
    }

    campoEstaInvalido(titulo: string) {
      return this.form?.get(titulo)!.touched && this.form?.get(titulo)!.invalid;
    }

    gravar(): void {
      const id = this.route.snapshot.paramMap.get('id')!;

      this.consultasService.editar(id, this.form?.value).subscribe({
        next: (res) => this.processarSucesso(res),
        error: (err) => this.processarFalha(err),
      });
    }
    processarSucesso(res: FormsConsultaViewModel) {
      this.router.navigate(['/consultas', 'listar']);
    }
  
    processarFalha(err: any) {
      this.notification.erro(err.error.erros[0]);
    }

}
