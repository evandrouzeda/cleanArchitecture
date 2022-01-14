export default class AdaptadorCriaVaga {
    estacionamento = ""
    numero = 0
    constructor(repositorio){
        this.repositorio = repositorio
    }
    pegaCampos(){
        console.log(this);
        return {
            estacionamento: {type: "select", label: "Estacionamento", placeholder: "Selecione Estacionamento", list: this.repositorio.pegaVarios("Estacionamentos")},
            numero: {type: "text", label: "Número", placeholder: "Número da vaga"}
        }
    }
}