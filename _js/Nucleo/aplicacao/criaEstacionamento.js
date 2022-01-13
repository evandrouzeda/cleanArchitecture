import Estacionamento from "../dominio/estacionamento.js";

export default class CriarEstacionamento {
    nome = "Cria Estacionamento"
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(nome){
        console.log("criando estacionamento");
        const estacionamento = new Estacionamento(nome)
        this.repositorio.save("Estacionamentos", estacionamento)
        return estacionamento
    }
}