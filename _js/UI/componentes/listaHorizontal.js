import Repositorio from "../../interface/respositorio/_repositorio.js";
import Componente from "./_componente.js";
import Visao from "./_visao.js";

export default class ListaHorizontal extends Componente {
    filhos = []
    /**
     * 
     * @param {Repositorio} repositorio 
     */
    constructor(repositorio, titulo) {
        super("listahorizontal")
        this.repositorio = repositorio
        this.titulo = titulo
    }

    mostrar(destino) {
        this.visao = new VisaoListaHorizontal(this, destino, this.titulo)
        this.filhos.forEach(c => {
            this.visao.body.appendChild(c.main)
        });
    }
}

class VisaoListaHorizontal extends Visao {
    h2 = document.createElement("h2")
    /**
     * 
     * @param {ListaHorizontal} modelo 
     * @param {Element} destino 
     */
    constructor(modelo, destino, titulo) {
        super("visaolistahorizontal", document.createElement("div"), modelo)
        this.main.classList.add("d-grid", "gap-m")
        this.h2.innerText = titulo
        this.main.appendChild(this.h2)
        this.body = document.createElement("div")
        this.body.classList.add("d-flex", "o-scroll", "gap-g")
        this.main.appendChild(this.body)
        destino.appendChild(this.main)
    }
}