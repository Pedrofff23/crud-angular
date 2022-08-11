import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agencia } from './../model/agencia';
import { delay, first, tap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenciasService {
  private apiServerUrl ='api/agencias';

  constructor(private http: HttpClient) {

   }

public getAll(): Observable<Agencia[]>{
  return this.http.get<Agencia[]>(this.apiServerUrl)
    .pipe(
      first(),
      delay(1000),
      tap(bancos => console.log(bancos))
    );
//return this.http.get<Agencia[]>(`${this.apiServerUrl}`)
}
public getOne(agenciaId : number): Observable<Agencia>{
  return this.http.get<Agencia>(`${this.apiServerUrl}/${agenciaId}`)
}

public newAgencia(agencia : Agencia): Observable<Agencia>{
return this.http.post<Agencia>(`${this.apiServerUrl}/new`, agencia)
}

public updateAgencia(agencia : Agencia):Observable<Agencia>{
  return this.http.put<Agencia>(`${this.apiServerUrl}/${agencia.id}`, agencia)
}

public deleteAgencia(agenciaId : number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/${agenciaId}`)
}
}
