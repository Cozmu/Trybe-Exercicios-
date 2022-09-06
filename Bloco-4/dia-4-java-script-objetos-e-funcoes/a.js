function quadrilatero(base, altura) {
    let resultado = {
        perimetro: (2 * base) + (2 * altura),
        area: (base * altura)
    };
    return resultado;
};
console.log(quadrilatero(10, 2))

let parImpar = [17, 18, 56, 44, 12, 11, 15];
function verSeEParOuImpar(n) {
    let resultado = { 
        par: [],
        impar: [],
};
    for (let i = 0; i < n.length; i += 1) {
        if (n[i] % 2 === 0) {
            resultado.par.push(n[i]);
        } else {
            resultado.impar.push(n[i]);
        }
    }
    return resultado;
}
console.log(verSeEParOuImpar(parImpar));


let objeto = {
    chave: [1,2,3],
    chave2: 'carro',
}

objeto.chave.push(4,5);
console.log(objeto.chave)