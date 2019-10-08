import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListadoComponent } from './componentes/listado/listado.component';
import { Punto2Component } from './componentes/punto2/punto2/punto2.component';


const routes: Routes = 
[
  //{ path: 'listado', component: ListadoComponent }
  { path: 'listado', component: Punto2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
