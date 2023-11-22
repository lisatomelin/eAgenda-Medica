import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { FormsMedicosViewModel } from "../models/forms-medicos.View-Model";
import { VisualizarMedicosViewModel } from "../models/visualizar-medicos.View-Model";
import { ListarMedicosViewModel } from "../models/listar-medicos.View-Model";

@Injectable()
export class MedicosService {
  private API_URL = `${environment.API_URL}/medicos`;

  constructor(private http: HttpClient) {}

  criar(medico: FormsMedicosViewModel): Observable<FormsMedicosViewModel> {
    return this.http.post<FormsMedicosViewModel>(this.API_URL, medico);
  }

  editar(id: string, medico: FormsMedicosViewModel): Observable<FormsMedicosViewModel> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<FormsMedicosViewModel>(url, medico);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<VisualizarMedicosViewModel>(url);
  }

  selecionarPorId(id: string): Observable<VisualizarMedicosViewModel> {
    const url = `${this.API_URL}/visualizacao-completa/${id}`;

    return this.http.get<any>(url)
    .pipe(map(res => res.dados));
  }

  selecionarTodos(): Observable<ListarMedicosViewModel[]> {
    return this.http.get<any>(this.API_URL)
    .pipe(map(res => res.dados));
  }

}