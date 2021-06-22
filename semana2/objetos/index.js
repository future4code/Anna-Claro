/*Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }*/

/*{ nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }

conseguimos realizar uma cópia inteira de um 
objeto para outro e mudar (ou adicionar), se 
quisermos, apenas uma ou outra propriedade*/

/*false
undefined

Deu undefined porque nao tem uma propriedade de "altura" no objeto*/

const pessoa = {
    nome: "Caroline",
    apelidos: ["Carol", "Carolzinha", "Cá"]
}
function frase(pessoa){
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
frase(pessoa)
   
let pessoa2 = {
    ...pessoa,
    apelidos: ["Cácá", "Line", "Carolis"]
}
frase(pessoa2)   

const informacoes = {
    nome: "Liz",
    idade: 24,
    profissao: "Estudante"
}
const informacoes2 = {
    nome: "Caroline",
    idade: 22,
    profissao: "supervisora"
}

function listaInformacoes(informacoes, informacoes2){
    const final = [informacoes.nome, informacoes.nome.length, informacoes.idade, informacoes.profissao, informacoes.profissao.length, informacoes2.nome, informacoes2.nome.length, informacoes2.idade, informacoes2.profissao, informacoes2.profissao.length]  
    return final
 }
 console.log(listaInformacoes(informacoes, informacoes2))

 const carrinho = []

 const fruta1 = {
     nome: "banana",
     disponibilidade: true
 }

 const fruta2 = {
    nome: "melão",
    disponibilidade: true
}

const fruta3 = {
    nome: "kiwi",
    disponibilidade: true
}

const frutas = (fruta1, fruta2, fruta3) =>{
    carrinho.push(fruta1, fruta2, fruta3)
}
frutas(fruta1, fruta2, fruta3)
console.log(carrinho)