class SuperClass {
  constructor (public isSuper: boolean = true) {
    this.isSuper = true
  }

  sayHello() {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {
  constructor() {
    super()
    this.isSuper = false
  }
  // sayHello2() {
  //   this.sayHello()
  // }
}

// const myFunc = (obj: SubClass) => { // EX2
//   obj.sayHello2()
// }

const myFunc = (obj: SuperClass) => { 
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);

interface IAnimal {
  name: string;
  age: number;
  
  getBirthDate(): Date;
}

class Bird2 implements IAnimal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const arara = new Bird2(
  'Arara',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(arara.age);
arara.fly();

/*
Saída (código executado em Mar/2022):
6
Arara está voando!
*/

interface MyInferface {
  myNumber: number,
  myFunc(myParam:number):string
}

class MyClass implements MyInferface {
  constructor(public myNumber: number) {}
  myFunc(myParam: number): string {
    return `SOMA: ${myParam + this.myNumber}`
  }
}

const newClass = new MyClass(51);

console.log(newClass.myNumber);
console.log(newClass.myFunc(67100));

// class Profile {
//   constructor(
//     private name: string,
//     private email: string
//   ) {}

//   public setName(name: string) {
//     this.name = name;
//   }

//   public setEmail(email: string) {
//     this.email = email;
//   }

//   public toString(): string {
//     return `name - [${this.name}] - email - [${this.email}]`;
//   }
// }

// class SocialMediaAccount {
//   // Cria nossa composição com o perfil
//   private profile = new Profile('jorge', 'string@string.com');
  
//   public editProfile(name: string, email: string) {
//     this.profile.setName(name);
//     this.profile.setEmail(email);
//   }

//   public printProfile() {
//     console.log(this.profile.toString());
//   }
// }

// const socialMediaAccount = new SocialMediaAccount();
// socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
// socialMediaAccount.printProfile();

class Friend {
  constructor(private nickname: string) {}; // se fizer que nem ta no couser diz que esta sem inicializador

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    const x =  this.friends.map((friend) => console.log(friend));
    console.log(x);
  }
}

const socialMediaAccount = new SocialMediaAccount();

const friendCarol = new Friend('jorge');
friendCarol.setNickname('Carol');

const friendFernando = new Friend('wellington');
friendFernando.setNickname('Fernando');

socialMediaAccount.addFriend(friendCarol);
socialMediaAccount.addFriend(friendFernando);
socialMediaAccount.printFriends();
// -----------------------------------------------------------------------------------
interface Logger {
  log(param:string):void
}

interface DataBase {
  logger: Logger
  save(key:string, value:string):void
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(`PRIMEIRO => ${param}`)
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`SEGUNDO => ${param}`)   
  }
}


class ExampleDataBase implements DataBase {
  constructor(
    public logger: Logger = new ConsoleLogger()
  ){}

  save(key: string, value: string): void {
    this.logger.log(`qualquer coisa na ${key} com o ${value}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDataBase(logger1);
const database2 = new ExampleDataBase(logger2);
const database3 = new ExampleDataBase();


database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
