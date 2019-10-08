import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListadoComponent } from './componentes/listado/listado.component';
import { Punto2Component } from './componentes/punto2/punto2/punto2.component';
import { Punto3Component } from './componentes/punto3/punto3/punto3.component';


const routes: Routes = 
[
  //{ path: 'listado', component: ListadoComponent }
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3', component: Punto3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
