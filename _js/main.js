import LocalStorage from "./interface/respositorio/localstorage.js";
import Memoria from "./interface/respositorio/memoria.js";
import FactoryAttribute from "./Nucleo/factory/attribute.js";

const memoria = new LocalStorage()
const app = document.getElementById("app")
//new Botao(app, new CriarCaso(new CriarEstacionamento(memoria)))

const myApp = {
    children: [
        {
            type: "botao",
            adapter: { type: "criacaso", usecase: "criaestacionamento" }
        },
        {
            type: "botao",
            adapter: { type: "criacaso", usecase: "criacarro" }
        },
        {
            type: "listahorizontal",
            title: "Lista de Carros",
            list: {
                collection: "Carros",
                component: {type: "card", adapter:{type: "carrocard"}}
            },
        },
        {
            type: "listahorizontal",
            title: "Lista de Estacionamentos",
            list: {
                collection: "Estacionamentos",
                controller: {type: "mostraestacionamento", adapter: {type: "mostraestacionamento"}},
                component: {type: "card", adapter:{type: "estacionamentocard"}}
            },
        }
    ]
}

myApp.children.forEach(c => {
    let coisa = {
        c,
        creating: "component",
        type: c.type,
        app,
        repository: memoria
    }
    for (const key in c) {
        const [attribute, err] = new FactoryAttribute().create(key)
        if (err) { console.error(`invalid attribute: ${key}`); continue }
        else{
            console.log(coisa)
            coisa = new attribute().execute(coisa)
        }
    }
})

/* const casosDeUso = [
    new CriarEstacionamento(memoria),
    new CriaVaga(memoria),
    new CriarCarro(memoria),
    new EstacionaCarro(memoria),
    new RemoveCarro(memoria)
]
new CasosDeUso(casosDeUso).show(app);




const listaCarros = new ListaHorizontal(memoria, "Lista de Carros")

memoria.pegaVarios("Carros").forEach(c => {
    const cardCarro = new TituloDescricao(c.nome, c.placa)
    cardCarro.mostrar(app)
    memoria.save("Componentes", cardCarro)
    listaCarros.filhos.push(cardCarro.id)
});

listaCarros.mostrar(app)
console.log(listaCarros); */


/* {
   children: [
       {
           type: "pages",
           pages: {
               home: {
                   children: {
                       header: {
                           text: "Nome do Usuario"
                       }
                   }
               },
               social: {
                   children: [
                       {
                           type: "button",
                           text: "Cliente"
                       }
                   ]
               }
           }
       },
       {
           type: "navbarinferior",
           children: [
               {
                   type: "routebutton",
                   goto: "home"
               },
               {
                   type: "routebutton",
                   goto: "social"
               }
           ]
       }
   ]
} */
