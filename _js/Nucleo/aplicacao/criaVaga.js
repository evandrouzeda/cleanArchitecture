import Vaga from "../dominio/vaga.js";
import Repositorio from "../../interface/respositorio/_repositorio.js";

export default class CriaVaga {
    nome = "Cria Vaga"
    /**
     * 
     * @param {Repositorio} repositorio 
     */
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(id){
        console.log("criando vaga");
        //aqui tenho que pegar o estacionamento da lista
        const estacionamento = this.repositorio.pegaPorId("Estacionamentos", id);
        estacionamento.adicionaVaga()
        const carro = new Vaga(estacionamento)
        this.repositorio.save("Vagas", carro)
        return carro
    }
}