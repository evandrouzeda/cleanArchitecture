import CriarEstacionamento from "./Nucleo/aplicacao/criaEstacionamento.js";
import CriarCarro from "./Nucleo/aplicacao/criarCarro.js";
import CriaVaga from "./Nucleo/aplicacao/criaVaga.js";
import EstacionaCarro from "./Nucleo/aplicacao/estacionaCarro.js";
import RemoveCarro from "./Nucleo/aplicacao/removeCarro.js";
import LocalStorage from "./interface/respositorio/localstorage.js";
import Memoria from "./interface/respositorio/memoria.js";
import CasosDeUso from "./UI/casosdeuso.js";
import TituloDescricao from "./UI/componentes/tituloDescricao.js";
import ListaHorizontal from "./UI/componentes/listaHorizontal.js";
import { Controlador, Visao } from "./UI/formulario.js";
import AdaptadorEstacionamento from "./Nucleo/adaptador/estacionamento.js";
import Formulario from "./UI/componentes/formulario.js";
import Modal from "./UI/componentes/modal.js";
import AdaptadorCriaVaga from "./Nucleo/adaptador/criaVaga.js";

const memoria = new Memoria()
const localRepo = new LocalStorage()
const estacionamento = new CriarEstacionamento(memoria).executar({nome: "Zezinho"})
console.log(memoria)
const vaga = new CriaVaga(memoria).executar({numero: 1, estacionamento: estacionamento.id})
const carro = new CriarCarro(memoria).executar({nome: "honda", placa: "2339lfoj"})
console.log(new EstacionaCarro(memoria).executar({carro: carro.id, vaga: vaga.id}));
new RemoveCarro(memoria).executar(carro.placa)
console.log(carro);
const cria = new CriarCarro(localRepo)
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

memoria.map["Carros"].forEach(c => {
    const cardCarro = new TituloDescricao(c.nome, c.placa)
    cardCarro.mostrar(app)
    memoria.save("Componentes", cardCarro)
    listaCarros.filhos.push(cardCarro.id)
});

listaCarros.mostrar(app)
console.log(listaCarros);
