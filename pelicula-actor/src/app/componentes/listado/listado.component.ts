import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit 
{
  public peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.peliculasService.BuscarTodos();
  }
}
