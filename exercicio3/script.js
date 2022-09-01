const numeros = [0, 9, 7, 5]
const coisas = ["celular", "garrafa", "computador", "livro"]
const aleatorios = [5, "livro", true]

const numerosCopia = numeros.slice()
const coisasCopia = coisas.slice()
const aleatoriosCopia = aleatorios.slice()

numerosCopia.push(10)
coisasCopia.pop()
aleatoriosCopia.splice(1, 1)

console.log(numerosCopia)
console.log(numeros)
console.log(coisasCopia)
console.log(coisas)
console.log(aleatoriosCopia)
console.log(aleatorios)
