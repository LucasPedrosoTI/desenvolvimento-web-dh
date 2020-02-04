// Tipos de variaveis

const COISASQUENAOMUDAM = true;
var contaBancaria = 100;
let saldo = 50;

// Tipos de dados

let nasceuNoBrasil = true; //BOOLEANO
let str = "Oi eu sou o Lucas" // STRING
let objCachorros = {
    "nome": "Tomas",
    "raça": "Pug"  
    ,
} // OBJETO - ACESSAR A PROPRIEDADE com nomeDoObjeto.nomeDaPropriedade
objCachorros.nome
objCachorros.raça;

let alunos = ["Joao", "Pedro", "Paula"]; //ARRAY


// --------------------EXERCICIO-----------------
// Escrever uma função que retorne o preço de um celular, com a comissão do vendedor(a);
// E que te faça comprar celulares enquanto você tiver dinheiro no banco (saldo); (loops)
// E que você compre acessórios (capinha) se não passar o limite que você quer gastar; (condicional)
// Depois de calcular o preço da compra (celular + capinha) adiciona a comissão para o preço final.
// Checar se o preço final bate cabe no orçamento.

// Você deve declarar constantes para a comissão do vendedor(a); preço do celular e preço da capinha
// usar uma variável para o saldo bancário;
// definir uma função para calcular o preço com a cmoissão; e formatar o valor com R$/$ -> R$ 100.00;
// arendodar duas casas decimais -> variavel.toFixed (2);

const COMISSAO_VENDEDOR = 0.30;
const PRECO_DO_CELULAR = 2000;
const PRECO_DA_CAPINHA = 15;
var saldoBanco = 2500;

function formatarValor (num){
    return num.toFixed(2).toString().replace(".", ",")    
}

const compraCelular = () => {
    PRECO_DO_CELULAR < saldoBanco ? 
    
    (saldoBanco -= PRECO_DO_CELULAR, console.log("Celular comprado! Seu saldo atual é de R$ " + formatarValor(saldoBanco))) : console.log("Saldo insuficiente.");

}

const compraCapinha = () => {
    PRECO_DA_CAPINHA < saldoBanco ?  
    (saldoBanco -= PRECO_DA_CAPINHA, console.log("Capinha comprada! Seu saldo atual é de R$ " + formatarValor(saldoBanco))) : console.log("Saldo insuficiente.");
}

const pagarComissao = () => {
    precoComissao = (PRECO_DA_CAPINHA + PRECO_DO_CELULAR) * COMISSAO_VENDEDOR
    console.log("A comissao a ser paga é de R$ " + precoComissao)
    precoComissao < saldoBanco ? (saldoBanco -= precoComissao, console.log("Comissão paga! Seu saldo final é de R$" + saldoBanco)) 
    : (saldoBanco += PRECO_DA_CAPINHA + PRECO_DO_CELULAR, console.log("Saldo insuficiente. Como a comissão não foi paga nada foi debitado de sua conta. Saldo final: R$ " + saldoBanco)) 
}

compraCelular();
compraCapinha();
pagarComissao();

// let valor = 4.58;

// function converterParaReal(valorComPonto){
//     return valorComPonto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
// };

// console.log(converterParaReal(4.58));

var exemplo = 1234

console.log(formatarValor(exemplo));