/*
apelido: "Mandi"
nome: "Amanda Rangel"
 0 
apelido: "Laura"
nome: "Laís Petra"
 1 
apelido: "Chijo"
nome: "Letícia Chijo"
2
*/

//[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

/*[ { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' } ]*/

  // Exercicios de escrita

 /* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomePets = pets.map((dogs, indice, array) => {
     return dogs.nome
 })
 console.log(nomePets)

 const cachorroSalsicha = pets.filter((item, index, array) => {
     return item.raca === "Salsicha"
 })
 console.log(cachorroSalsicha)

 const descontoPoodle = (item, index, array) => {
     if (item.raca === "Poodle") {
         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
     }
 }
 const poodle = pets.filter(descontoPoodle)
 console.log(poodle)*/

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomesItens = produtos.map((item, index, array) => {
   return item.nome
})
console.log(nomesItens)


const descontoItens = produtos.map((item, index, array) => {
    const contaPorcen = (item.preco * (5/100))
    const result = item.preco - contaPorcen
    return {nome: item, preco: result}
})
console.log(descontoItens)

const itensBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(itensBebidas)

const palavraYpe = (item, index, array) => {
    return item.nome.includes("Ypê")
}
const nomeYpe = produtos.filter(palavraYpe)
console.log(nomeYpe)

const ypeFrase = produtos.filter((item, index, array) => {
    const palavra = item.nome.includes("Ypê")
})
console.log(`Compre ${item.nome} por ${item.preco}.`)

