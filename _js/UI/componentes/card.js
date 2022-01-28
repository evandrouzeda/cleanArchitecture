import FactoryComponentes from "../../Nucleo/factory/componentes.js";
import Componente from "./_componente.js";

export default class Card extends Componente {
    constructor(destino, adapter){
        super("card")
        this.main = document.createElement("div")
        this.main.classList.add("d-grid", "gap-p", "p-10")
        this.main.onclick = adapter.action.bind(adapter)
        console.log(adapter);
        const campos = adapter.pegaCampos()
        console.log(campos);
        for (const key in campos) {
            const [component, err] = new FactoryComponentes().create(key)
            if(err) console.error(`Invalid Component: ${key}`);
            else new component(this.main, campos[key])
        }
    }
}