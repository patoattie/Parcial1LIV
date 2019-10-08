import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit 
{
  public peliculas: Pelicula[] = [];
  public peliculasFiltradas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.leerPeliculas();
    this.peliculasFiltradas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public novedadExistePelicula($event): void
  {
    this.peliculasFiltradas = $event;
  }

}
