import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { EducacionComponent } from "./componentes/educacion/educacion.component";
import { ExperienciaLaboralComponent } from "./componentes/experiencia-laboral/experiencia-laboral.component";
import { HabilidadesComponent } from "./componentes/habilidades/habilidades.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";
import { ExperienciasLaborales } from "./DB";

const rutas : Routes = [
    {path: "acerca-de" , component: AcercaDeComponent},
    {path: "laboral" , component: ExperienciaLaboralComponent},
    {path: "educacion" , component: EducacionComponent},
    {path: "habilidades" , component: HabilidadesComponent},
    {path: "proyectos" , component: ProyectosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class AppRoutingModule {}