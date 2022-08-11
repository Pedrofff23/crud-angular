import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap, Observable, take } from 'rxjs';

import { Banco } from './../model/banco';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private readonly API = 'api/bancos'; //= 'assets/bancos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Banco[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(bancos => console.log(bancos))
    );
  }

  loadByID(_id: number) {
    return this.httpClient.get<Banco>(`${this.API}/${_id}`).pipe(take(1));
  }

  save(record: Banco){
    return this.httpClient.post<Banco>(this.API, record).pipe(first());
  }

  update(update: Banco){
    return this.httpClient.put<Banco>(this.API, update);
  }   

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
