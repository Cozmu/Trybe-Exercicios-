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
//numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];//a variavel maior esta recebendo o valor do indice 0 do array numbers, considerando 
//assim o seu valor inicial e na logica o maior numero no estagio inicial.
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
}
console.log(maior)

//6 - Como eu fiz
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar.push(numbers[index])
    } 
}
console.log(impar);
//6 - Gabarito
let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) { //valor inicial igual a 0 
  console.log('nenhum valor ímpar encontrado');
} 


//7
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] < menor){
        menor = numbers[index]
    }
    
}

console.log(menor)



//8 
let umAVinte = [];
for (let index = 1; index <= 25; index += 1) {
    umAVinte.push(index)
}
console.log(umAVinte)
//9
for(let index = 0; index < 25; index +=1){
   console.log(umAVinte[index] / 2)
}







