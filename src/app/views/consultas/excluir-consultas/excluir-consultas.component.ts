import { Component } from '@angular/core';
import { VisualizarConsultasViewModel } from '../models/visualizar-onsultas.View-Model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-excluir-consultas',
  templateUrl: './excluir-consultas.component.html',
  styleUrls: ['./excluir-consultas.component.scss']
})
export class ExcluirConsultasComponent {

  consultasVM?: VisualizarConsultasViewModel;

  constructor(
    private consultasService: ConsultasService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.consultasVM = this.route.snapshot.data['consultas'];
  }

  gravar() {
    this.consultasService.excluir(this.consultasVM!.id).subscribe(() => {
      this.toastrService.success(
        `A consulta foi excluída com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/consultas', 'listar']);
    });
  }

}
