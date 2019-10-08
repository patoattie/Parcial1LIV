import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarElementoComponent } from './componentes/BorrarElemento/borrar-elemento/borrar-elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    BorrarElementoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
