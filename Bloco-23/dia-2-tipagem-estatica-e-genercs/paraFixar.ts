type materia = 'liquido' | 'solido' | 'gasoso'
type cpf = string | number
type sistema = 'linux' | 'mac' | 'windows'
type vogais = 'a' | 'e' | 'i' |'o' | 'u' // type unio


// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age?: number;
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, age?: number) {
    // usamos o this para acessar as propriedades da instância da classe,
    // ele representa a própria instância que estamos criando
    // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
    this.name  = name;
    this.birthDate  = birthDate;
    this.age  = age;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 31);

console.log(person1);
person1.speak()

person1.age = 23;
console.log(person1);

interface Dog {
  name: string;
  raca: string;
  age?: number;

}

class Dog {


  constructor(name: string, raca: string, age?: number) {
    this.age = age;
    this.name = name;
    this.raca = raca;
  }

  latir() {
    return `O ${this.name} latiu`
  }

  idade() {
    return `O ${this.name} tem ${this.age}`
  }

  inform() {
    return `O ${this.name} e da raça ${this.raca}`
  }
}

const cachorro1 = new Dog('Negao', 'pastor Alemao');

console.log(cachorro1.inform());

interface pecas {
  motor: string;
  lataria: boolean;
}

interface carro extends pecas {
  documentos: boolean;
  dono: string;
  lancamento: Date;
}

let carro:carro = {
  motor: 'V8',
  lataria: true,
  documentos: true,
  dono: 'eu',
  lancamento: new Date()
}


// =--------------------

type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
// function stringToJson(str: string): unknown {
//   const result = JSON.parse(str);
//   return result;
// }

// const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

// function stringToJson<T>(str: string): T {
//   const result = JSON.parse(str);
//   return result;
// }

// const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

// const address = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')


function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user.id;
address.id;
user.name;
address.street;

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação