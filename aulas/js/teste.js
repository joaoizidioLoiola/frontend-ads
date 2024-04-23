console.log('Arquivo js externo')

// let cria uma variavel (não permite recriar uma mesma variavel no bloco) [escopo de bloco]
// var criar uma variavel (permite recriar uma mesma variavel no bloco) [escopo global]
// const cria uma cpnstante [escpodo de bloco]

// exemplo escopo de bloco
let nome = 'João'

if (true) {
  let nome = 'Maria'
  console.log(nome)
}

console.log(nome)

// tipos de variáveis

let var2 = `${nome} Izídio` // String "Renan", 'Renan', `Renan`	

var2 = 10
var2 = 34.5
var2 = true // false
var2 = [12, 54, 34] // array
var2 = { nome: 'Joao', idade: 20 } // object


console.log(var2)

if (nome == "TESTE") {

} else {
}

if (idade = 25) {

} else if (idade == 30) {

} else if (idade == 35) { }
else {
  // default
}


for (let i = 0; i < 10; i++) {
  console.log(i)
}

const valor1 = 10
const valor2 = "10"

// == comparação de valor (não compara o tipo) | === comparação de valor e tipo

if (valor1 === valor2) {
  console.log('Igual')
} else {
  console.log('Diferente')
}

const nomeCompleto = true;

const meuNome = nomeCompleto ? "João Izídio" : "Fulano"
console.log(meuNome)

// function soma(a, b) {
//   return a + b
// }

const soma = (a, b) => {
  return a + b
}
const user = {
  nome: 'João',
  idade: 20,
  endereco: {
    rua: 'Rua 1',
    numero: 10,
    bairro: 'Centro'
  },
  soma: soma,
  consoles: ['PS4', 'Xbox', { teste: 10, valor: 50 }],
}

console.log(user.endereco['bairro'])
console.log(user.idade)
console.log(user.endereco.rua)
console.log(user.consoles[1]) // 'Xbox'
console.log(user.consoles[2].valor)

const newUser = { ...user, nome: 'Teste' }

console.log(user)
console.log(newUser)