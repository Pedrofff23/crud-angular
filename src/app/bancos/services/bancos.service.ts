import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

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
}
