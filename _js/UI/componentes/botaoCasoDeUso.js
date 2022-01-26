import Componente from "./_componente.js";

export default class Botao extends Componente {
    constructor(destino, adaptador) {
        super("botao")
        this.main = document.createElement("button")
        this.main.innerText = adaptador.getFields().titulo
        this.main.onclick = adaptador.action.bind(adaptador)
        destino.appendChild(this.main)
    }
}