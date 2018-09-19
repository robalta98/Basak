import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { AyudarComponent } from './ayudar/ayudar.component';
import { QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';

const routes: Routes = [
  {
    path: 'antecedentes',
    component: AntecedentesComponent
  },
  {
    path: 'ayudar',
    component: AyudarComponent
  },
  {
    path: 'donar',
    component: DonarComponent
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'que-hacemos',
    component: QueHacemosComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
