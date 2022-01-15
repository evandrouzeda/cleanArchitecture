export default class Factory {
    classesMap = {}
    make(object) {
        try {
            const [tipo] = object.tipo.split("-")
            console.log(tipo);
            if (this.classesMap.hasOwnProperty(tipo))
                return [Object.assign(new this.classesMap[tipo](), object), false]
            else return [{}, true]
        } catch (error) {
            console.log(error);
            console.log(object);
            return [{}, true]
        }
    }
    create(type) {
        try {
            if (this.classesMap.hasOwnProperty(type))
                return [this.classesMap[type], false]
        } catch (error) {
            console.log(error);
            return [{}, true]
        }
        return[{}, true]
    }
}