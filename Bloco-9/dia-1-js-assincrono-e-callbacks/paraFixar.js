/* // linhaDeProducao.js

const TWO_SECONDS = 2000;

setTimeout(() => {
  console.log('Comprar parafusos'); // Comprar parafusos
  console.log('Adicionar ao estoque'); // Adicionar ao estoque
}, TWO_SECONDS);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// pushNumberAsync.js

const pushNumbe = (list, number) => list.push(number);

const n = [];

pushNumbe(n, 1);
pushNumbe(n, 2);
pushNumbe(n, 3);

console.log(n);

// Saída:
// [ 1, 2, 3 ]

// pushNumberAsync.js

const colocaNumero = (list, number) => list.push(number);

const numeros = [];

const THREE_SECONDS = 3000;

setTimeout(() => colocaNumero(numeros, 1), THREE_SECONDS);
colocaNumero(numeros, 2);
colocaNumero(numeros, 3);

console.log(numeros);

// Saída:
// [2, 3]

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREEe_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREEe_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREEe_SECONDS);

// Saída:
// [ 2, 3, 1 ] */

// callbacks-para-fixar-01.js

const userNomeCompleto = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNacionalidade = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const usuario = (callback) => {
    const user = {
        firstName: 'Ivan',
        lastName: 'Ivanovich',
        nationality: 'Russo',
    };
    // Insira o retorno da função `getUser`
    return callback(user);
};

console.log(usuario(userNomeCompleto)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(usuario(userNacionalidade)); // Retorno esperado: "Ivan é Russo"

// callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: 'Ivan',
            lastName: 'Ivanovich',
            nationality: 'Russo',
        };

        // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
        console.log(callback(user));
    }, delay());
};

getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo
 
// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const d = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, erro) => {
    setTimeout(() => {
        const didOperationSucceed = Math.random() >= 0.5;
        if (didOperationSucceed) {
            const country = {
                name: 'Brasil',
                hdi: 0.759,
                currency: 'Real',
            };
            onSuccess(country);
        } else {
            const errorMessage = 'País não encontrado';
            // insira uma `callback` como retorno da função em caso de erro
            erro(errorMessage);
        }
    }, d());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);