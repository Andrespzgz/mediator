import { MediadorChatGrupal } from "./MediadorChatGrupal";
import { Usuario } from "./Usuario";

const usuarios: Usuario[] = [];

const mediador = new MediadorChatGrupal(usuarios);

const usuario1 = new Usuario("Alice", mediador);
const usuario2 = new Usuario("Bob", mediador);
const usuario3 = new Usuario("Charlie", mediador);

mediador.agregarEmisor(usuario1);
mediador.agregarEmisor(usuario2);
mediador.agregarEmisor(usuario3);

usuario1.enviar("Hola a todos, soy Alice.");
console.log('\n');
usuario2.enviar("Hola Alice, soy Bob.");
console.log('\n');
usuario3.enviar("Hola Alice y Bob, soy Charlie.");
console.log('\n');
console.log("Fin del programa.");