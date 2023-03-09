import { type } from "os";

const numberInput = 7;

const isItAPrime = (param: number): boolean => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param: number[]): number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));


// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
    name: 'Rui',
    age: 23,
};
  
const createSimpleSentence = (param: { name: string, age: number }): string => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}
  
console.log(createSimpleSentence(peopleInput));

// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param: string | boolean) => { // pipe unico
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));


// BONUS

type Character = {
    nickname: string;
    class: string;
    stats: { agi: number; str: number; int: number; hp: number; mp: number };
    createdAt: Date;
}

const characters: Character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: Character, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);