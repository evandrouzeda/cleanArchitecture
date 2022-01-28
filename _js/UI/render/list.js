import FactoryAttribute from "../../Nucleo/factory/attribute.js";
import FactoryCasosDeUso from "../../Nucleo/factory/casos.js";
import TituloDescricao from "../componentes/tituloDescricao.js";
import Attribute from "./_attribute.js";

export default class List extends Attribute {
    constructor() {
        super("list")
    }

    execute(obj) {
        const [list, err] = obj.repository.pegaVarios(obj.c.list.collection)

        console.log(list);

        /* const [usecase, e] = new FactoryCasosDeUso().create(obj.c.list.usecase)
        if (e) return console.error(`Invalid Use Case: ${obj.c.list.caso}`); */
        

        let coisa = {
            c: obj.c.list.component,
            creating: "component",
            type: obj.c.list.component.type,
            app,
            repository: obj.repository
        }
        for (const key in obj.c.list.component) {
            const [attribute, err] = new FactoryAttribute().create(key)
            if (err) { console.error(`invalid attribute: ${key}`) }
            else{
                console.log(coisa)
                coisa = new attribute().execute(coisa)
            }
        }

        console.log(coisa);
        list.forEach(c => {
            const adapter = Object.assign(new coisa.adapter(/* new usecase() */), c)
            const cardCarro = new coisa.component(obj.app, adapter)
            obj.component.filhos.push(cardCarro)
        });

        obj.component.mostrar(obj.app)
        return obj
    }
}