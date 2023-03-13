const readline = require('readline-sync');

const x = 67;
const y = 167;

const altura = readline.question('Qual seu altura? ');
const peso= readline.questionFloat('Qual sua peso? ');


const IMC = (wheight, height) => {
    const alturaMetro = height / 100;
    const potenciacao = alturaMetro ** 2;
    const calc = wheight / potenciacao;
    if (calc < 18.5) {
        console.log('Status: Underweight (thin)');
        console.log(calc.toFixed(2));
      } else if (calc >= 18.5 && calc < 25) {
        console.log('Status: Normal weight');
        console.log(calc.toFixed(2));
      } else if (calc >= 25 && calc < 30) {
        console.log('Status: Overweight');
        console.log(calc.toFixed(2));
      } else if (calc >= 30 && calc < 35) {
        console.log('Status: Grade I obesity');
        console.log(calc.toFixed(2));
      } else if (calc >= 35 && calc < 40) {
        console.log('Status: Grade II obesity');
        console.log(calc.toFixed(2));
      } else {
        console.log('Status: Obesity grades III and IV');
        console.log(calc.toFixed(2));
      }
  
};

IMC(peso, altura);

