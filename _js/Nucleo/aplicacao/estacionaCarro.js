import Repositorio from "../../interface/respositorio/_repositorio.js";

export default class EstacionaCarro {
    nome= "Estaciona Carro"
    /**
     * 
     * @param {Repositorio} repositorio 
     */
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(adaptador){
        const carro = this.repositorio.pegaPorId("Carros", adaptador.carro)
        const vaga = this.repositorio.pegaPorId("Vagas", adaptador.vaga)
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