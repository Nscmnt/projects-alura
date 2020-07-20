
export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if ( valor <= 0 || this._saldo < valor) {

            console.log("Saldo Insuficiente, o valor em conta é de R$" + this._saldo)

            return;
            
        }
        this._saldo -= valor;
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
        console.log("Foi depositado o valor R$ " + valor)
        console.log("Valor invalido")
        
    }
}