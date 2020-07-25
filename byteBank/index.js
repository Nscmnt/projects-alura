import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
 
const gerente = new Gerente("Jorge", 8000, 1234568799)

gerente.cadastrarSenha("12345");

const cliente =new Cliente("Jorge", 25452365874, "123")

const clienteLogado = SistemaAutenticacao.login(cliente, "123")

console.log(clienteLogado)




