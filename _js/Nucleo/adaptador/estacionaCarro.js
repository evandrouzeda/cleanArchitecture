export default class AdaptadorEstacionaCarro {
    carro = ""
    vaga = ""
    constructor(repositorio){
        this.repositorio = repositorio
    }
    pegaCampos(){
        console.log(this);
        return {
            carro: {type: "select", label: "Carro", placeholder: "Selecione um Carro", list: this.repositorio.pegaVarios("Carros")},
            vaga: {type: "select", label: "Vaga", placeholder: "Selecione uma Vaga", list: this.repositorio.pegaVarios("Vagas")}
        }
    }
}