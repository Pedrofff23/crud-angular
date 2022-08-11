import { BancoFormComponent } from './banco-form/banco-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancosComponent } from './bancos/bancos.component';

const routes: Routes = [
  { path:'', component: BancosComponent  },
  { path:'new', component: BancoFormComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }
