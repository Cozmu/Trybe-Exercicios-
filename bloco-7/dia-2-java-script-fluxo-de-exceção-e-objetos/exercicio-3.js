/* const lesson1 = {
    a:{
        materia: 'Matemática'
    },
    b: {
        numeroEstudantes: 20
    },
    c: {
        professor: 'Maria Clara',
    },
    d: {
        turno: 'manhã'
    }
};
let x = Object.values(lesson1.a)[0]
console.log(x); */
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
}
let a = Object.entries(lesson1)
console.log(a[0][0]);
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
//1
const turnoNoite = (objeto, chave, valor) => {
    objeto[chave] = valor;
}
turnoNoite(lesson2, 'turno', 'noite');
console.log(lesson2);
//2
const listaChaves = (objeto) => {
    let verificacaoKey = Object.keys(objeto);
    return verificacaoKey;
}
 console.log(listaChaves(lesson1));
//3
const tamanhoObjeto = (objeto) => {
    let verificaTamanho = Object.entries(objeto).length;
    return verificaTamanho;
}
 console.log(tamanhoObjeto(lesson1));
//4
const listaValores = (objeto) => {
    let verificacaoValue = Object.values(objeto);
    return verificacaoValue;
}
 console.log(listaValores(lesson3));
//5
let allLeassons = Object.assign({}, { lesson1, lesson2, lesson3 });

//6
let totalDeAlunos = (objeto) => {
    soma = 0;
    let x = Object.keys(objeto);
    for (let index = 0; index < x.length; index++) {
        soma += objeto[x[index]].numeroEstudantes;
    }

    return soma;
}
console.log(totalDeAlunos(allLeassons));
//7
const consultaChave = (objeto, n) => {
    let x = Object.keys(objeto)[n]
    return x
}
console.log(consultaChave(lesson1, 0));
//8
const chaveValorExistente = (objeto, key, value) => {
    let entrada = Object.entries(objeto);
    let onOff = false;
    for (let index = 0; index < entrada.length; index++) {
        if (entrada[index][0] === key && entrada[index][1] === value) {
            onOff = true;
        }
        
    }
    return onOff;
}
console.log(chaveValorExistente(lesson2,'professor','Carlos'))






