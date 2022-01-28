import Botao from "../../UI/componentes/botaoCasoDeUso.js"
import Card from "../../UI/componentes/card.js"
import Description from "../../UI/componentes/description.js"
import ListaHorizontal from "../../UI/componentes/listaHorizontal.js"
import Title from "../../UI/componentes/title.js"
import Factory from "./_factory.js"

export default class FactoryComponentes extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "botao": Botao,
            "listahorizontal": ListaHorizontal,
            "card": Card,
            "title": Title,
            "description": Description
        }
    }
}