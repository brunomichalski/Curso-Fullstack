class Nave {
    constructor(nome, qtdTripulantes) {
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.engatada = false;
        this.portaAberta = false;
    }

    engate() {
        this.engatada = true;
        this.portaAberta = true;
    }
}

function menu() {
    let opcao;
    while (opcao != "1" && opcao != "2" && opcao != "3") {
        opcao = prompt("O que deseja fazer?\n" +
            "1-Engatar nave\n" +
            "2-Imprimir naves\n" +
            "3-Sair do programa")
    }
    return opcao;
}

function criarNave() {
    let nome = prompt("Informe o nome da nave: ");
    let qtdTripulantes = prompt("Informe a quantidade de tripulantes: ");
    let nave = new Nave(nome, qtdTripulantes);
    return nave;
}

function imprimirNaves(lista) {
    let listaNaves = "";
    lista.forEach((lista, index)=>{
        listaNaves += (index + 1) + "- " + lista.nome + " (" + lista.qtdTripulantes + " tripulantes)\n";  
    });
    alert(listaNaves);
}

let navesEngatadas = [];
let opcao;

while (opcao != "3") {
    opcao = menu()
    switch (opcao) {
        case "1":
            let adicionarNave = criarNave();
            adicionarNave.engate();
            navesEngatadas.push(adicionarNave);
            break;

        case "2":
            imprimirNaves(navesEngatadas);
            break

        default:
            break;
    }
}