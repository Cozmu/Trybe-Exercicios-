// 1
interface Car {
  brand: string;
  color: string;
  doors: number;
}

class Car {
  constructor(marca: string, cor: string, portas: number) {
    this.brand = marca;
    this.color = cor;
    this.doors = portas;
  }

  honk() {
    return `buzinou`
  }
  turnOn() {
    return 'ligado'
  }
  furnOff() {
    return 'desligado'  
  }
  speedUp() {
    return 'acelerando'
  }
  speedDown() {
    return 'desacelerando'
  }
  stop() {
    return 'parou'
  }
  turn(direcao: string) {
    return `virando para ${direcao}`
  }
}

// 2
const newCar = new Car('volkswagen', 'prata', 4);

newCar.turnOn();
newCar.speedUp();
newCar.speedDown();
newCar.turn("esquerda");
newCar.speedUp();
newCar.speedDown();
newCar.turn("direita");
newCar.speedUp();
newCar.speedDown();
newCar.turn("direita");
newCar.speedDown();
newCar.stop();
newCar.speedUp();
newCar.speedDown();
newCar.turn("direita");
newCar.speedUp();
newCar.speedDown();
newCar.turn("esquerda");
newCar.speedUp();
newCar.speedDown();
newCar.turn("direita");
newCar.speedDown();
newCar.stop();
newCar.speedUp();
// 3
type slice =  4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: slice
}

// const calabresa: Pizza = {
//   flavor: "Calabresa",
//   slices: 8
// }

// const marguerita: Pizza = {
//   flavor: "Marguerita",
//   slices: 6
// }

// const nutella: Pizza = {
//   flavor: "Nutella",
//   slices: 4
// }

// 4
type comum = 'calabresa' | 'frango' | 'pepperoni';
type vegetariana = 'marguerita' | 'palmito' | 'cogumelos';
type doce = 'nutella' | 'goiabada com queijo' | 'marshmallow';

interface PizzaCommon extends Pizza {
  flavor: comum
}

interface PizzaVegetarian extends Pizza {
  flavor: vegetariana
}

interface PizzaSugar extends Pizza {
  flavor: doce,
  slices: 4
}

const calabresa: PizzaCommon = {
  flavor: "calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "frango",
  slices: 8
}

const pepperoni: PizzaCommon = {
  flavor: "pepperoni",
  slices: 6
}

const marguerita: PizzaVegetarian = {
  flavor: "marguerita",
  slices: 8
}

const palmito: PizzaVegetarian = {
  flavor: "palmito",
  slices: 8
}

const goiabadaEQueijo: PizzaSugar = {
  flavor: "goiabada com queijo",
  slices: 4
}

// 5
type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));