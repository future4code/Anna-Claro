/*  Ele verifica se a variável i é menor do que 5
 Se for ele vai pegar o valor que tá na variável i e vai incrementar mais 1, e também incrementar mais um na variável valor*/

/* Exercicio de interpretação 2
19, 21, 23, 25, 27, 30*/

/* Exercicio de interpretação 3
*
**
***
**** */

// Exercicios de escrita

const pets = Number(prompt("Quantos bichinhos de estimação você tem?"))

if(pets === 0){
    console.log ("Que pena! Você pode adotar um pet!")
} else{
}
 const listaPets = []
 for(let i = 0; i < pets; i++){
 const petsNomes = prompt("Qual o nome do seu pet?")
 listaPets.push(petsNomes)
}
console.log(listaPets) 


const arrayOriginal = [2,4,7,9,10,12,15]
const valorMaximo = 15
const valorMinimo = 2


