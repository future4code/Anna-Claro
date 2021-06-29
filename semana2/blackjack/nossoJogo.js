/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let jogoInicio = () => {
let confirmUsuario = confirm("Bem vindo ao jogo de Blackjack! Quer iniciar uma nova rodada?")
   if (confirmUsuario == true) {
    console.log("Vamos começar!")
    const cartaUsuario1 = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    const cartaComputador1 = comprarCarta()
    const cartaComputador2 = comprarCarta()
   
    console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, cartaUsuario1.valor, cartaUsuario2.valor)
    console.log("Computador - cartas:", cartaComputador1.texto, cartaComputador2.texto, cartaUsuario1.valor, cartaUsuario2.valor)
   
    const resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor 
    const resultadoComputador = cartaComputador1.valor + cartaComputador2.valor
   if (resultadoUsuario > resultadoComputador){
   console.log("O usuário ganhou!")
 } else if (resultadoComputador > resultadoUsuario) {
   console.log("O computador ganhou!")
 } else if (resultadoUsuario == resultadoComputador) {
   console.log("Empate!")
 }
   } else {
    console.log("O jogo acabou!")
}
    
} 
  jogoInicio()


