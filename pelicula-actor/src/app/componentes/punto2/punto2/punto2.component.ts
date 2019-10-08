import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { PeliculasService } from '../../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit 
{
  public peliculas: Pelicula[] = [];
  public peliculaSeleccionada: Pelicula;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public procesarNovedades($event: any): void
  {
    //this.peliculas = $event;
    //this.peliculas = this.peliculas.filter((unaPelicula) => unaPelicula.id != $event.id);
    this.peliculaSeleccionada = $event;
console.info('procesarNovedades', this.peliculaSeleccionada);
  }

  public procesarBaja(): void
  {
    this.peliculas = this.leerPeliculas();
console.log('procesarBaja');
  }
}
