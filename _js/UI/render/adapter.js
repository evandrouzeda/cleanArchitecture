import FactoryAttribute from "../../Nucleo/factory/attribute.js";
import Attribute from "./_attribute.js";

export default class Adapter extends Attribute {
    constructor() {
        super("adapter")
    }

    execute(obj) {
        obj.creating = "adapter"
        obj.type = obj.c.adapter.type
        for (const k in obj.c.adapter) {
            const [attribute, err] = new FactoryAttribute().create(k)
            if (err) { console.error(err); continue }
            else {
                obj = new attribute().execute(obj)
            }
        }
        
        return obj
    }
}