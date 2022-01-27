import FactoryAdaptadorBotao from "./botaoAdaptador.js";
import FactoryComponentes from "./componentes.js";
import Factory from "./_factory.js";

export default class FactoryFactorys extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "adapter": FactoryAdaptadorBotao,
            "component": FactoryComponentes
        }
    }
}