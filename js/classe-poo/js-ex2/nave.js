class nave{
    static get taxaDesaceleracao(){
        return 0.17;
    }
    constructor(nome, qtdTripulantes){
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.velocidadeAtual = 0;
    }

    acelerar(aceleracao){
        this.velocidadeAtual += aceleracao + (1 - nave.taxaDesaceleracao);
    }
}