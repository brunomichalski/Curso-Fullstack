function saveHouse() {
    let area = document.querySelector("input[name='area']").value;
    let numero = document.querySelector("input[name='numero']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let cidade = document.querySelector("input[name='cidade']").value;

    let novaLista = document.createElement('li');
    novaLista.innerText = area + "m², número " + numero + "(" + bairro + " - " + cidade + ")";  

    let botaoRemover = document.createElement('button');
    botaoRemover.type = "button";
    botaoRemover.innerText = "Remover";
    botaoRemover.setAttribute("onclick", "removeHouse(this)");

    novaLista.appendChild(botaoRemover);

    document.getElementById("lista-casa").appendChild(novaLista);
}

function removeHouse(button) {
    let removerLi = button.parentNode
    document.getElementById("lista-casa").removeChild(removerLi);
}