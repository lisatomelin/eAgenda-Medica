import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../models/medicos';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-editar-medicos',
  templateUrl: './editar-medicos.component.html',
  styleUrls: ['./editar-medicos.component.scss']
})
export class EditarMedicosComponent {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private medicosService: MedicosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      CRM: [''],
      Nome: [''],
      Telefone: [''],     
    });
  }

  gravar(): void {

    const id = this.route.snapshot.paramMap.get('id')!;

    this.medicosService.editar(id, this.form?.value).subscribe({
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
