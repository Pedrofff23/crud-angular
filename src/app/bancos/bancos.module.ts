import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { BancosRoutingModule } from './bancos-routing.module';
import { BancosComponent } from './bancos/bancos.component';
import { BancoFormComponent } from './banco-form/banco-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BancosComponent,
    BancoFormComponent,
  ],
  imports: [
    CommonModule,
    BancosRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BancosModule { }
