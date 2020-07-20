
export class ContaCorrente {
    agencia;
    _saldo = 0;

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
}