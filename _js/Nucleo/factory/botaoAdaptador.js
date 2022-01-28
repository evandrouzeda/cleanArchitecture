import CarroCard from "../adaptador/apresentacao/carroCard.js"
import EstacionamentoCard from "../adaptador/apresentacao/estacionamentoCard.js"
import CriarCaso from "../adaptador/botao/CriarCaso.js"
import Factory from "./_factory.js"

export default class FactoryAdaptadorBotao extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "criacaso": CriarCaso,
            "carrocard": CarroCard,
            "estacionamentocard": EstacionamentoCard
        }
    }
}