import Componente from "./_componente.js";

export default class Description extends Componente {
    constructor(destino, value){
        super("description")
        this.main = document.createElement("p")
        this.main.innerText = value
        destino.appendChild(this.main)
    }
}