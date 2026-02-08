# Aplicación de Chat Grupal (TypeScript)

##  Descripción

Esta aplicación es un sistema de **chat grupal** desarrollado en **TypeScript**, diseñado siguiendo principios de diseño orientados a reducir el acoplamiento entre objetos y mejorar la mantenibilidad del sistema.

En lugar de permitir que cada usuario se comunique directamente con todos los demás, la aplicación centraliza la comunicación a través de una **Sala de Chat (mediador)** que coordina el intercambio de mensajes entre los participantes.

Este enfoque está inspirado en el **Patrón de Diseño Mediator**.

---

##  Escenario

Los usuarios pueden enviarse mensajes dentro de una sala de chat compartida. Sin un mecanismo de coordinación central, cada usuario tendría que conocer y gestionar referencias a todos los demás participantes, lo que genera:

- Dependencias innecesarias  
- Dificultad para escalar  
- Problemas de mantenimiento  
- Código poco limpio y difícil de entender  

---

##  Problema que resuelve

Sin un mediador:

- Cada usuario necesitaría referencias directas a todos los demás.
- Agregar o eliminar usuarios implicaría modificar múltiples clases y relaciones.
- El sistema se volvería una red compleja y difícil de mantener.

---

##  Solución Implementada

Se introduce una **Sala de Chat (`MediatorChatGrupal`)** como mediador central que:

- Recibe mensajes de los usuarios.
- Distribuye los mensajes a los destinatarios correspondientes.
- Gestiona el registro y eliminación de usuarios.

Los usuarios solo se comunican con la sala de chat, **no entre sí directamente**.

---

##  Beneficios de esta arquitectura

1. **Facilita el mantenimiento**  
   - Puedes agregar o eliminar usuarios sin modificar otros componentes.

2. **Mejor organización del código**  
   - Toda la lógica de comunicación está centralizada en el mediador (`MediatorChatGrupal`).

3. **Reduce la complejidad del sistema**  
   - Evita relaciones punto a punto entre usuarios.

---

## Cómo ejecutar

```bash
yarn install
yarn run build
yarn run start

```
---

##  Arquitectura y Diagrama de Clases

El sistema sigue el **Patrón Mediator**, donde:

- `Usuario` → es el colega concreto.
- `Emisor` → es la clase base de los participantes.
- `IMediador` → define el contrato del mediador.
- `MediadorChatGrupal` → coordina la comunicación.

```mermaid
classDiagram

    class IMediador {
        <<interface>>
        + notificar(emisor, evento): void
    }

    class IReceptor {
        <<interface>>
        + recibir(mensaje): void
    }

    class Emisor {
        # mediador: IMediador
        + enviar(evento): void
    }

    class Usuario {
        - nombre: string
        + getNombre(): string
        + recibir(mensaje): void
    }

    class MediadorChatGrupal {
        - emisores: (Emisor & IReceptor)[]
        + agregarEmisor(emisor)
        + notificar(emisor, evento)
    }

    IMediador <|.. MediadorChatGrupal
    IReceptor <|.. Usuario
    Emisor <|-- Usuario
    Emisor --> IMediador
