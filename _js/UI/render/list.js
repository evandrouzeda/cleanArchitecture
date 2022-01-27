import Attribute from "./_attribute.js";

export default class List extends Attribute{
    constructor(){
        super("list")
    }

    execute(obj){
        const list = obj.repository.pegaVarios(obj.c.list.collection)/* .forEach(c => {
            const cardCarro = new TituloDescricao(c.nome, c.placa)
            cardCarro.mostrar(app)
            memoria.save("Componentes", cardCarro)
            listaCarros.filhos.push(cardCarro.id)
        }); */

        console.log(list);

        const [attribute, err] = new FactoryAttribute().create(key)
        if (err) { console.error(`invalid attribute: ${key}`) }
        else{
            console.log(coisa)
            coisa = new attribute().execute(coisa)
        }
    }
}