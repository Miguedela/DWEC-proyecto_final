import { Ijuego } from './ijuego';

export interface Ijuegos {
    juegos: Ijuego[];
    anterior: string | null;
    posterior: string | null;
}
