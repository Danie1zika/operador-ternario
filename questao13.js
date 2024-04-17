/**Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel.  */



let idade = 65;
let sexo = 'masculino'; // ou 'feminino'
let elegivel = (sexo === 'masculino' && idade >= 65) || (sexo === 'feminino' && idade >= 62) ? 'Elegível para aposentadoria' : 'Não elegível para aposentadoria';

console.log(`A pessoa é ${elegivel}.`);
