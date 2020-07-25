import{ Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeConta = 0;
   

    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeConta += 1;
    }

    sacar(valor) {
        let taxa = 1.1;

        this._sacar(valor, taxa);
    }

       
}