import FactoryCasosDeUso from "../../Nucleo/factory/casos.js";
import Attribute from "./_attribute.js";

export default class UseCase extends Attribute {
    constructor() {
        super("usecase")
    }

    execute(obj) {
        const [usecase, e] = new FactoryCasosDeUso().create(obj.c.adapter.usecase)
        if (e) console.error(`Invalid Use Case: ${obj.c.adapter.caso}`);
        else {
            console.log(obj);
            new obj.component(obj.app, new obj.adapter(new usecase(obj.repository)))
        }
    }
}