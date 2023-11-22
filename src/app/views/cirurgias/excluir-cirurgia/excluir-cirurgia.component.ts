import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisualizarCirurgiasViewModel } from '../models/visualizar-cirgias.View-Model';
import { CirurgiasService } from '../services/cirugias.service';
import { map } from 'rxjs';

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
    this.route.data.pipe(map((dados) => dados['cirurgia'])).subscribe({
      next: (cirurgia) => this.obterCirurgia(cirurgia),
      error: (erro) => this.processarFalha(erro),
    });
  }

  gravar() {
    this.cirurgiasService.excluir(this.cirurgiaVM!.id).subscribe({
      next: () => this.processarSucesso(),
      error: (err) => this.processarFalha(err),
    });
  }

  obterCirurgia(cirurgia: VisualizarCirurgiasViewModel) {
    this.cirurgiaVM = cirurgia;
  }

  processarSucesso() {
    this.toastrService.success(
      `A cirurgia foi excluída com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/cirurgias', 'listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }

}
