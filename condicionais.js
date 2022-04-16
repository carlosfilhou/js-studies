var idade = 64;

if (idade >= 65 && idade <= 90){
  console.log("Pode dirigir")
  console.log("Apresente os exames de checagem...")
}
else if (idade >= 18 && idade <= 64){
  console.log("Pode dirigir")
  console.log("Vá com cuidado...")
}
else{
  console.log("Não pode dirigir!")
  console.log("É proibido...")
}

// EXEMPLO 2

var nota1 = 7;
var nota2 = 10;

var media = (nota1 + nota2) / 2;

console.log("Sua nota na primeira prova foi " + nota1)
console.log("E na segunda prova foi " + nota2)

if(media >= 7){
  console.log("Sua média é " + media + " e você passou")
}
else{
  console.log("Sua média é " + media + " e você está reprovado")
}

switch(media){
  case 10:
    console.log("Você foi ótimo, parabéns!")
    break;
  case 0:
    console.log("Você foi muito mal em ambas as provas!")
    break;
  default:
    console.log("Continue estudando para atingir a nota máxima.")
    break;
}
