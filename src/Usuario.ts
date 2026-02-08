import { Emisor } from "./Emisor";
import { IMediador } from "./IMediador";

export class Usuario extends Emisor {
  private nombre: string;

  constructor(nombre: string, mediador: IMediador<Emisor>) {
    super(mediador);
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }

  recibir(mensaje: string): void {
    console.log(`${this.nombre} recibió: ${mensaje}`);
  }

}