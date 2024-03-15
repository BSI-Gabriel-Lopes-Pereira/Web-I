// Faça um programa que peça um valor e mostre na tela se o valor é
// positivo ou negativo.

import prompt from 'prompt-sync';

const entrada = prompt();
const num = Number(entrada('Digite um número: '));

if (num > 0) {
    console.log('O número é positivo');
} else {
    console.log('O número é negativo');
}