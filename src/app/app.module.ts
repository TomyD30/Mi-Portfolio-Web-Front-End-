import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// // rutas (hecho por mi)
// import { AppRoutingModule } from './rutas';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { NavPrincipalComponent } from './componentes/nav-principal/nav-principal.component';
import { BarraDeNavegacionComponent } from './componentes/barra-de-navegacion/barra-de-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaLaboralComponent,
    NavPrincipalComponent,
    BarraDeNavegacionComponent
  ],
  imports: [
    BrowserModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
