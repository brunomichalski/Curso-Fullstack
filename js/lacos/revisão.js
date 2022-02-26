let nome = prompt("Informe o nome da nave: ");
let palavra = nome.length;
let palaInvet = "";
for (let i = palavra -1; i >= 0 ; i--){
    if (nome[i] == "e") {
        break;
    }
        palaInvet += nome[i];
    
}

alert("Nome original: "+nome+" Nome invertido: "+palaInvet)