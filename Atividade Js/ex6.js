// Faça um algoritmo que leia a altura de 20 pessoas e calcule a média aritmética das
// alturas.

import prompt from 'prompt-sync';

const entrada = prompt();
let soma = 0;

for (let i = 0; i < 20; i++) {
    const altura = Number(entrada('Digite a altura: '));
    soma += altura;
}

console.log('A média das alturas é: ' + soma / 20);