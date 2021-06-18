// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura:'))
  const largura = Number(prompt('Digite a largura:'))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoNascimento = Number(prompt('Digite seu ano de nascimento:'))
  const anoAtual = Number(prompt('Digite o ano atual:'))
  const calculoAno = anoNascimento - anoAtual
  console.log(calculoAno)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/ (altura * altura)
}
calculaIMC(59, 1,6)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome:')
  const idade = Number(prompt('Digite sua idade:'))
  const email = prompt('Digite seu e-mail:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua 1ª cor favorita')
  const cor2 = prompt('Digite sua 2ª cor favorita')
  const cor3 = prompt('Digite sua 3ª cor favorita')
  const cores = []
  cores.push(cor1)
  cores.push(cor2)
  cores.push(cor3)
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 return string.toUpperCase()
}
retornaStringEmMaiuscula("A Liz é linda")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}
calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
} 
checaStringsMesmoTamanho("Meus gatos são lindos", "Eu amo meus gatos")


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
retornaPrimeiroElemento([1, 2, 3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}
retornaUltimoElemento([4, 5, 6])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 const temp = array[0]
 array[0] = array[array.length -1]
 array[array.length -1] = temp
 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase()
}
checaIgualdadeDesconsiderandoCase("Olá", "Tudo bem?")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtu = Number(prompt('Digite o ano atual'))
  const anoNasci = Number(prompt('Digite seu ano de nascimento'))
  const anoRg = Number(prompt('Digite a data de emissão do seu RG'))
  const calculoAno = anoAtu - anoNasci
  const calculoRg = anoAtu - anoRg
  const criterio1 = calculoAno <= 20 && calculoRg >= 5
  const criterio2 = calculoAno > 20  && calculoAno <= 50 && calculoRg >= 10
  const criterio3 = calculoAno > 50 && calculoRg >= 15
  const resultadoFinal = (criterio1 || criterio2 || criterio3)
  console.log(resultadoFinal)
}


// EXERCÍCIO 14


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const mais18 = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Tem ensino médio completo?')
  const disponibilidade = prompt('Tem disponibilidade de horário?')
  const condicoes = mais18 === "sim" && ensinoMedio === "sim" && disponibilidade === "sim"
  console.log(condicoes)
}
