export default class Visao {
    /**
     * 
     * @param {Element} main 
     */
     constructor(tipo, main, modelo) {
        this.modelo = modelo
        this.main = main
        this.main.setAttribute("component", tipo)
    }

    refresh() {
        const map = this.modelo.mapeamento()
        for (const key in this) {
            if (Object.hasOwnProperty.call(map, key))
                this[key] = map[key]
        }
    }

    Click(callback) {
        this.main.onclick = callback
    }
}