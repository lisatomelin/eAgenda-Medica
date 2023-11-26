import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ListarMedicosViewModel } from '../../medicos/models/listar-medicos.View-Model';
import { FormsConsultaViewModel } from '../models/forms-consultas.View-Model';
import { ListarConsultaViewModel } from '../models/listar-consultas.View-Model';
import { VisualizarConsultaViewModel } from '../models/visualizar-consultas.View-Model';



@Injectable()
export class ConsultasService {
  private API_URL = `${environment.API_URL}/Consulta`;

  constructor(private http: HttpClient) {}

  criar(consulta: FormsConsultaViewModel): Observable<FormsConsultaViewModel> {
    return this.http.post<FormsConsultaViewModel>(this.API_URL, consulta);
  }

  editar(id: string, consulta: FormsConsultaViewModel): Observable<FormsConsultaViewModel> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<FormsConsultaViewModel>(url, consulta);
  }

  excluir(id: string): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<VisualizarConsultaViewModel>(url);
  }

  selecionarPorIdCompleto(id: string): Observable<VisualizarConsultaViewModel> {
    const url = `${this.API_URL}/visualizacao-completa/${id}`;

    return this.http.get<any>(url)
    .pipe(map(res => res.dados));
  }

  selecionarPorId(id: string): Observable<FormsConsultaViewModel> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<any>(url)
    .pipe(map(res => res.dados));
  }

  selecionarTodos(): Observable<ListarConsultaViewModel[]> {
    return this.http.get<any>(this.API_URL)
    .pipe(map(res => res.dados));
  }

  selecionarTodosMedicosCirurgias(id: string): Observable<ListarMedicosViewModel[]> {
    const url = `${this.API_URL}/medicos/${id}`;

    return this.http.get<any>(url)
    .pipe(map(res => res.dados), tap(x => console.log(x)));
  }
}