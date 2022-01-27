import Adapter from "../../UI/render/adapter.js";
import Type from "../../UI/render/type.js";
import UseCase from "../../UI/render/useCase.js";
import Factory from "./_factory.js";

export default class FactoryAttribute extends Factory {
    constructor(){
        super()
        this.classesMap = {
            "type": Type,
            "adapter": Adapter,
            "usecase": UseCase
        }
    }
}