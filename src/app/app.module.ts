import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { AyudarComponent } from './ayudar/ayudar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { NuestrosProgramasComponent } from './nuestros-programas/nuestros-programas.component';
import { NuestraExperienciaComponent } from './nuestra-experiencia/nuestra-experiencia.component';
import { NuestrosAliadosComponent } from './nuestros-aliados/nuestros-aliados.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AntecedentesComponent,
    AyudarComponent,
    QuienesSomosComponent,
    QueHacemosComponent,
    InicioComponent,
    DonarComponent,
    AgradecimientosComponent,
    NuestrosProgramasComponent,
    NuestraExperienciaComponent,
    NuestrosAliadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
