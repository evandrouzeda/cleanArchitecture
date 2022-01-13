export default class Estacionamento {
    id = ""
    nome = ""
    vagas = 0
    constructor(nome){
        this.nome = nome
    }

    adicionaVaga(){
        this.vagas++
    }
}