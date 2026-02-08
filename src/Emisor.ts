import { IMediador } from "./IMediador";

export class Emisor {
  protected mediador: IMediador<Emisor>;

  constructor(mediador: IMediador<Emisor>) {
    this.mediador = mediador;
  }

  enviar(evento: string): void {
    this.mediador.notificar(this, evento);
  }
}