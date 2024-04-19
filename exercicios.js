const prompt = require('prompt-sync')();


/*Exercício 01*/
// const celsiusValue = parseInt(prompt("digite uma temperatura em Celsius: "));

// const fahrenheitValue = (celsiusValue*1.8) + 32;

// console.log(`O valor de ${celsiusValue}°C em Fahrenheit é ${fahrenheitValue}°F`);

/*Exercício 02*/
// const votersNumbers = parseInt(prompt("Numero de eleitores: "));
// const whiteVotes = parseInt(prompt("Numero de votos brancos: "));
// const nullVotes = parseInt(prompt("Numero de votos nulos: "));
// const validVotes = parseInt(prompt("Numero de votos válidos: "));

// const percentWhiteVotes = (whiteVotes*100) / votersNumbers;
// const percentNullVotes = (nullVotes*100) / votersNumbers;
// const percentValidVotes = (validVotes*100) / votersNumbers;

// console.log(`
// Votos brancos: ${percentWhiteVotes}%,
// votos nulos: ${percentNullVotes}%,
// Votos válidos: ${percentValidVotes}%`);

/*Exercício 03*/
// const firstNumber = parseInt(prompt("primeiro numero: "));
// const secondNumber = parseInt(prompt("segundo numero: "));
// const thirdNumber = parseInt(prompt("terceiro numero: "));
// let fourthNumber = parseInt(prompt("quarto numero: "));

// const firstResult = firstNumber+25;
// const seconResult = secondNumber*3;
// const thirdResult = thirdNumber*0.12;
// fourthNumber = firstNumber + secondNumber + thirdNumber;

// console.log(`
// Primeiro resultado: ${firstResult},
// Segundo resultado: ${seconResult},
// Terceiro resultado: ${thirdResult},
// Quarto resultado: ${fourthNumber}
// `);

/*Exercício 04*/
// const firstValue = parseInt(prompt("Primeira nota: "));
// const secondValue = parseInt(prompt("Segunda nota: "));

// const result = (firstValue + secondValue)/2;

// if(result >= 6){
//     console.log(`Média semestral ${result}, Parabéns! Você foi aprovado.`);
// };

/*Exercício 05*/
// const firstValue = parseInt(prompt("Primeira nota: "));
// const secondValue = parseInt(prompt("Segunda nota: "));

// const result = (firstValue + secondValue)/2;

// if(result < 6){
//     console.log(`Média semestral ${result}, você foi REPROVADO! Estude mais.`);
//     return
// };

// console.log(`Média semestral ${result}, Parabéns! Você foi aprovado.`);

/*Exercício 06*/
// const firstValue = parseInt(prompt("primeiro valor: "));
// const secondtValue = parseInt(prompt("segundo valor: "));
// const thirdValue = parseInt(prompt("terceiro valor: "));

// const firstVerification = firstValue < (secondtValue + thirdValue);
// const secondVerification = secondtValue < (firstValue + thirdValue);
// const thirdVerification = thirdValue < (firstValue + secondtValue);

// if(firstVerification && secondVerification && thirdVerification){

//     if(firstValue === secondtValue && secondtValue === thirdValue){
//         console.log('Triângulo eqüilátero');
//         return;
//     }

//     if(firstValue === secondtValue || firstValue === thirdValue || secondtValue === thirdValue){
//         console.log('Triângulo isósceles');
//         return;
//     }

//     if(firstValue !== secondtValue || secondtValue !== thirdValue){
//         console.log('Triângulo escaleno');
//         return;
//     }

//     return
// }
// console.log('valores invalidos.')

/*Exercício 07*/
// const appleNumbers = parseInt(prompt("numero de maçãs compradas: "));
// let result;

// if(appleNumbers >= 12){
//     result = appleNumbers * 0.25;
// } else{
//     result = appleNumbers * 0.30;
// };

// console.log(`O valor total das maçãs é ${result}`)

/*Exercício 08*/
// const firstValue = parseInt(prompt("Primeiro valor: "));
// const secondValue = parseInt(prompt("Segundo valor: "));

// if(firstValue !== secondValue){
//     const result = firstValue > secondValue 
//         ? `Valores ${secondValue}, ${firstValue}` 
//         : `Valores ${firstValue}, ${secondValue}`;
//     console.log(result);
//     return
// };

// console.log('valores invalidos');

