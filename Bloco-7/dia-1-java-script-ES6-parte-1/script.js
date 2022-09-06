//exercicio 1
const testingScope = (escopo) => {
    let seiLa = (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`
        : `Não devo ser utilizada fora meu escopo (else)`;
    console.log(seiLa);
}
testingScope(false);

const testingScope2 = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);
//---------------------------------------------------
let oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {
    let ordenado = array.sort((a, b) => a - b);
    let frase = `os numeros ${ordenado} se encontram ordenados de forma crescente`
 return frase;
};

console.log(sortOddsAndEvens([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉

//exercicio 2
const transformaFatorial = n => {
    let resultado = 1;
    for (let index = 2; index <= n; index += 1) {
        resultado *= index;
    }
    let frase = `${resultado} é o fatorial de ${n}`;
    return frase;
}
console.log(transformaFatorial(5));






