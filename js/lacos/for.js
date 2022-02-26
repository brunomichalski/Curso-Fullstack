let nome = prompt("Informe o nome: ");
let letra = prompt("Qual caractere deseja substituir? ");
let letraSub = prompt("Por qual caractere deseja substituir? ");

let novoNome = '';
for (let i = 0; i < nome.length; i++) {
    if (nome[i] == letra) {
        novoNome += letraSub;
    }else{
        novoNome += nome[i];
    }
}

alert("Novo nome: "+novoNome);