import Componente from "./_componente.js";

export default class Modal extends Componente{
    constructor(destino, titulo, acaotxt){
        super("modal")
        this.main = document.createElement("div")
        this.main.classList.add("modal-container", "show")
        this.modal = document.createElement("div")
        this.modal.classList.add("d-grid", "gap-g", "modal")
        this.h2 = document.createElement("h2")
        this.h2.innerText = titulo
        //this.modal.appendChild(this.h2)
        this.body = document.createElement("div")
        this.body.classList.add("d-grid", "gap-g")
        this.body.appendChild(this.h2)
        this.modal.appendChild(this.body)
        this.footer = document.createElement("div")
        this.footer.classList.add("buttons", "d-grid", "grid-2-col", "gap-m")
        this.cancel = document.createElement("button")
        this.cancel.innerText = "Cancelar"
        this.cancel.onclick = this.remove.bind(this)
        this.footer.appendChild(this.cancel)
        this.confir = document.createElement("button")
        this.confir.innerText = acaotxt
        this.footer.appendChild(this.confir)
        this.modal.appendChild(this.footer)
        this.main.appendChild(this.modal)
        destino.appendChild(this.main)
    }

    remove(){
        this.main.remove()
    }
}