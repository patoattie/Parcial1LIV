import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { PeliculasService } from '../../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-borrar-elemento',
  templateUrl: './borrar-elemento.component.html',
  styleUrls: ['./borrar-elemento.component.css']
})
export class BorrarElementoComponent implements OnInit 
{
  @Input() peliculaParaBorrar: Pelicula;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  borrarPelicula(): void
  {
//console.info('borrarPelicula()', this.peliculaParaBorrar);
    this.peliculasService.BorrarPelicula(this.peliculaParaBorrar);
  }
}
