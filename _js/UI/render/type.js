import FactoryComponentes from "../../Nucleo/factory/componentes.js";
import FactoryFactorys from "../../Nucleo/factory/factorys.js";
import Attribute from "./_attribute.js";

export default class Type extends Attribute {
    constructor() {
        super("type")
    }

    execute(obj) {
        const [factory, error] = new FactoryFactorys().create(obj.creating)
        if (error) console.error(`invalid factory ${obj.creating}`);
        else {
            const [result, err] = new factory().create(obj.type)
            if (err) console.error(`nao implementado "${obj.type}" no factory: ${factory.name}`);
            else obj[obj.creating] = result
        }
        return obj
    }
}