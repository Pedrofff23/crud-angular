import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BancosService } from './../services/bancos.service';

@Component({
  selector: 'app-banco-form',
  templateUrl: './banco-form.component.html',
  styleUrls: ['./banco-form.component.scss']
})
export class BancoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: BancosService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      nome:[null],
      numero:[null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(data=>{this.onSucces()}, error => {this.onError()});
  }

  onCancel(){
    this.location.back();
  }

  private onSucces(){
    this.snackBar.open('Banco salvo com sucesso','',{duration:5000});
    this.onCancel;
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Banco','',{duration:5000});
  }
}
