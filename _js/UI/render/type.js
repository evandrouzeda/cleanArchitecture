import FactoryComponentes from "../../Nucleo/factory/componentes.js";
import Attribute from "./_attribute.js";

export default class Type extends Attribute {
    constructor(){
        super("type")
    }

    execute(obj) {
        const [result, err] = new FactoryComponentes().create(obj.c.type)
        if (err) console.error(`nao implementado ${obj.c.type}`);
        else {
            console.log(result);
            //new result(app, new CriarCaso(new CriarEstacionamento(memoria)))
            obj.component = result
        }
         return obj
    }
}