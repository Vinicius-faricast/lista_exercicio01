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
const firstNumber = parseInt(prompt("primeiro numero: "));
const secondNumber = parseInt(prompt("segundo numero: "));
const thirdNumber = parseInt(prompt("terceiro numero: "));
let fourthNumber = parseInt(prompt("quarto numero: "));

const firstResult = firstNumber+25;
const seconResult = secondNumber*3;
const thirdResult = thirdNumber*0.12;
fourthNumber = firstNumber + secondNumber + thirdNumber;

console.log(`
Primeiro resultado: ${firstResult},
Segundo resultado: ${seconResult},
Terceiro resultado: ${thirdResult},
Quarto resultado: ${fourthNumber}
`);
