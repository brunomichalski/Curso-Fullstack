function menu(opcao) {
    switch (opcao) {
        case "1":
            alert("Acelerando nave a 5Km/s!")
            velocidade += 5;
            break;
        case "2":
            if ((velocidade - 5) <= 0) {
                alert("Não é possível desacelerar a nave!")
            } else {
                alert("Nave desacelerada!")
                velocidade -= 5;
            }
            break;
        case "3":
            alert("Dados de bordo \n Nome da nave: " + nome + "\n Velocidade atual: " + velocidade + "KM/s");
            break;
        case "4":
            alert("Saindo do programa!")
            break;
        default:
            alert("Opção invalida");
            break;
    }
}

let nome = prompt("Informe o nome da nave: ");
let velocidade = 0;
opcao = '';
while (opcao != 4) {
    opcao = prompt("1 - Acelerar 5km/s \n 2 - desacelerar 5km/s \n 3 - Dados de bordo \n 4 - Sair.");
    menu(opcao);
}
