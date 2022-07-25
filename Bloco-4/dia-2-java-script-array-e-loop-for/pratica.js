//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
console.log(numbers);
//2
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

//3
let media = soma / numbers.length;
console.log(media);
//4
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}
//5

let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
}
console.log(maior)

//6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers.length[index] % 2 === 0) {
       impar.push;
       console.log(impar);
    }
}








