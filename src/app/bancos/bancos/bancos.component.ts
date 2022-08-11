import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, EMPTY, Observable, of, switchMap, take } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';

import { Banco } from './../model/banco';
import { BancosService } from './../services/bancos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})

export class BancosComponent implements AfterViewInit {

  bancos$: Observable<Banco[]>;
  displayedColumns = ['nome', 'numero','actions'];

  
  bancoSelecionado!: Banco;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  constructor(
    private service: BancosService,
    private bancosService: BancosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ){
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

  onAdd() {
    this.router.navigate(['new'] , {relativeTo:this.route});
  }

  onDelete(banco: Banco) {
    this.bancoSelecionado = banco;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse banco?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(banco._id) : EMPTY)
    )
    .subscribe(
      (      success: any) => {
        this.onRefresh();
      },
      (      error: any) => {
        this.alertService.showAlertDanger('Erro ao remover banco. Tente novamente mais tarde.');
      }
    );
  }
  onRefresh() {
    throw new Error('Method not implemented.');
  }

  onConfirmDelete() {
    this.service.remove(this.bancoSelecionado._id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover banco. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
  // onDelete(id: number) {
  //   this.bancosService.delete(id)
  //   .subscribe(()=>{
  //     this.bancos$ = this.bancos$.
  //   });
  // }
}
//só queria uma ponte

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
