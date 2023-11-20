import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consulta } from '../models/consultas';



@Injectable()
export class ConsultasService {
  private API_URL = `${environment.API_URL}/consultas`;

  constructor(private http: HttpClient) {}

  criar(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.API_URL, consulta);
  }

  editar(id: number, consulta: Consulta): Observable<Consulta> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<Consulta>(url, consulta);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Consulta>(url);
  }

  selecionarPorId(id: number): Observable<Consulta> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Consulta>(url);
  }

  selecionarTodos(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.API_URL);
  }
}