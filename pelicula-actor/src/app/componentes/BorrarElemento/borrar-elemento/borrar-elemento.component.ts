import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';

@Component({
  selector: 'app-borrar-elemento',
  templateUrl: './borrar-elemento.component.html',
  styleUrls: ['./borrar-elemento.component.css']
})
export class BorrarElementoComponent implements OnInit 
{
  @Input() peliculaParaBorrar: Pelicula;

  constructor() { }

  ngOnInit() {
  }

  borrarPelicula(): void
  {
console.info('borrarPelicula()', this.peliculaParaBorrar);
  }
}
