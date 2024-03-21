/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 100';*/

//AQUI COMEÇA CODIGO AULA

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

//reescrevendo como funçao codigo anterior mudando so a tag para diminuir o codigo
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
//colocar um gerador de voz para ler tudo que ta escrito que tambem esta ligado ao html
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');

}
 
function exibirMensagemInicial(){
//dentro dos parantese sao os parametros enviados para a funçao funcionar
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
//sempre precisa chamar a funçao para que ela funcione
exibirMensagemInicial();

//trecho q executa alguma ação é bom ter só uma funcionalidade (funçao)
function verificarChute(){
    //input é o campo onde escreve o numero
    //verifica se é verdadeiro ou falso o chute é o tipo booleana (value) quando aperta o botao 
   let chute = document.querySelector('input').value;
   //logica
   if(chute == numeroSecreto){
     exibirTextoNaTela('h1', 'Acertou!');
     //operador ternario (tentativa é maior que 1? se sim fica 'tentativas' se nao 'tentativa')
     let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativa = `voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
     exibirTextoNaTela('p', mensagemTentativa);
     //habilitando o botao de novo jogo
     document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
     if(chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é menor');
     } else {
        exibirTextoNaTela('p','O numero secreto é maior');
     }
     tentativa++;
     limparCampo();
   }
   
   //console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {

    //return parseInt(Math.random() * 10 + 1); reescrevendo para nao repetir o numero aleatorio
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    //uma variavel que é igual o tamanho da lista de numeros sorteados
    let quantidadeNumeroLista = listaDeNumerosSorteados.length;
    //se a quantidade de numero na lista for igual numero maximo esvazia lista
    if(quantidadeNumeroLista == numeroMaximo) {
      listaDeNumerosSorteados = [];
    }
    //includes é uma funçao que verifica se o elemento esta na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    } else {
      //push coloca numero na lista
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
    //input campo onde escreve o numero, funçao para limpar ele.
    chute = document.querySelector('input');   
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    //desabilitar botao novo jogo para ele nao ficar habilitado depois da segunda tentativa
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




//dever 1 - curso 2 - interaçao com HTML
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarChute(){
    console.log('o botao foi clicado')
}

function exibirAlerta(){
    alert('Eu amo js')
}

function exibirPrompt(){
    let cidade = prompt ('digite nome de uma cidade')
    alert(`estive na cidade de ${cidade} e lembrei de vc`);
}


function exibirSoma(){
    //é necessario usar parseInt para transforma em numero pois a entrada é lida como string se ele apenas junta sem somar pois entende que é uma letra
    let numero1 = parseInt(prompt ('digite numero1'));
    let numero2 = parseInt(prompt ('digite numero2'));
    let resultado = numero1 + numero2;
    alert(`a soma dos numeros é ${resultado}`);
 
}
*/
/*
//primeiro a funçao depois chamar com o parametro
function OlaMundo(nome) {
    console.log(`welcome to de mato ${nome}`);
}

OlaMundo('yasmin');

function dobroNumero(numero) {
    let resultado = parseInt(numero * 2);
    return console.log(`${resultado}`);
}

dobroNumero('5');

function media1(numero1, numero2, numero3) {

    let resultado1 = (parseInt(numero1) + parseInt(numero2) + parseInt(numero3)) / 3;
    return resultado1;

}
//passei os parametros como letra(string) e depois tive que transforma em numero 
console.log(media1('6', '4', '2'));

//outra forma de fazer passando os numeros direto e retornando o resultado
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

  function numeroMaior(a,b) {
    if(a > b){
        return a;
    } else {
        return b;
    }
    
  }

  let Maior = numeroMaior(2, 5);
  console.log(Maior);

  //outra forma com operador ternario 
  function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

  function multiplicar(a) {
    return a * a;
    
  }
  let muliplo = multiplicar(6)
  console.log(muliplo)


  function Adobro(numero){
    return numero * 2;
  }
  let number = Adobro(2);
  console.log(`${number}`);
  */
 /*
 function imcCalcula(altura, peso){
    return peso / (altura * altura);

 }
 //numero com virgula coloca ponto
 let resultadoImc = imcCalcula(1.65 , 78);
 console.log(`esse é seu imc ${resultadoImc}`);
 
//CODIGO FATORIAL

let numeroFatorial = prompt('Digite um numero para calcular seu fatorial');
let fatorial = 1;
//é um contador para loop ele vai ate certo numero
  for (let i = 1; i<= numeroFatorial; i++){
//fatoria *= i é igual fatorial = fatorial * i para simplificar o codigo
   fatorial *= i;
  }

  console.log(`O fatorial de ${numeroFatorial} é igual ${fatorial}`);
 
//FUNÇAO Fatorial
function CalculoFatorial(numero) {
    let fatorial = 1
    for (let i = 1; i<= numero; i++){
    fatorial *= i;
    }

    return fatorial;
}
let numeroFat = prompt('digite o numero que sera fatorial');
//numeroFat = parseInt(numeroFat); nao precisa dessa linha

let resultadoFat = CalculoFatorial(numeroFat);
console.log(`o fatorial é ${resultadoFat}`);

//Funçao dollar
function dollar(dollar){
    let reais = 4.80;
    return dollar * reais;
}

let dola = prompt('digite o valor em dinheiro');
let total = dollar(dola);
console.log(`vc quer no total ${total} reais`);

//resposta prof
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
//tamanhos sala
  function salaPerimetroQuadrada(altura, largura){
    return (2 * altura) + (2 * largura);
  }
  
  let perimetro = salaPerimetroQuadrada(2, 3);

  function tamanhoSalaArea(altura, largura) {
    return altura * largura;
  }

  let area = tamanhoSalaArea(2, 3)

  function salaPerimetroCircular(raio){
   let pi = 3.14
   return pi * raio * 2
  }
  let perimetroCirculo = salaPerimetroCircular(3)


  console.log(`o perimetro quadrado é ${perimetro}, a area quadrada é ${area} e o perimetro
  circular é ${perimetroCirculo} `);

//codigo tabuada
let numeroTabuada = prompt('digite numero para calculo tabuada')

let tabuada = 1
for(let j = 1; j <= 10; j++){
    tabuada = j * numeroTabuada
    console.log(`${j} X ${numeroTabuada} = ${tabuada}`);
}

//funçao
function mostrarTabuada(numero) {
    let tabuada = 1
    for(let j = 1; j <= 10; j++){
    tabuada = j * numeroTabuada
    console.log(`${j} X ${numeroTabuada} = ${tabuada}`);
    }
  }
  
  // Exemplo de uso
  let numero = 2;
  mostrarTabuada(numero);
*/

/*
Listas
*console.log(nomeDaLista.length) para mostrar o tamanho dela
*primeiro elemento tem indice zero ou seja sua posiçao equivale a zero
*nomeDaLista[0] vai acessar o primeiro elemento da lista
*ultimo elemento nomeDaLista[nomeDaLista.length - 1]; isso acontece pq os elementos
começam em 0, entao o ultimo elemento esta a uma posiçao a menos do que o tamanho total da lista 
*Para remover o último elemento, você pode usar o método pop
*Para adicionar um elemento ao final da array, você pode usar o método push.

*/ 
/*
//DEVER LISTAS 
let vazio = [];
console.log(vazio)

let linguagensPrograma = ['javaScript','C','C++', 'Kotlin','Python'];
console.log(linguagensPrograma.length);
//no total a lista fica com 8 elementos e 7 indices pq começa no zero
linguagensPrograma.push('Java', 'Ruby','GoLang');
console.log(linguagensPrograma);
console.log(linguagensPrograma[0]);
console.log(linguagensPrograma[4]);
//para o ultimo elemento
console.log(linguagensPrograma[linguagensPrograma.length - 1]);
console.log(linguagensPrograma[7]);
*/