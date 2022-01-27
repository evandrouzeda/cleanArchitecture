import FactoryAdaptadorBotao from "../../Nucleo/factory/botaoAdaptador.js";
import FactoryCasosDeUso from "../../Nucleo/factory/casos.js";
import Attribute from "./_attribute.js";

export default class Adapter extends Attribute {
    constructor(){
        super("adapter")
    }

    execute(obj){
        for (const k in obj.c.adapter) {
            switch (k) {
                case "type":
                    const [result, err] = new FactoryAdaptadorBotao().create(obj.c.adapter.type)
                    if (err) console.error(`nao implementado ${obj.c.adapter.type}`);
                    else {
                        const [r, e] = new FactoryCasosDeUso().create(obj.c.adapter.caso)
                        if (e) console.error(`nao implementado ${obj.c.adapter.caso}`);
                        else {
                            console.log(obj);
                            new obj.component(obj.app, new result(new r(obj.repository)))
                        }
                    }
                    break;
                case "caso":
                    /* const [r, e] = new FactoryCasosDeUso().create(obj.c.adapter.caso)
                    if (e) console.error(`nao implementado ${obj.c.adapter.caso}`);
                    else {
                        new componente(app, new result(new r(memoria)))
                    } */
                    break;
                default:
                    break;
            }
        }
        return obj
    }
}