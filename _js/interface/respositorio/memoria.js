import Repositorio from "./_repositorio.js";

export default class Memoria extends Repositorio{
    map = {}
    constructor(){
        super()
    }
    save(colecao, objeto){
        console.log("guardando na memoria");
        objeto.id = crypto.randomUUID()
        if(!this.map[colecao]) this.map[colecao] = []
        this.map[colecao].push(objeto)
    }
    pegaPorId(colecao, id){
        return this.map[colecao] ? this.map[colecao].find(e=>e.id === id) : {}
    }

    pegaVarios(colecao){
        return this.map[colecao] ? this.map[colecao] : []
    }
    pegaPorPlaca(placa) {
        return this.map["Carros"] ? this.map["Carros"].find(e=>e.placa = placa): {}
    }
}