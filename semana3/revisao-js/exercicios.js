// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = []

  for (let i = array.length -1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
 return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = []
   for (let i = 0; i < array.length; i++){
     if (array[i] % 2 === 0)
     numerosPares.push(array[i] ** 2)
   }
   return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares2 = []
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0)
    numerosPares2.push(array[i])
  }
  return numerosPares2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) { 
  for (let i = 0; i < array.length; i++){
   if (array[i] >= 7){
   }
 }
 return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const respostas = [false, false, true, true, true]
 return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c && b === c) {
    return 'Equilátero'
  } else if (a !== b && c !== a) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores:[ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
   return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores:[ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const calculoPerimetro = 2 * (lado1 + lado2)
  const calculoArea = lado1 * lado2
 const resultado = {largura: lado1,
  altura: lado2,
  perimetro: calculoPerimetro,
  area: calculoArea}
  return resultado
}



// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
