/**Questão 7: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é maior que 100. A variável numero contém o valor 
a ser verificado. Atribua o resultado à variável resultado. */


let numero = 101
let resultado = (numero < 100 ) ? "menor" : (numero > 100) ? "maior" : "cem";
console.log(resultado);