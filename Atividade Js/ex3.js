// Faça um programa que leia um número e depois escreva se ele é
// divisível por 5.

import prompt from 'prompt-sync';

const entrada = prompt();
const num = Number(entrada('Digite um número: '));

if (num % 5 === 0) {
    console.log('O número é divisível por 5');
} else {
    console.log('O número não é divisível por 5');
}