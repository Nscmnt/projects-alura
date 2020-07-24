export class Conta {
    //Clase Abstrata, cria-se para especializar as classes dela herdada.
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error ("Você não deveria instanciar diretamente dessa classe")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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


    sacar(valor) {  throw new Error("O método sacar da classe Conta é abstrato") } // Metodo abstrato
    _sacar(valor, taxa){

        const valorSacado = taxa * valor;
        const valorTaxa = (valor * 10)/100;
        
        if (valorSacado <= 0 || this._saldo < valorSacado) {

            console.log("Saldo Insuficiente, o valor em conta é de R$" + this._saldo);

            return 0;

        }
        this._saldo -= valorSacado;
        return console.log("Valor sacado R$" + valor +"\nSaldo atual R$" + this._saldo + 
        "\nTaxa R$" + valorTaxa);

    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
        console.log("Foi depositado o valor R$ " + valor);

    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }


}