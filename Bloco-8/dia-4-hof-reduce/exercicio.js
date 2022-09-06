// console.log(`acumulador: ${acumulador} corrente: ${corrente}`);
//1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => {
    return arrays.reduce((acumulador, corrente) => {
        return acumulador.concat(corrente);
    }, []);
}
// console.log(flatten());

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

//2
function reduceNames() {
    return books.reduce((acumulador, { author }) => acumulador += `${author.name}, `, '')
}
// console.log(reduceNames());

//3
function averageAge() {
    let x = books.reduce((acumulador, corrente) => {
        let idade = corrente.releaseYear - corrente.author.birthYear;
        return acumulador + idade
    }, 0)
    return x / books.length
}
// console.log(averageAge());
//4
function longestNamedBook() {
    return books.reduce((acumulador, corrente) => acumulador.name.length > corrente.name.length ? acumulador : corrente)
}
// console.log(longestNamedBook());

//5
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {

}
console.log(containsA());

//6
