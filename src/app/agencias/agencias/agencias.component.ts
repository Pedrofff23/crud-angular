import { Component, OnInit } from '@angular/core';
import { AgenciasService } from '../services/agencias.service';
import { Agencia } from '../model/agencia';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.scss']
})

export class AgenciasComponent implements AfterViewInit {

  public agencias$: Observable<Agencia[]>;

  constructor(private agenciaService: AgenciasService){
    this.agencias$ = this.agenciaService.getAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os bancos.');
        return of ([])
      })
    )
  }
  onError(arg0: string) {
    throw new Error('Method not implemented.');
  }



}
