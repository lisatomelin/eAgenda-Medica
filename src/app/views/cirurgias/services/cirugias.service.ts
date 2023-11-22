import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListarCirurgiasViewModel } from '../models/listar-cirurgias.View-Model';
import { VisualizarCirurgiasViewModel } from '../models/visualizar-cirgias.View-Model';
import { FormsCirurgiasViewModel } from '../models/forms-cirurgias.View-Model';



@Injectable()
export class CirurgiasService {
  private API_URL = `${environment.API_URL}/cirurgias`;

  constructor(private http: HttpClient) {}

  criar(cirurgia: FormsCirurgiasViewModel): Observable<FormsCirurgiasViewModel> {
    return this.http.post<FormsCirurgiasViewModel>(this.API_URL, cirurgia);
  }

  editar(id: string, cirurgia: FormsCirurgiasViewModel): Observable<FormsCirurgiasViewModel> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<FormsCirurgiasViewModel>(url, cirurgia);
  }

  excluir(id: string): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<VisualizarCirurgiasViewModel>(url);
  }

  selecionarPorId(id: string): Observable<VisualizarCirurgiasViewModel> {
    const url = `${this.API_URL}/visualizacao-completa/${id}`;

    return this.http.get<any>(url)
    .pipe(map(res => res.dados));
  }

  selecionarTodos(): Observable<ListarCirurgiasViewModel[]> {
    return this.http.get<any>(this.API_URL)
    .pipe(map(res => res.dados));
  }
}