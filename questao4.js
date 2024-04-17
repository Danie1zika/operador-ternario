/**Questão 4: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é positivo, negativo ou zero. A variável numero 
contém o valor a ser verificado. Atribua o resultado à variável resultado. */


let numero = 1
let resultado = (numero < 0 ) ? "negativo" : (numero > 0) ? "positivo" : "zero";
console.log(resultado)