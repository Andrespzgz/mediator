import { Emisor } from "./Emisor";
import { Mediador } from "./Mediador";

export class MediadorChatGrupal implements Mediador<Emisor> {
  private emisores: Emisor[] = [];

  constructor(emisores: Emisor[]) {
    this.emisores = emisores;
  }

  agregarEmisor(emisor: Emisor): void {
    this.emisores.push(emisor);
  }


  notificar(emisor: Emisor, evento: string): void {
    for (const receptor of this.emisores) {
      if (receptor !== emisor) {
        (receptor as any).recibir(evento);
      }
    }
  }
}