let nave = {
    nome: "Bruno",
    tipo: "defesa",
    velo_max: 100
}

let velocidade = 0;
let aumento = 0;
let parametro = 0;
let velocidadeAtual = 0
function menu(opcao) {
    switch (opcao) {
        case "1":
            aumento = prompt("Informe quanto de velocidade gostaria de aumentar: ");
            console.log(Number(aumento) + Number(velocidade))
            velocidadeAtual += Number(aumento) + Number(velocidade)
            if (velocidadeAtual >= nave.velo_max) {
                alert("Velocidade atual: "+velocidadeAtual+" Velocidade Max permitida: "+nave.velo_max);
                alert("Nome: "+ nave.nome+ " \nTipo: "+nave.tipo+ "\nVelocidade antes da parada: "+ (velocidadeAtual-aumento));
                parametro = 2;
                break;
            }else{
                alert("Velocidade aumentada. Valocidade atual: "+velocidadeAtual);
            }
            break;
        case "2":
            alert("Nome: "+ nave.nome+ " \nTipo: "+nave.tipo+ "\nVelocidade antes da parada: "+ (velocidadeAtual-aumento));
            break;

        default:
            alert("Valor incorreto");
            break;
    }
}

while (parametro != 2) {
    parametro = prompt("Informe 1 - Aumentar a velocidade | 2 - Para Nave")
    menu(parametro);
}
