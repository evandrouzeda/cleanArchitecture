import Repositorio from "./_repositorio.js";

export default class LocalStorage extends Repositorio {
    constructor() {
        super()
    }

    verifyValue(key) {
        console.log(key);
        const value  = localStorage.getItem(key)
        if (value) {
            try {
                return [JSON.parse(value), false]
            } catch (error) {
                return [value, true]
            }
        } else return [value, true]
    }

    save(colecao, objeto) {
        console.log("guardando no localstorage");
        const [result, empty] = this.verifyValue(colecao)
        if (empty)
            return [localStorage.setItem(colecao, JSON.stringify([objeto])), false]
        else {
            if(typeof result === "object" && result.constructor.name === "Array")
                result.push(objeto)
            return [localStorage.setItem(colecao, JSON.stringify(result)), result]
        }
    }
    pegaPorId(colecao, id) {
        const [result, empty] = this.verifyValue(colecao)
        if (empty) return ["id nao encontrado", true]
        else return [result.find(e => e.id === id), false]
    }

    pegaVarios(colecao) {
        const [result, empty] = this.verifyValue(colecao)
        if (empty) return ["id nao encontrado", true]
        else return [result, false]
    }
    pegaPorPlaca(placa) {
        return this.map["Carros"] ? this.map["Carros"].find(e => e.placa = placa) : {}
    }
}