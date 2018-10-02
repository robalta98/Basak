import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { AyudarComponent } from './ayudar/ayudar.component';
import { QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { NuestrosProgramasComponent } from './nuestros-programas/nuestros-programas.component';
import { NuestraExperienciaComponent } from './nuestra-experiencia/nuestra-experiencia.component';
import { NuestraAliadosComponent } from './nuestros-aliados/nuestros-aliados.component';


const routes: Routes = [
  {
    path: 'agradecimientos',
    component: AgradecimientosComponent
  },
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
    path: 'nuestros-programas',
    component: NuestrosProgramasComponent
  },
  {
    path: 'nuestra-experiencia',
    component: NuestraExperienciaComponent
  },
  {
    path: 'nuestros-aliados',
    component: NuestraAliadosComponent
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
