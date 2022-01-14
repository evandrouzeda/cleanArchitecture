import Estacionamento from "../dominio/estacionamento.js"

export default class AdaptadorEstacionamento {
    nome = ""
    constructor(nome){
        this.nome = nome
    }

    create(){
        return new Estacionamento(this.nome)
    }

    pegaCampos(){
        return {
            nome: {type: "text", label: "Nome", placeholder: "Nome do estacionamento"}
        }
    }
}