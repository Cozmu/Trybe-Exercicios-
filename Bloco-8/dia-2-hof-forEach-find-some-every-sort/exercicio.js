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
            birthYear: 1892, //auterado
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
            birthYear: 1890, //auterado
        },
        releaseYear: 1928,
    },
];

//1
function authorBornIn1947(arr, data) {
    return arr.find(element => element.author.birthYear === data).author.name;
}
console.log(authorBornIn1947(books, 1947));
//2
function smallerName(arr) {
    let nameBook;
    arr.forEach(element => {
        if (!nameBook || element.name.length < nameBook.length) {
            nameBook = element.name;
        }
    });
    return nameBook;
}
console.log(smallerName(books));
//3
function getNamedBook(arr, tamanho) {
    return arr.find((element) => element.name.length === tamanho).name;
}
console.log(getNamedBook(books, 26));
//4
function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc());
//5
function everyoneWasBornOnSecXX() {
    return books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000)
}
console.log(everyoneWasBornOnSecXX());
//6
function someBookWasReleaseOnThe80s() {
    return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
}
console.log(someBookWasReleaseOnThe80s());
//7
function authorUnique() {
    return books.every((element) => {
        !books.some((elementDois) => {
            (elementDois.author.birthYear === element.author.birthYear)
                && (elementDois.author.name !== element.author.name)
        })
    })
}
console.log(authorUnique());