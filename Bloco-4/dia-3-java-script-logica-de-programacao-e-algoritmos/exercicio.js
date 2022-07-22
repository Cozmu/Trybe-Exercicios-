let somaTotal = 0;

for (let index = 1; index <= 50; index += 1) {
    somaTotal += index;
}
 console.log('A soma de 1 a 50 é: ' + somaTotal);
 //-------------------------------------------------------------------
 let contador = 0;

 for(let index=2; index<=150; index += 1){
 if(index % 3 === 0){
 contador += 1;
 }
 }
 console.log(contador); 
 //-----------------------------------------------------------------------
let pessoaX = 20;
let pessoaY = 30;
let pessoaZ = 10;

if (pessoaX < pessoaY && pessoaX < pessoaZ){
    console.log(pessoaX + ' é a mais nova');
} else if (pessoaY < pessoaX && pessoaY < pessoaZ){
    console.log(pessoaY + ' é a mais nova');
} else {
    console.log(pessoaZ + ' é a mais nova');
}




 

