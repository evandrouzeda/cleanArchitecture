import CriarEstacionamento from "./Nucleo/aplicacao/criaEstacionamento.js";
import CriarCarro from "./Nucleo/aplicacao/criarCarro.js";
import CriaVaga from "./Nucleo/aplicacao/criaVaga.js";
import EstacionaCarro from "./Nucleo/aplicacao/estacionaCarro.js";
import RemoveCarro from "./Nucleo/aplicacao/removeCarro.js";
import Memoria from "./interface/respositorio/memoria.js";
import CasosDeUso from "./UI/casosdeuso.js";
import TituloDescricao from "./UI/componentes/tituloDescricao.js";
import ListaHorizontal from "./UI/componentes/listaHorizontal.js";

const memoria = new Memoria()
const app = document.getElementById("app")

const casosDeUso = [
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
console.log(listaCarros);

const myApp = {
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
}
