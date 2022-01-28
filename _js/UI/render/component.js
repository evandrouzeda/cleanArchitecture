import Attribute from "./_attribute.js";

export default class Component extends Attribute {
    constructor(){
        super("component")
    }

    execute(obj){
        for (const k in obj.c.component) {
            const [attribute, err] = new FactoryAttribute().create(k)
            if (err) { console.error(err); continue }
            else {
                obj = new attribute().execute(obj)
            }
        }
        return obj
    }
}