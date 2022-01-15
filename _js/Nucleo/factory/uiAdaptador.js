
import AdaptadorCriaCarro from "../adaptador/criaCarro.js";
import AdaptadorCriaVaga from "../adaptador/criaVaga.js";
import AdaptadorEstacionaCarro from "../adaptador/estacionaCarro.js";
import AdaptadorEstacionamento from "../adaptador/estacionamento.js";
import Factory from "./_factory.js";

export default class FactoryUIAdaptador extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "CriarEstacionamento": AdaptadorEstacionamento,
            "CriaVaga": AdaptadorCriaVaga,
            "CriarCarro": AdaptadorCriaCarro,
            "EstacionaCarro": AdaptadorEstacionaCarro
        }
    }
}