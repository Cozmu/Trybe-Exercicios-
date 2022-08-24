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

//1
function formatedBookNames() {
    return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
}
// console.log(formatedBookNames());
//2
function nameAndAge() {
    return books.map((element) => {
        let obj = {};
        obj.age = element.releaseYear - element.author.birthYear;
        obj.author = element.author.name;
        return obj;
    })
}
function AgeSalary(age) {
    return age.sort((a, b) => a.age - b.age)
}
// console.log(AgeSalary(nameAndAge()));
//3
const fantasyOrScienceFiction = () => books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
// console.log(fantasyOrScienceFiction());
//4
function oldBooks() {
    return books.filter((element) => 2022 - element.releaseYear > 60)
}
function bocksOrdered(old) {
    return old.sort((a, b) => a.releaseYear - b.releaseYear)
}
// console.log(bocksOrdered(oldBooks()));
//5
const fantasyOrScienceFictionAuthors = () => books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia').map((element) => element.author.name)

const salary = (namesAuthors) => namesAuthors.sort();
// console.log(salary(fantasyOrScienceFictionAuthors()));
//6
const oldBooksNames = () => books.filter((element) => 2022 - element.releaseYear > 60).map((element) => element.name)
// console.log(oldBooksNames());
//7
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName()); //perguntar na mentoria a partir do filter