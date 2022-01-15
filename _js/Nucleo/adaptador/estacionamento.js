import Estacionamento from "../dominio/estacionamento.js"

export default class AdaptadorEstacionamento {
    nome = ""
    pegaCampos(){
        return {
            nome: {type: "text", label: "Nome", placeholder: "Nome do estacionamento"}
        }
    }
}