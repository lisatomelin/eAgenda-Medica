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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this. medicosVM = this.route.snapshot.data['medico'];
  }

  gravar() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.medicosService.excluir(id).subscribe(() => {
      this.toastrService.success(
        `O Médico foi excluída com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/medicos', 'listar']);
    });
  }
}


