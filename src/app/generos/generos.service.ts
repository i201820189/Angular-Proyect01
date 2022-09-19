import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + "generos";

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiUrl, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<generoDTO>{
    return this.http.get<generoDTO>(`${this.apiUrl}/${id}`);
  }

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiUrl, genero);
  }

  public editar(id: number,genero: generoCreacionDTO){
    return this.http.put(`${this.apiUrl}/${id}`, genero);
  }
}
