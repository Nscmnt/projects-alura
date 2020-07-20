import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente = new Cliente();

cliente.nome = "Jorge"
cliente.cpf = "386.531.878-98"

console.log(cliente)

const clienteJorge = new ContaCorrente();

clienteJorge.depositar(200);

clienteJorge.sacar(100)

