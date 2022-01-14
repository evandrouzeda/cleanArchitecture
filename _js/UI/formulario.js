export class Visao {
    b = document.createElement("button")
    constructor(object, destino, botao) {
        for (const key in object) {
            const [component, err] = new FactoryFormElements().make(key)
            if (err) console.warn(`${key} não implementado`)
            else {
                this[key] = component
                component.setValue(object[key])
                destino.appendChild(component.getHtml())
            }
        }
        if (botao) {
            this.b = botao
        } else {
            this.b.innerText = "Inserir"
            destino.appendChild(this.b)
        }
    }

    Click(callback) {
        this.b.onclick = callback
    }
}

export class Controlador {
    constructor(visao, modelo, callback) {
        this.visao = visao
        this.modelo = modelo
        this.visao.Click(this.acao.bind(this, callback))
    }

    acao(callback) {
        for (const key in this.modelo) {
            if (Object.hasOwnProperty.call(this.visao, key))
                this.modelo[key] = this.visao[key].getValue()
        }
        callback(this.modelo)
    }
}

/* 
class Usuario {
    nome = ""
    nascimento = ""
    brasileiro = false
}

const usuario = new Usuario()
const visao = new Visao(usuario)
const controlador = new Controlador(visao, usuario)

class Amigo {
    nome = ""
    brasileiro = false
}

const amigo = new Amigo()
const visaoa = new Visao(amigo)
const controladora = new Controlador(visaoa, amigo) */

function Token() {
    return ([1e11] + -0).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export class FormElement {
    label = ""
    placeholder = ""
    input = document.createElement("input")
    constructor(type) {
        this.type = type
    }

    getValue() {
        return this.input.value
    }

    setValue(value) {
        this.input.value = value
    }
}

export class Text extends FormElement {
    constructor() {
        super("text")
    }
    getHtml() {
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = this.label
        div.appendChild(label)
        this.input.type = this.type
        this.input.placeholder = this.placeholder
        div.classList.add("d-grid", "gap-fin")
        div.appendChild(this.input)
        return div
    }
}

export class Check extends FormElement {
    constructor() {
        super("checkbox")
    }
    getHtml() {
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = this.label
        div.appendChild(label)
        this.input.type = "checkbox"
        this.input.placeholder = this.placeholder
        div.classList.add("grid-2")
        const swi = document.createElement("label")
        swi.classList.add("switch")
        swi.appendChild(this.input)
        const slider = document.createElement("span")
        slider.classList.add("slider", "round")
        swi.appendChild(slider)
        div.appendChild(swi)
        //input.checked = object[key]
        return div
    }
    getValue() {
        return this.input.checked
    }
    setValue(value) {
        this.input.checked = value
    }
}

export class List extends FormElement {
    list = []
    constructor() {
        super("list")
    }
    getHtml() {
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = this.label
        div.appendChild(label)
        this.input.type = "list"
        this.input.placeholder = this.placeholder
        const token = Token()
        this.input.setAttribute("list", token)
        div.appendChild(this.input)
        const datalist = document.createElement("datalist")
        datalist.id = token
        this.list.forEach(item => {
            const e = document.createElement("option")
            e.value = item
            datalist.appendChild(e)
        })
        div.appendChild(datalist)
        return div
    }
}

export class Select extends FormElement {
    list = []
    constructor() {
        super("list")
    }
    getHtml() {
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = this.label
        div.appendChild(label)
        this.select = document.createElement("select")
        this.list.forEach(item => {
            const e = document.createElement("option")
            e.value = item.id
            e.innerText = item.nome
            this.select.appendChild(e)
        })
        div.appendChild(this.select)
        return div
    }
    getValue() {
        return this.select.value
    }
}

export class Factory {
    classesMap = {}
    make(object) {
        if (this.classesMap.hasOwnProperty(object.tipo))
            return [Object.assign(new this.classesMap[object.tipo](), object), false]
        else return [{}, true]
    }
}

export class FactoryFormElements extends Factory {
    constructor() {
        super()
        this.classesMap = { // tenho que jogar isso em metodo da classe 
            "outro": { label: "Outro Parametro", placeholder: "parametro teste", type: "text" },
            "nome": { label: "Nome", placeholder: "Nome", type: "text" },
            "modId": { label: "ID do módulo gateway:", placeholder: "ID do modulo com 2 caracteres", type: "text" },
            "e485": { label: "Endereço barramento 485:", placeholder: "Selecionar", type: "list", list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
            "modIn": { label: "Entrada do módulo:", placeholder: "Selecionar", type: "list", list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
            "mostrarHTML": { label: "Mostrar:", placeholder: "", type: "checkbox" },
            "alarmar": { label: "Enviar Alarme:", placeholder: "", type: "checkbox" },
            "periodo": { label: "Período: ", placeholder: "Escolher", type: "select", list: [{ value: "diario", name: "Diário" }] },
            "contactType": { label: "Inverter leitura (Contato NF):", type: "checkbox" }
        }
        this.types = {
            text: Text,
            checkbox: Check,
            list: List,
            select: Select,
        }
    }
    make(campo) {
        /* if (this.classesMap.hasOwnProperty(tipo)) {
            const campo = this.classesMap[tipo]
            if (this.types.hasOwnProperty(campo.type)) {
                const type = this.types[campo.type]
                return [Object.assign(new type(), campo), false]
            } else return [{}, true]
        } else return [{}, true] */
        if (this.types.hasOwnProperty(campo.type)) {
            const type = this.types[campo.type]
            return [Object.assign(new type(), campo), false]
        } else return [{}, true]
    }
}
