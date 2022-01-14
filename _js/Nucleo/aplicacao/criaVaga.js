import Vaga from "../dominio/vaga.js";
import Repositorio from "../../interface/respositorio/_repositorio.js";

export default class CriaVaga {
    tipo= "criavaga"
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
        console.log(id);
        //aqui tenho que pegar o estacionamento da lista
        const estacionamento = this.repositorio.pegaPorId("Estacionamentos", id.estacionamento);
        estacionamento.adicionaVaga()
        const carro = new Vaga(estacionamento)
        carro.numero = id.numero
        this.repositorio.save("Vagas", carro)
        return carro
    }
}