import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Medico } from "../models/medicos";

@Injectable()
export class MedicosService {
  private API_URL = `${environment.API_URL}/medicos`;

  constructor(private http: HttpClient) {}

  criar(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.API_URL, medico);
  }

  editar(id: number, medico: Medico): Observable<Medico> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<Medico>(url, medico);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Medico>(url);
  }

  selecionarPorId(id: number): Observable<Medico> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Medico>(url);
  }

  selecionarTodos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.API_URL);
  }

}