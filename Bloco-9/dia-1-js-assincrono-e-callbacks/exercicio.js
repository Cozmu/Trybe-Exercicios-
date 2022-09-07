//1 
/* const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C */
// Nao entendi o objetivo a resposta ja ta comentada do lado

//2
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
    name: 'Marte',
    distanceFromSun: {
        value: 227900000,
        measurementUnit: MEASUREMENT_UNIT,
    },
};

const venus = {
    name: 'Venus',
    distanceFromSun: {
        value: 108200000,
        measurementUnit: MEASUREMENT_UNIT,
    },
};

const jupiter = {
    name: 'Jupiter',
    distanceFromSun: {
        value: 778500000,
        measurementUnit: MEASUREMENT_UNIT,
    },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

//3
const getPlanet = () => {
    const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: 'kilometers',
        },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

getPlanet(); // Imprime Marte depois de 4 segundos

//4
/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`), messageDelay());
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo */

//5 && 6
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);
// Definição da função sendMarsTemperature...
const sendMarsTemperature = (sucesso, erro) => {
    const chanceDeErro = Math.floor(Math.random() * 10) <= 6;
    console.log(chanceDeErro);
    setTimeout(() => {
        if (chanceDeErro) {
            return erro(`robô já estar muito ocupado com outras operações`);
        }
        return sucesso(getMarsTemperature());
    }, messageDelay());
}
sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

//7
const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grama',
        ability: 'Raio Solar',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
        ability: 'Lança Chamas',
    },
    {
        name: 'Squirtle',
        type: 'Água',
        ability: 'Jato de Água',
    },
];

function getPokemonDetails(selectedPokemon, callback) {
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

    setTimeout(() => {
        if (foundPokemon === undefined) {
            return callback(new Error('Não temos esse pokémon para você'));
        }

        const { name, type, ability } = foundPokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

        callback(messageFromProfOak);
    }, 2000);
}

const handlePokemonSearch = (error, message) => {
    if (error) {
        console.log(error);
    } else {
        console.log(message);
    }
};

getPokemonDetails('macaco', handlePokemonSearch);

//8
