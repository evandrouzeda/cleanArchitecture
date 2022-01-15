import Carro from "../dominio/carro.js";

export default class CriarCarro {
    nome = "Cria Carro"
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(adaptador){
        console.log("criando carro");
        const carro = new Carro(adaptador.nome, adaptador.placa)
        this.repositorio.save("Carros", carro)
        return carro
    }
}