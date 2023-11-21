import { Component, OnInit } from '@angular/core';
import { VisualizarMedicosViewModel } from '../models/visualizar-medicos.View-Model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-excluir-medicos',
  templateUrl: './excluir-medicos.component.html',
  styleUrls: ['./excluir-medicos.component.scss']
})
export class ExcluirMedicosComponent implements OnInit{

  medicosVM!: VisualizarMedicosViewModel;

  constructor(
    private medicosService: MedicosService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(map((dados) => dados['medico'])).subscribe({
      next: (medico) => this.obterMedico(medico),
      error: (erro) => this.processarFalha(erro),
    });
  }

  gravar() {
    this.medicosService.excluir(this.medicosVM!.id).subscribe({
      next: () => this.processarSucesso(),
      error: (err) => this.processarFalha(err),
    });
  }

  obterMedico(medico: VisualizarMedicosViewModel) {
    this.medicosVM = medico;
  }

  processarSucesso() {
    this.toastrService.success(
      `O médico foi excluído com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/medicos', 'listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}


