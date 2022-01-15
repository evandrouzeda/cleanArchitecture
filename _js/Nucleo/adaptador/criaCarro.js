export default class AdaptadorCriaCarro {
    nome = ""
    placa = ""
    constructor(repositorio){
        this.repositorio = repositorio
    }
    pegaCampos(){
        console.log(this);
        return {
            nome: {type: "text", label: "Nome", placeholder: "Nome do Carro"},
            placa: {type: "text", label: "Placa", placeholder: "Placa do Carro"}
        }
    }
}