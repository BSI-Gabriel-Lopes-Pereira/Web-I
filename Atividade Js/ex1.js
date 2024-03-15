// Faça um programa que peça dois números e imprima o maior deles.

import prompt from 'prompt-sync';

const entrada = prompt();
const num1 = Number(entrada('Digite o primeiro número: '));
const num2 = Number(entrada('Digite o segundo número: '));

if (num1 > num2) {
    console.log(`O maior número é: ${num1}`);
}