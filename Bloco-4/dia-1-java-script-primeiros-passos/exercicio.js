//1----------------------------------------------
const a = 20;
const b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log();
//2----------------------------------------------
if (multiplicacao > adicao) {
    console.log(true);
} else {
    console.log(false);
}
//3---------------------------------------------
const valorUm = 8;
const valorDois = 12;
const valorTres = 4;

if (valorUm > valorDois && valorUm > valorTres) {
    console.log('valor Um maior');
} else if (valorDois > valorUm && valorDois > valorTres) {
    console.log('valor Dois maior');
} else if (valorTres > valorDois && valorTres > valorUm) {
    console.log('valor Três maior');
}
//4----------------------------------------------
const valor = -50;

if (valor > 0) {
    console.log('Positivo');
} else if (valor === 0) {
    console.log('Zero');
} else {
    console.log('Negativo');
}
//5----------------------------------------------
const primeiroAngulo = 70;
const anguloDois = -60;
const anguloTres = -60;
const somaDosAngulos = primeiroAngulo + anguloDois + anguloTres;
let angulosPositivos = primeiroAngulo > 0 && anguloDois > 0 && anguloTres > 0;
if (angulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: Ângulo Invalido');
}
//6----------------------------------------------
const pecaDeXadrez = 'Cavalo';

switch (pecaDeXadrez) {
    case 'Torre':
        console.log('Movimenta-se apenas em forma de cruz infinitamente ou até encontrar uma peça');
        break;
    case 'Cavalo':
        console.log('Movimenta-se 2 casas pra frente e uma pro lado pra 4 direções em formato de cruz');
        break;
    case 'bispo':
        console.log('Movimenta-se apenas nas diagonais infinitamente ou até encontrar uma peça');
        break;
    case 'Rainha':
        console.log('Movimenta-se para todas as direções infinitamente ou até encontrar uma peça');
        break;
    case 'Rei':
        console.log('Movimenta-se uma casa para todas as direções');
        break;
    case 'Peão':
        console.log('Movimenta-se apenas para frente. No primeiro movimento tem o direito de pular duas casas e se encontrar uma peça vai a diagonal dessa peça');
        break;
    default:
}

//7------------------------------------------
let nota = 40;

let notaInvalida = nota > 0 && nota < 100;

if (notaInvalida) {
    if (nota >= 90 && nota <= 100) {
        console.log('A');
    } else if (nota >= 80) {
        console.log('B');
    } else if (nota >= 70) {
        console.log('C');
    } else if (nota >= 60) {
        console.log('D');
    } else if (nota >= 50) {
        console.log('E');
    } else {
        console.log('F');
    };
} else {
    console.log('Nota invalida')
}

//8----------------------------------------------
const nA = 5;
const nB = 7;
const nC = 11;

if (nA % 2 === 0 || nB % 2 === 0 || nC % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//9--------------------------------------------------
const numeroA = 5;
const numeroB = 2;
const numeroC = 112;

if (numeroA % 2 !== 0 || numeroB % 2 !== 0 || numeroC % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//10--------------------------------------------------
//11---------------------------------------------------
