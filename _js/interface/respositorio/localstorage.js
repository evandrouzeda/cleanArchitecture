import Repositorio from "./_repositorio.js";

export default class LocalStorage extends Repositorio {
    constructor(){
        super()
    }

    save() {
        console.log("guardando no local storage");
    }
}