//1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//2
let sum = (...n) => {
    return n.reduce((acumulador, corrente) => acumulador + corrente, 0)
}
console.log(sum(10, 12, 23, 35, 167, 756));

//3
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
/* Retornos esperados: */
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//4
const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

const filterPeople = () => {
    return people.filter(({ nationality, bornIn }) => {
        return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
    }).map(({ name }) => name);
}
console.log(filterPeople());

//5
const myList = [5, 2, 3];

const swap = ([primeiro, segundo, terceiro, _quarto]) => [terceiro, segundo, primeiro];

console.log(swap(myList));

//6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

let toObject = ([carro, marca, data]) => {
    return {
        carro,
        marca,
        data,
    }
}
console.log(toObject(palio));

//7
const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

let shipLength = ({ name, length, measurementUnit }) => {
    return `${name} is ${length} ${measurementUnit} long`
}
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

//8
let greet = (nome, msg = 'Hi') => `${msg} ${nome}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

//9
// yearSeasons: estações do ano.
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const ano = ({spring, summer, autumn, winter}) => {
    let mesesDoAno = [...spring, ...summer, ...autumn, ...winter] //tem que ser o mesmo nome das chaves
    return mesesDoAno
}
console.log(ano(yearSeasons));