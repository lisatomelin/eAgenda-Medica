import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisualizarCirurgiasViewModel } from '../models/visualizar-cirgias.View-Model';
import { CirurgiasService } from '../services/cirugias.service';

@Component({
  selector: 'app-excluir-cirurgia',
  templateUrl: './excluir-cirurgia.component.html',
  styleUrls: ['./excluir-cirurgia.component.scss']
})
export class ExcluirCirurgiaComponent {
  cirurgiaVM?: VisualizarCirurgiasViewModel;

  constructor(
    private cirurgiasService: CirurgiasService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cirurgiaVM = this.route.snapshot.data['cirurgia'];
  }

  gravar() {
    this.cirurgiasService.excluir(this.cirurgiaVM!.id).subscribe(() => {
      this.toastrService.success(
        `A cirurgia foi excluída com sucesso!`,
        'Sucesso'
      );

      this.router.navigate(['/cirurgias', 'listar']);
    });
  }

}
