// Faça um algoritmo que leia 15 números inteiros e escreva, para cada número lido, se
// é par ou ímpar.

import prompt from 'prompt-sync';

const entrada = prompt();

for (let i = 0; i < 15; i++) {
    const num = Number(entrada('Digite um número: '));
    if (num % 2 === 0) {
        console.log('O número é par');
    } else {
        console.log('O número é ímpar');
    }
}