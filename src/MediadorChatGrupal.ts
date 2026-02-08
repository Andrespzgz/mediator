import { Emisor } from "./Emisor";
import { IMediador } from "./IMediador";
import { IReceptor } from "./IReceptor";

export class MediadorChatGrupal implements IMediador<Emisor> {
  private emisores: (Emisor & IReceptor )[] = [];

  constructor(emisores: (Emisor& IReceptor)[]) {
    this.emisores = emisores;

  }

  agregarEmisor(emisor: (Emisor& IReceptor)): void {
    this.emisores.push(emisor);
  }


  notificar(emisor: Emisor, evento: string): void {
    for (const receptor of this.emisores) {
      if (receptor !== emisor) {
        (receptor).recibir(evento);
      }
    }
  }
}