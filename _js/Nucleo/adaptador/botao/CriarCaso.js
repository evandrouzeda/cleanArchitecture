import Formulario from "../../../UI/componentes/formulario.js";
import Modal from "../../../UI/componentes/modal.js";
import FactoryUIAdaptador from "../../factory/uiAdaptador.js";

export default class CriarCaso {
    constructor(caso) {
        this.caso = caso
    }

    getFields() {
        return { titulo: this.caso.nome }
    }

    action(e) {
        console.log(e);
        const ui = new FactoryUIAdaptador()
        const [adaptador, err] = ui.create(this.caso.constructor.name)
        if (err) console.error("nao implementado: " + this.caso.constructor.name)
        else {
            const modal = new Modal(app, this.caso.nome, "Salvar")
            new Formulario(new adaptador(this.caso.repositorio), modal.body, modal.confir, a => {
                this.caso.executar(a)
                modal.remove()
                console.log(this.caso.repositorio);
            })
        }
    }
}