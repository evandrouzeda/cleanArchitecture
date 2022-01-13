import Carro from "../dominio/carro.js";

export default class CriarCarro {
    nome = "Cria Carro"
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(nome, placa){
        console.log("criando carro");
        const carro = new Carro(nome, placa)
        this.repositorio.save("Carros", carro)
        return carro
    }
}