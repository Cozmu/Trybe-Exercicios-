const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element, posicao, arr) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
//---------------------------------------------------------------
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

names.forEach((name, index) => names[index] = name.toUpperCase());
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
//---------------------------------------------------------------
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList)
//---------------------------------------------------------------
const n = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return n.find((numero) => numero % 3 === 0 && numero % 5 === 0)
}

console.log(findDivisibleBy3And5())
//---------------------------------------------------------------
const nomes = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return nomes.find((names) => names.length === 5)
}

console.log(findNameWithFiveLetters());
//---------------------------------------------------------------
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
 return musicas.find((m) => m.id === id)
}

console.log(findMusic('31031687'))
//---------------------------------------------------------------
const lastName = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => element === name);
}

console.log(hasName(lastName, 'Ana'));
//---------------------------------------------------------------
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
 return arr.every((element) => element.age >= minimumAge);
}

console.log(verifyAges(people, 18));
//---------------------------------------------------------------
const conjunto = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

conjunto.sort((primeiro, segundo) => {
 let idadePrimeiro = primeiro.age
 let idadeSegundo = segundo.age
 return idadePrimeiro - idadeSegundo;
})
console.log(conjunto);
//---------------------------------------------------------------
conjunto.sort((primeiro, segundo) => {
  let idadePrimeiro = primeiro.age
  let idadeSegundo = segundo.age
  return idadeSegundo - idadePrimeiro;
 })
 console.log(conjunto);