/* Ele verifica se o numero é divisivel por 2.
Para numeros divisiveis por 2;
Para numeros nao divisiveis por 2;*/

/*Para informar o valor de cada fruta;
O preço da fruta  maça  é  R$ 2.25*/

/*Solicitando um número ao usuario;
10: "Esse número passou no teste" 
-10: ia dar undefined;
Ocorreria um erro porque não tem outra condicional caso o número seja menor que 0.*/

const idadeUsuario = Number(prompt("Digite sua idade:"))

if (idadeUsuario >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

const turno = prompt("Digite seu turno: M(matutino), V(vespertino), N(noturno)")

if (turno == "M"){
    console.log("Bom Dia!")
} else if (turno == "V") {
    console.log("Boa Tarde!")
}
  else if (turno == "N") {
    console.log("Boa Noite!")
} else {
}

let periodo = prompt("Digite seu turno: M(matutino), V(vespertino), N(noturno)")
switch(periodo) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Sem resposta")     
}

const genero = prompt("Qual gênero de filme irão assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (genero == "fantasia" && valorIngresso <= 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
} 