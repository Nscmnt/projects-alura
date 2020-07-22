import{Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroDeConta = 0;
    agencia = 1001;
    _cliente = new Cliente;

    _saldo = 0;

    constructor( agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
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
    sacar(valor) {
        if ( valor <= 0 || this._saldo < valor) {

            console.log("Saldo Insuficiente, o valor em conta é de R$" + this._saldo)

            return;
            
        }
        this._saldo -= valor;
        console.log("Valor sacado R$"+valor)
        console.log("Saldo atual R$"+ this._saldo)
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
        console.log("Foi depositado o valor R$ " + valor)       
        
    }

    transferir(valor, conta){
        const valorTranferido = this.sacar(valor);

        conta.depositar(valor);
    }
}