export default class CasosDeUso {
    constructor(lista){
        this.lista = lista
    }
    show(destino){
        this.lista.forEach(caso => {
            const button = document.createElement("button")
            button.innerText = caso.nome
            button.onclick = caso.executar
            destino.appendChild(button)
        })
    }
}