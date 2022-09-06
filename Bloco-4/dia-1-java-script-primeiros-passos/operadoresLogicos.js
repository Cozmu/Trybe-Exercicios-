const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição');
} else {
    console.log('Acho que houve um engano com meu pedido');
}
//se mudar a condição da const ele retornara o segundo resultado 
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
// o operador && apenas nos retorna true se todas as condições forem true

const currentHour = 3;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!';
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado'
} else {
    message = 'ZZzzzzzz.....'
}

console.log(message)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// lembrar que else não tem condição 

const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado por me atender :D")
} else {
    console.log("Ei, eu não pedi isso!");
}
// ja no operador || apenas uma das condições pode ser verdadeira para que retorne true

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = 'sabado'

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sabado' || weekDay === 'domingo') {
    console.log('FINALMENTE, descanço merecido UwU');
} else {
    console.log('Acho que ainda tem que inventar esse dia na semana kkkkkkk')
}
//sempre colocar quem a gente quer igualar entre os pipes. Nesse caso "weekDay"

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
//apenas com a ação de colocar o '!' na frente o resultado da operação se torna do tipo booleano false

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false (Isso se aplica também a stringes)
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
//undefined e null retorna true se aplicar a propriedade not '!'


// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

