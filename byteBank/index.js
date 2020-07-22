import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Criando classes, cria-se moldes para instancia de objetos no sistema, nas classes se define atributos (características) e métodos ( comportamentos). 

const cliente1 = new Cliente();

cliente1.nome = "Jorge"
cliente1.cpf = "386.555.878-56"

const cliente2 = new Cliente();

cliente2.nome = "Ana"
cliente2.cpf = "333.444.555.87"


const clienteJorge = new ContaCorrente();
clienteJorge.cliente = cliente1;

const conta2 = new ContaCorrente();

conta2.cliente = 0;


clienteJorge.depositar(500);

console.log(clienteJorge);

clienteJorge.transferir(200, conta2)

console.log(clienteJorge, conta2);

