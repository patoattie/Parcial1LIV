import { ETipo } from '../enums/etipo.enum';

export class Pelicula 
{
    public id: number;
    public nombre: string;
    public tipo: ETipo;
    public estreno: Date;
    public cantidad: number;
    public foto: string;

    constructor(id?: number, nombre?: string, tipo?: ETipo, estreno?: Date, cantidad?: number, foto?: string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.estreno = estreno;
        this.cantidad = cantidad;
        this.foto = foto;
    }
}
