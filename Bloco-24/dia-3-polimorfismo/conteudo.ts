class Animals {
  declare turns: number;
  public makeSound(sound: string) {
      console.log('Som emitido:' + sound);
  }
}
class Dogs extends Animals {
  numberTurn(turns: number) {
      return turns;
  }
  makeSound( sound: string): void {
    const times = this.numberTurn(5);
    console.log(`Som emitido: ${sound}, ${times} vezes`);
  }
}
class Birds extends Animals {
  constructor(
   private specie: string
  ) {
    super();
  };
  makeSound (sound: string) {
      console.log(`O som emitido pelo ${this.specie} é ${sound}`);
  }
}

const dogs = new Dogs();
dogs.makeSound("au au au");

const birds = new Birds('pássaro');
birds.makeSound("fiu fiu fiu fiu fiu");

// -------------------------------------

class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() { 
    super.move(); // super para mostrar o metodo no formato da superclasse
    console.log(`${this.name} está voando.`); 
  }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

// --------------------------

abstract class Employee {
  constructor(public name: string) { }

  /* Aqui temos um atributo abstrato que implica às classes
  filhas atribuírem, de maneira obrigatória, um valor do tipo 'number' */
  abstract MIN_SALARY: number

  /* Já aqui temos um método abstrato que implica às classes filhas 
  implementá-la, de maneira obrigatória, de acordo com a utilidade da classe filha  */
  abstract work(): void
}

class Instructor extends Employee { //
  /* quando e subclasse de uma abstrata obrigatoriamente vai ter que implementar
    os metodos e atributos criados na classe abstrata
  */
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 10000;
  work() { console.log(`${this.name} está auxiliando as pessoas estudantes em mentorias.`); }
}

class Specialist extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 20000;
  work() { console.log(`${this.name} está ministrando uma aula ao vivo.`); }
}

class Facilitator extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 50000;
  work() { console.log(`${this.name} está conduzindo um 1:1.`); }
}

const instructor = new Instructor('Victor');
const specialist = new Specialist('Gus');
const facilitator = new Facilitator('Silvinha');

instructor.work(); // Victor está auxiliando as pessoas estudantes em mentorias.
specialist.work(); // Gus está ministrando uma Aula Ao Vivo.
facilitator.work(); // Silvinha está conduzindo um 1:1.

// --------------------------

class Employee2 {
  /* Atributo estático, que pertence a classe */
  private static employeeCount = 0
  
    /* Aqui temos o exemplo de um atributo comum que, em contraste com o atributo estático,
    é utilizado pelas instâncias e não pela classe */
    private employeeName: string;
  
    constructor(name: string) {
      /* Pelo fato do o método addEmployee() ser estático, ou seja, acessível 
      apenas a partir da própria classe e não de suas instâncias, é que a
      chamamos a partir de Employee e não do 'this' */
      Employee2.addEmployee();
  
      // Nesse caso, o 'this' se refere à instância dessa classe, que está sendo construída
      this.employeeName = name;
    }
  
    // Esse é um método exclusivo da classe, por isso estático 
    private static addEmployee() {
      /* Nesse caso, como o atributo é estático, melhor forma de acessar
      o atributo é a partir do nome da classe.  */
      Employee2.employeeCount += 1;
      console.log(`Total de pessoas funcionárias: ${Employee2.employeeCount}`)
    }
  
    /* Aqui temos o exemplo de método comum que, em contraste com o método estático,
    é utilizado pelas instâncias e não pela classe */
    public getName(): string { 
      // Novamente, o 'this' se referindo à instância
      return this.employeeName
    }
  }
  
  const employee1 = new Employee2('Kissyla'); // Total de pessoas funcionárias: 1
  const employee2 = new Employee2('Calaça'); // Total de pessoas funcionárias: 2
  const employee3 = new Employee2('Setinha'); // Total de pessoas funcionárias: 3
  
// ---------------------------

interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

// ---------------------- Usando generics

class Contract<T> { // Agora a classe recebe o genérico T
  static _number = 0;
  constructor(public broker: T) { } // T no lugar de Person
  static get number() { return this._number; }
}

// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
console.log(c1.broker.cpf); // Okay

// Tipagem explícita
const c2: Contract<LegalPerson> = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj); // Okay

