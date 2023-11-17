import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cirurgia } from '../models/cirurgias';



@Injectable()
export class CirurgiasService {
  private API_URL = `${environment.API_URL}/cirurgias`;

  constructor(private http: HttpClient) {}

  criar(cirurgia: Cirurgia): Observable<Cirurgia> {
    return this.http.post<Cirurgia>(this.API_URL, cirurgia);
  }

  editar(id: number, cirurgia: Cirurgia): Observable<Cirurgia> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<Cirurgia>(url, cirurgia);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Cirurgia>(url);
  }

  selecionarPorId(id: number): Observable<Cirurgia> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Cirurgia>(url);
  }

  selecionarTodos(): Observable<Cirurgia[]> {
    return this.http.get<Cirurgia[]>(this.API_URL);
  }
}