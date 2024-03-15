// Faça um algoritmo que calcule e escreva a soma dos números pares e a soma dos
// números ímpares entre 1 e 100.

let pares = 0;
let impares = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        pares += i;
    } else {
        impares += i;
    }
}

console.log("Soma dos números pares: " + pares);
console.log("Soma dos números ímpares: " + impares);