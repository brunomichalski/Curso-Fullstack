class App {
    addProperty() {
        event.preventDefault();
        let kind = document.querySelector("select[name='kind']").value;
        let area = document.querySelector("input[name='area']").value;
        let rented = document.querySelector("input[name='rented']").checked;
        let property = new Property(kind, area, rented);

        this.addOnPropertiesList(property);
        this.cleanForm();
    }

    addOnPropertiesList(property) {
        let listElemente = document.createElement('li');
        let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)";
        if (property.rented) {
            let rentedMerk = this.createRentedMark();
            listElemente.appendChild(rentedMerk);
        }
        listElemente.innerHTML += propertyInfo;
        let buttonRemove = this.createRemoveButton();
        listElemente.appendChild(buttonRemove);
        document.getElementById("properties").appendChild(listElemente);
    }

    createRentedMark() {
        let rentedMark = document.createElement('span');
        rentedMark.style.color = "white";
        rentedMark.style.backgroundColor = "red";
        rentedMark.innerText = "Alugado";
        return rentedMark;
    }

    createRemoveButton() {
        let buttonRemove = document.createElement('button');
        buttonRemove.setAttribute("onclick", "app.remove()");
        buttonRemove.innerText = "Remover";
        return buttonRemove;
    }

    cleanForm() {
        document.querySelector("input[name='area']").value = '';
        document.querySelector("input[name='rented']").checked = false;
    }

    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove);
    }
}