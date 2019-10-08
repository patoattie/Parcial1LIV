import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit 
{
  //public peliculas: Pelicula[] = [];
  @Input() peliculas: Pelicula[] = [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    //this.peliculas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public leerPelicula(pelicula: Pelicula): void
  {
console.info('leerPelicula', pelicula);
    this.peliculaSeleccionada.emit(pelicula);
  }
}
