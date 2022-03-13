class App {
    constructor() {
        this.nave = null;
    }

    inicio() {
        this.cadastroNave();
        let opcao
        do {
            opcao = this.menu();
            this.opcaoSelecionada(opcao);
        } while (opcao != "3");
        this.imprimirSair();
    }

    cadastroNave() {
        let nomeName = prompt("Qual o nome da nave?");
        let qtdTripulantes = prompt("Qual a quantidade de tripulantes?");
        let tipoNave = this.perguntarTipoNave()
        if (tipoNave == "1") {
            let qtdArmas = prompt("Qual a quantidade de armas?");
            this.nave = new naveBatalha(nomeName, qtdTripulantes, qtdArmas);
        } else {
            let qtdAcentos = prompt("Qual a quantidade de acentos?");
            this.nave = new naveTrasporte(nomeName, qtdTripulantes, qtdAcentos);
        }
    }

    perguntarTipoNave() {
        let opcao
        while (!["1", "2"].includes(opcao)) {
            opcao = prompt("Informe o tipo de nave\n1-Batalha\n2-Transporte");
        }
        return opcao;
    }

    menu() {
        const mensagem = "O que deseja fazer\n" +
            "1-Acelerar a nave\n" +
            "2-Trocar a nave\n" +
            "3-Imprimir e sair";

        let opcao = prompt(mensagem);
        while (!["1", "2", "3"].includes(opcao)) {
            opcao = prompt(mensagem);
        }
        return opcao;
    }

    opcaoSelecionada(opcao) {
        switch (opcao) {
            case "1":
                this.acelerarNave();
                break;
            case "2":
                this.cadastroNave();
                break;
            default:
                break;
        }
    }

    acelerarNave() {
        let aceleracao = Number(prompt("Quanto gostaria de acelerar?"));
        this.nave.acelerar(aceleracao);
    }

    imprimirSair() {
        let mensagemFinal = "Nome: "+ this.nave.nome + "\n"+
                            "Quantidade de tripulantes: "+ this.nave.qtdTripulantes + "\n"+
                            "Velocidade atual: "+ this.nave.velocidadeAtual + "\n";
        alert(mensagemFinal);
    }
}