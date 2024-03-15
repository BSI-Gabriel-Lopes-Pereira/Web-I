// Faça uma função para converter uma temperatura em graus Fahrenheit para Celsius.A
// temperatura em Fahrenheit é o dado de entrada e a temperatura em Celsius é o dado
// de saída.Utilize a fórmula C = (F - 32) * 5 / 9, onde F é a temperatura em Fahrenheit e
// C é a temperatura em Celsius.

import prompt from 'prompt-sync';

const entrada = prompt();

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit = Number(entrada('Digite a temperatura em Fahrenheit: '));

console.log('A temperatura em Celsius é: ' + fahrenheitToCelsius(fahrenheit));
