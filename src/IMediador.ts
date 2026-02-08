export interface IMediador<T> {
  notificar(emisor: T, evento: string): void;
}