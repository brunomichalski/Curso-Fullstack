let nome = prompt("Qual seu nome? ");
let velocity = 0;
velocity = prompt("Qual velocidade gostaria de acelerar a nave? ");
let resposta = confirm("Confirmar aceleração e velocidade para "+velocity+" ?");
if (resposta == false) {
    velocity = prompt("Qual velocidade gostaria de acelerar a nave? ");
}

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.");
}else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.");
}else if(velocity >= 40 && velocity < 80 ) {
    alert("Parece uma boa velocidade para manter.");
}else if(velocity >= 80 && velocity < 10 ) {
    alert("Velocidade alta. Considere diminuir.");
}else if(velocity >= 100 ) {
    alert("Velocidade perigosa. Controle automático ativado.");
}

alert("Piloto: "+nome+" Velocidade: "+velocity);