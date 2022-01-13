import Componente from "./_componente.js"
import Visao from "./_visao.js"

export default class TituloDescricao extends Componente {
    constructor(titulo, descriao){
        super("titulodescriacao")
        this.modelo = {titulo, descriao}
    }

    mostrar(destino) {
        this.visao = new VisaoTituloDescricao(this.modelo, destino)

    }
}

class VisaoTituloDescricao extends Visao {
    h2 = document.createElement("h2")
    p = document.createElement("p")
    /**
     * 
     * @param {titulo: string; descriacao: string} modelo 
     * @param {Element} destino 
     */
    constructor(modelo, destino){
        super("visaotitulodescricao", document.createElement("div"), modelo)
        this.main.classList.add("d-grid", "gap-p", "p-10")
        this.h2.innerText = modelo.titulo
        this.p.innerText = modelo.descriao
        this.main.appendChild(this.h2)
        this.main.appendChild(this.p)
        destino.appendChild(this.main)
    }
}