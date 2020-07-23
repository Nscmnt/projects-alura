import{ Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeConta = 0;
   

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;

        ContaCorrente.numeroDeConta += 1;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
}