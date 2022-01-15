
const estacionamento = new CriarEstacionamento(memoria).executar({nome: "Zezinho"})
console.log(memoria)
const vaga = new CriaVaga(memoria).executar({numero: 1, estacionamento: estacionamento.id})
const carro = new CriarCarro(memoria).executar({nome: "honda", placa: "2339lfoj"})
console.log(new EstacionaCarro(memoria).executar({carro: carro.id, vaga: vaga.id}));
new RemoveCarro(memoria).executar(carro.placa)