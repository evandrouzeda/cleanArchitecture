import Repositorio from "../../interface/respositorio/_repositorio.js";

export default class EstacionaCarro {
    /**
     * 
     * @param {Repositorio} repositorio 
     */
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(carroid, vagaid){
        const carro = this.repositorio.pegaPorId("Carros", carroid)
        const vaga = this.repositorio.pegaPorId("Vagas", vagaid)
        console.log(vaga);
        if(vaga.vago){
            vaga.vago = false
            carro.vaga = vaga.id
            return "estacionado"
        }else{
            return "vaga ocupada"
        }
    }
}