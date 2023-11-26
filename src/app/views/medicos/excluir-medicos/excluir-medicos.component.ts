import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, forkJoin, map } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { VisualizarMedicosViewModel } from '../models/visualizar-medicos.View-Model';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-excluir-medicos',
  templateUrl: './excluir-medicos.component.html',
  styleUrls: ['./excluir-medicos.component.scss']
})
export class ExcluirMedicoComponent implements OnInit{
  medicosVM?: Observable<VisualizarMedicosViewModel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicosService: MedicosService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.medicosVM = this.route.data.pipe(map((res) => res['medico']));
  }

  gravar(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    const consultas$ = this.medicosService.selecionarConsultasMedico(id);
    const cirurgias$ = this.medicosService.selecionarCirurgiasMedico(id);

    forkJoin([consultas$, cirurgias$]).subscribe(([consultas, cirurgias]) => {
      if (consultas.length > 0) {
        this.notification.erro('O médico possui consultas agendadas, tente novamente mais tarde!');
        return;
      }

      if (cirurgias.length > 0) {
        this.notification.erro('O médico possui cirurgias agendadas, tente novamente mais tarde!');
        return;
      }

      this.medicosService.excluir(id).subscribe({
        next: () => this.processarSucesso(),
        error: (err) => this.processarFalha(err),
      });
    });
  }

  processarSucesso() {
    this.notification.sucesso(
      "O medico foi excluído com sucesso!"
    );

    this.router.navigate(['/medicos/listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.error.erros[0]);
  }
}