import { FactoryFormElements } from "../formulario.js";
import Componente from "./_componente.js";

export default class Formulario extends Componente {
    constructor(adaptador, destino, botao, callback){
        super("formulario")
        this.adaptador = adaptador
        const campos = adaptador.pegaCampos()
        console.log(campos);
        this.main = document.createElement("form")
        for (const key in campos) {
            const [component, err] = new FactoryFormElements().make(campos[key])
            if (err) console.warn(`${key} não implementado`)
            else {
                this[key] = component
                component.setValue(adaptador[key])
                this.main.appendChild(component.getHtml())
            }
        }

        destino.appendChild(this.main)
        botao.onclick = this.submit.bind(this, callback)
        this.main.onsubmit = this.submit.bind(this, callback)
    }

    submit(callback, e){
        e.preventDefault()
        console.log(e);
        for (const key in this.adaptador) {
            if (Object.hasOwnProperty.call(this, key))
                this.adaptador[key] = this[key].getValue()
        }
        console.log(this.adaptador);
        callback(this.adaptador)
    }
}