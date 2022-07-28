import { BancosComponent } from './bancos/bancos/bancos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bancos' },
  {
    path: 'bancos',
    loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule)
  },
  { path: 'agencia', loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule) },
  { path: 'login', loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule) },
  { path: 'home', loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
