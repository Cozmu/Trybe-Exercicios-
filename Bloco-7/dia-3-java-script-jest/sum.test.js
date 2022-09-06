const sum = (a, b) => a + b;
/* module.exports = sum; */
//essa parte  de cima seria no arquivo js

//essa parte de baixo nesse arquivo mesmo
/*  const tem que ser o mesmo nome da função restada = require('./arquivo que ta os codigos') */
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});