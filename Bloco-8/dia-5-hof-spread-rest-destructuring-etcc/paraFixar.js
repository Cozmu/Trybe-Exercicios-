const specialFruit = ['banana', 'maçã', 'mamão'];

const additionalItens = ['leite', 'leite condençado', 'abacate'];

const fruitSalad = (fruit, additional) => {
    let saladaDeFruta = [...fruit, ...additional];
    return saladaDeFruta;
};
console.log(fruitSalad(specialFruit, additionalItens));
//--------------------------------------------------------------------------------------------------------------------------
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 12, 23, 4, 6, 87, 678, 68, 2)); // 88
//--------------------------------------------------------------------------------------------------------------------------
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//         specieName: 'Human',
//         jedi: true,
//     },
//     homeWorld: {
//         name: 'Tatooine',
//         population: '200000',
//     },
// };

// desestruturando o objeto:
// const { name, age, homeWorld: { name: planeta }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planeta} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
//--------------------------------------------------------------------------------------------------------------------------
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a, b, c } = student;
let x = Object.values(student);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);
// console.log(a, b, c);
//---------------------------------------------------------------------------------------------------------------------------   
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const juntar = (infoPessoal, cargo) => {
    let juntado = { ...infoPessoal, ...cargo }
    let { name, age, nationality, profession, squad, squadInitials } = juntado;
    return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
}
console.log(juntar(user, jobInfos));
//---------------------------------------------------------------------------------------------------------------------------   
const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
//---------------------------------------------------------------------------------------------------------------------------   
const getPosition = (latitude, longitude) => ({ //se o paranetro tiver o mesmo nome que as chaves pode retirar as chaves
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));
//---------------------------------------------------------------------------------------------------------------------------