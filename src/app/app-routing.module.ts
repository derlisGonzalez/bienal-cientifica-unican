import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CriteriosComponent } from './pages/criterios/criterios.component';
import { CriterioComponent } from './pages/criterio/criterio.component';
import { DisertantesComponent } from './pages/disertantes/disertantes.component';
import { DisertanteComponent } from './pages/disertante/disertante.component';
import { EvaluadoresComponent } from './pages/evaluadores/evaluadores.component';
import { EvaluadorComponent } from './pages/evaluador/evaluador.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  { path: 'carreras', component: CarrerasComponent },
  { path: 'carrera/:id', component: CarreraComponent },

  { path: 'categorias', component: CategoriasComponent },
  { path: 'categoria/:id', component: CategoriaComponent },

  { path: 'criterios', component: CriteriosComponent },
  { path: 'criterio/:id', component: CriterioComponent },

  { path: 'disertantes', component: DisertantesComponent },
  { path: 'disertante/:id', component: DisertanteComponent },

  { path: 'evaluadores', component: EvaluadoresComponent },
  { path: 'evaluador/:id', component: EvaluadorComponent },

  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto/:id', component: ProyectoComponent },

  { path: 'calificaciones', component: CalificacionesComponent },
  { path: 'calificacione/:id', component: CalificacionesComponent },

  { path: 'inicio', component: InicioComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/inicio' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
