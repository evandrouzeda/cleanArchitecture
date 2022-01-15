import FactoryUIAdaptador from "../Nucleo/factory/uiAdaptador.js"
import Formulario from "./componentes/formulario.js"
import Modal from "./componentes/modal.js"

export default class CasosDeUso {
    constructor(lista) {
        this.lista = lista
    }
    show(destino) {
        const ui = new FactoryUIAdaptador()
        this.lista.forEach(caso => {
            const button = document.createElement("button")
            button.innerText = caso.nome
            button.onclick = _ => {
                const [adaptador, err] = ui.create(caso.constructor.name)
                if(err) console.error("nao implementado: "+ caso.constructor.name)
                else{
                    const modal = new Modal(app, "Criar Vaga", "Salvar")
                    new Formulario(new adaptador(caso.repositorio), modal.body, modal.confir, a => {
                        caso.executar(a)
                        modal.remove()
                        console.log(caso.repositorio);
                    })
                }
            }
            destino.appendChild(button)
        })
    }
}