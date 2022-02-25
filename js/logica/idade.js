let nome1 = prompt("Informe o Nome da pessoa mais velha: ");
let idade1 = prompt("Informe a idade da pessoa mais velha: ");
let nome2 = prompt("Informe o Nome da pessoa mais nova: ");
let idade2 = prompt("Informe a idade da pessoa mais nova: ");

let calc;
if (idade1 > idade2) {
    calc = idade1 - idade2;
} else {
    calc = idade2 - idade1;
}

alert("Pessoa mais velha: "+nome1+" Idade: "+idade1);
alert("Pessoa mais nova: "+nome2+" Idade: "+idade2);
alert("A diferença de idade é: "+calc+" anos.");
    