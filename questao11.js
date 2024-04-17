/**Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria. */


let idade = 25;
let categoria = idade < 1 ? 'Bebê' :
                idade < 13 ? 'Criança' :
                idade < 18 ? 'Adolescente' :
                idade < 60 ? 'Adulto' : 'Idoso';

console.log(`A pessoa é um(a) ${categoria}.`);
