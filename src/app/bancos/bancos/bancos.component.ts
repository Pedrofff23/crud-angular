import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, Observable, of } from 'rxjs';

import { Banco } from './../model/banco';
import { BancosService } from './../services/bancos.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})


export class BancosComponent implements AfterViewInit {

  bancos$: Observable<Banco[]>;
  //bancos: Banco[] = [];
  displayedColumns = ['nome', 'numero'];
  //dataSource = new MatTableDataSource<Banco>(BANCO_DATA);

  //bancosService: BancosService;

  constructor(
    private bancosService: BancosService,
    public dialog: MatDialog
    ){
    //this.bancosService = new BancosService();
    this.bancos$ = this.bancosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os bancos.');
        return of ([])
      })
    );

    //this.bancosService.list().subscribe(bancos => this.bancos = bancos);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

@ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void{
    //this.dataSource.paginator = this.paginator;
  }
}

// const BANCO_DATA : Banco[] = [
//   { _id:1, nome:'Banco', numero:'1'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'2'},
//   {_id:1, nome:'Banco', numero:'3'},
//   {_id:1, nome:'Banco', numero:'3'},
//   {_id:1, nome:'Banco', numero:'3'},
//   {_id:1, nome:'Banco', numero:'3'},
// ];

// export class BancosComponent implements AfterViewInit {

//   displayedColumns = ['nome', 'numero'];
//   dataSource = new MatTableDataSource<Banco>(BANCO_DATA);

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }
// }
