import Componente from "./_componente.js";

export default class Title extends Componente {
    constructor(destino, value){
        super("title")
        this.main = document.createElement("h2")
        this.main.innerText = value
        destino.appendChild(this.main)
    }
}