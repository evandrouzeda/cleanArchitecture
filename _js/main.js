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

const memoria = new Memoria()
const localRepo = new LocalStorage()
const estacionamento = new CriarEstacionamento(memoria).executar("Zezinho")
console.log(memoria)
const vaga = new CriaVaga(memoria).executar(estacionamento.id)
const carro = new CriarCarro(memoria).executar("honda", "2339lfoj")
new CriarCarro(memoria).executar("audi", "lkas9erp")
new CriarCarro(memoria).executar("ferrari", "fl5qe4r2")
new CriarCarro(memoria).executar("lamborghini", "0foisj2w")
console.log(new EstacionaCarro(memoria).executar(carro.id, vaga.id));
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
new CasosDeUso(casosDeUso).show(app)
const listaCarros = new ListaHorizontal(memoria, "Lista de Carros")

memoria.map["Carros"].forEach(c => {
    const cardCarro = new TituloDescricao(c.nome, c.placa)
    cardCarro.mostrar(app)
    memoria.save("Componentes", cardCarro)
    listaCarros.filhos.push(cardCarro.id)
});

listaCarros.mostrar(app)
console.log(listaCarros);