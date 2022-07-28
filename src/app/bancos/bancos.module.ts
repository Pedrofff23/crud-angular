import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { BancosRoutingModule } from './bancos-routing.module';
import { BancosComponent } from './bancos/bancos.component';


@NgModule({
  declarations: [
    BancosComponent
  ],
  imports: [
    CommonModule,
    BancosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class BancosModule { }
