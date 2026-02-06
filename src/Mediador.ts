export interface Mediador<E> {
  notificar(emisor: E, evento: string): void;
}