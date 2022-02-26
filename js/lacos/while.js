let nome = prompt("Informe seu nome: ");
let opcao = prompt("Deseja entrar na dobra espacial? 1-Sim | 2-Não");

let dobra = 0;

switch (opcao) {
    case "1":
        dobra++;
        while (opcao != "2") {
             opcao = prompt("Deseja entrar na proxima dobra espacial? 1-Sim | 2-Não");
             if (opcao == "1") {
                 dobra++;
             }
        }
        alert(`Nome da nave: ${nome} Número de dobras: ${dobra}`);
        break;
    case "2":
        alert(`Nome da nave: ${nome} Número de dobras: ${dobra}`);
        break;
    default:
        alert("Opção informada incorreto!")
        break;
}