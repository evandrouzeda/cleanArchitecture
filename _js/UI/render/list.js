import FactoryAttribute from "../../Nucleo/factory/attribute.js";
import TituloDescricao from "../componentes/tituloDescricao.js";
import Attribute from "./_attribute.js";

export default class List extends Attribute {
    constructor() {
        super("list")
    }

    execute(obj) {
        const [list, err] = obj.repository.pegaVarios(obj.c.list.collection)

        console.log(list);

        /* const [attribute, err] = new FactoryAttribute().create(key)
        if (err) { console.error(`invalid attribute: ${key}`) }
        else{
            console.log(coisa)
            coisa = new attribute().execute(coisa)
        } */

        list.forEach(c => {
            const cardCarro = new TituloDescricao(c.nome, c.placa)
            cardCarro.mostrar(app)
            obj.component.filhos.push(cardCarro)
        });

        obj.component.mostrar(obj.app)
        return obj
    }
}