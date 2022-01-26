import CriarEstacionamento from "../aplicacao/criaEstacionamento.js"
import Factory from "./_factory.js"

export default class FactoryCasosDeUso extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "criaestacionamento": CriarEstacionamento,
        }
    }
}