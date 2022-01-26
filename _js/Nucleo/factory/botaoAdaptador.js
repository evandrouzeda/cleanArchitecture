import CriarCaso from "../adaptador/botao/CriarCaso.js"
import Factory from "./_factory.js"

export default class FactoryAdaptadorBotao extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "criacaso": CriarCaso,
        }
    }
}