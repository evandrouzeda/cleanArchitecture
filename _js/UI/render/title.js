import Attribute from "./_attribute.js";

export default class Title extends Attribute {
    constructor(){
        super("title")
    }

    execute(obj){
        obj.component = new obj.component(obj.repository, obj.c.title)
        return obj
    }
}