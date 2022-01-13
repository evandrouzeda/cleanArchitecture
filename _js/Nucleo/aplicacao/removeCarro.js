export default class RemoveCarro {
    constructor(repositorio){
        this.repositorio = repositorio
    }

    executar(placa) {
        const carro = this.repositorio.pegaPorPlaca(placa)
        const vaga = this.repositorio.pegaPorId("Vagas", carro.vaga)
        vaga.vago = true
        carro.vaga = {}
    }
}