import { Injectable } from '@angular/core';
import { LocalPeliculasService } from '../localPeliculas/local-peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private localPeliculas: LocalPeliculasService) { }

  public BuscarTodos(): Pelicula[]
  {
    return this.localPeliculas.getPeliculas();
  }
}
