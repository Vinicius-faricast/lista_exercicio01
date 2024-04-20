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

/*Exercício 09*/
// const appleNumbers = parseInt(prompt("coloque o codigo de origem: "));

// if(appleNumbers === 1){
//     console.log('Sul');
// } else if(appleNumbers === 2){
//     console.log('Norte');
// } else if(appleNumbers === 3){
//     console.log('Leste');
// } else if(appleNumbers === 5 || appleNumbers === 6){
//     console.log('Nordeste');
// } else if( appleNumbers >= 7 && appleNumbers <= 9){
//     console.log('Sudeste');
// } else if(appleNumbers >= 10 && appleNumbers <= 20){
//     console.log('Centro-oeste');
// } else if(appleNumbers >= 25 && appleNumbers <= 50){
//     console.log('Noroeste');
// } else{
//     console.log('Produto importado');
// }

/*Exercício 10*/
// const numberInt = parseInt(prompt("Digite um numero inteiro: "));

// for (let index = 0; index < 10; index++) {
//     console.log(numberInt)
// }

/*Exercício 11*/
// let condition = true;

// while (condition) {
//     const numberInt = parseInt(prompt("Digite um numero inteiro: "));
    
//     if(!condition || numberInt < 0){
//         condition = false;
//         break
//     };

//     console.log(numberInt % 2)
//     if(numberInt % 2){
//         console.log(`O valor ${numberInt} é ímpar`);

//     }else {
//         console.log(`O valor ${numberInt} é par`);

//     };
// };

/*Exercício 12*/
// for (let index = 1000; index <= 1999; index++) {
//     if(index % 11 === 5){
//         console.log(index);
//     };
    
// };

/*Exercício 13*/
// for( let index = 0; index < 5; index++){
//     const numberInt = parseInt(prompt("Digite um numero inteiro: "));

//     for(let j = 1; j <= numberInt; j++){
//         const result = j*numberInt;
//         console.log(`${j} x ${numberInt} = ${result}`);
//     };
// };

/*Exercício 14*/
// let number = true;
// let value = 0;
// let count = 0;

// while(number !== 0){
//     number = Number(prompt("Digite um numero: "));
//     value += number;
//     count = number !== 0 ? count+1 : count;

// }

// const result = value / count;
// console.log(`media aritmetrica: ${result.toFixed(2)}`);

/*Exercício 15*/
// let number = true;
// let value = 0;
// let count = 0;
// let Weight = 0

// while(number !== 0){
//     number = Number(prompt("Digite um numero: "));
//     if(number !== 0){
//         Weight = Number(prompt("Digite seu peso: "));
//         count += Weight;
//         value += (number * Weight);
//     }
// }

// const result = value / count;
// console.log(`media ponderada: ${result.toFixed(2)}`);

/*Exercício 16*/
let count = 0;
let number = 100;


// while(count <= 50){
//     let j = 1;
//     while (j <= number) {
//         if(number % j === 0 ){
//             if(j === 1 || number === j){
//                 if(number % 2 !== 0 || number === 2){
//                     if(number % 3 !== 0 || number === 3){
//                         if(number === j){
//                             console.log(number);
//                             count ++;   
//                         }; 
//                     }
//                 }
//             }
//         }
//         j++
//     }
//     number ++;
// }
