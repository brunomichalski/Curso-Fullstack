const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]       

let tripulantes =  hitchedSpaceships.filter(element => {
    return element[1] > 9
}).map(element => {
    return element[0];
})

let engate = hitchedSpaceships.findIndex(element =>{
    return element[2] == false;
})

let maiuscolo = hitchedSpaceships.map(element => {
    return element[0].toUpperCase();
})

let mensagem = "Naves com mais de 9 tripulantes: "+ tripulantes.join(", ")
mensagem += "\nPlataforma com processo de engate: "+ (engate + 1)
mensagem += "\nEspaçonaves destacadas: "+ maiuscolo.join(", ")

alert(mensagem);