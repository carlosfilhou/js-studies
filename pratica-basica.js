/*O que eu quero? Uma lista com:
NOME DO ALUNO, NOTA 1, NOTA 2 A MÉDIA
E se o aluno foi aprovado ou reprovado.*/

var nomes = ["carlos", "joao", "rafael"]
var nota1 = [3,7.5,10]
var nota2 = [7, 8.5, 1]

function media(n1,n2){
  return (n1 + n2) / 2
}

for (var index in nomes){

  var n1 = nota1[index]
  var n2 = nota2[index]

  console.log("Aluno(a) " + nomes[index] + 
              " teve a sua primeira nota " +
              n1 +
              " e a segunda " +
              n2 + 
              " portanto sua média é " +
              media(n1, n2))
}