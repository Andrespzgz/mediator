import { Mediador } from "./Mediador";

export class Emisor {
  protected mediador: Mediador<Emisor>;

  constructor(mediador: Mediador<Emisor>) {
    this.mediador = mediador;
  }

  enviar(evento: string): void {
    this.mediador.notificar(this, evento);
  }
}