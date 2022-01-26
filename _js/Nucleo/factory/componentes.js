import Botao from "../../UI/componentes/botaoCasoDeUso.js"
import Factory from "./_factory.js"

export default class FactoryComponentes extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "botao": Botao,
        }
    }
}