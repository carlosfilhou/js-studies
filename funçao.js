//Esse aqui é o exemplo simples:
function mediaExemplo(){
  var primeiraNota = 10;
  var segundaNota = 5;
  
  var media = (primeiraNota + segundaNota) / 2;
  
  console.log(media)
}

mediaExemplo ();

mediaExemplo ();

//Essa aqui é a função em atividade retornando o valor:
function mediaEscolar(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var mediaEscolar = (n1 + n2) / 2;

  return mediaEscolar
}

var primeiroResultado = mediaEscolar(5,5)
var segundoResultado = mediaEscolar(7,7)
var terceiroResultado = mediaEscolar(10,10)

console.log(primeiroResultado + " e " + segundoResultado)

//Variável recebeu função e pode ser usada como tal:
function saudação(){

  return "olá, essa é uma saudação"

}

var s = saudação

console.log(s());

//Esse aqui é um exemplo de função anonima, multiplicando:
var funçaoAnonima = function (n1,n2){

  return n1 * n2
}

console.log(funçaoAnonima(5,10))