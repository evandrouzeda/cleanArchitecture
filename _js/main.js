import CriarEstacionamento from "./Nucleo/aplicacao/criaEstacionamento.js";
import CriarCarro from "./Nucleo/aplicacao/criarCarro.js";
import CriaVaga from "./Nucleo/aplicacao/criaVaga.js";
import EstacionaCarro from "./Nucleo/aplicacao/estacionaCarro.js";
import RemoveCarro from "./Nucleo/aplicacao/removeCarro.js";
import Memoria from "./interface/respositorio/memoria.js";
import CasosDeUso from "./UI/casosdeuso.js";
import TituloDescricao from "./UI/componentes/tituloDescricao.js";
import ListaHorizontal from "./UI/componentes/listaHorizontal.js";
import Botao from "./UI/componentes/botaoCasoDeUso.js";
import CriarCaso from "./Nucleo/adaptador/botao/CriarCaso.js";
import FactoryComponentes from "./Nucleo/factory/componentes.js";
import FactoryCasosDeUso from "./Nucleo/factory/casos.js";
import FactoryAdaptadorBotao from "./Nucleo/factory/botaoAdaptador.js";
import FactoryAttribute from "./Nucleo/factory/attribute.js";

const memoria = new Memoria()
const app = document.getElementById("app")
//new Botao(app, new CriarCaso(new CriarEstacionamento(memoria)))

const myApp = {
    children: [
        {
            type: "botao",
            adapter: { type: "criacaso", caso: "criaestacionamento" }
        },
        {
            type: "botao",
            adapter: { type: "criacaso", caso: "criacarro" }
        }
    ]
}
let coisa = {
    app,
    repository: memoria
}

myApp.children.forEach(c => {
    for (const key in c) {  
        console.log(coisa);
        coisa.c = c
        const [attribute, err] = new FactoryAttribute().create(key)
        if (err) { console.error(err); continue }
        else{
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
