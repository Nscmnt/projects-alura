import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Criando classes, cria-se moldes para instancia de objetos no sistema, nas classes se define atributos (características) e métodos ( comportamentos). 

const cliente = new Cliente();

cliente.nome = "Jorge"
cliente.cpf = "386.555.878-56"

console.log(cliente)

const clienteJorge = new ContaCorrente();

clienteJorge.depositar(200);

clienteJorge.sacar(100)

