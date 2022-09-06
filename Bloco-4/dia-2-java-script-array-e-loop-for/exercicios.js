//1---------------------------------------------------------------------
let menuExercicio1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menuExercicio1[1];

console.log(menuServices);

//2----------------------------------------------------------------------
let index = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = index.indexOf('Portfólio');

console.log(indexOfPortfolio);

//3------------------------------------------------------------------------
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

//4-------------------------------------------------------------------------
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//-------------------------------------------------
const word = 'Hello';
for (let algo of word) {
  console.log(algo);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
console.log(word)
//5------------------------------------------------------
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nomes of names){
    console.log(nomes);
}
//-------------------------------------------------------



