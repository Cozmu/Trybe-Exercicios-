//como eu fiz
let fruoits = [3, 19, 100, 1, 12];
let receptor = 0;

for (index = 0; index < fruoits.length; index += 1) {
        if (fruoits[index] > 15) {
        receptor += fruoits[index]
        console.log(receptor);
    } else{
        console.log('valor menor que 16');
    }
}


//gabarito
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

//-----------------------------------------------
let numeros = null

for (let i = 1; i <=100; i += 1){
    numeros += i;
}
console.log(numeros);

//------------------------------------------------
let n = null
let cem = 100;

for (let x = 1; x = 100; x += 5){
 console.log(x)

}
console.log(n);