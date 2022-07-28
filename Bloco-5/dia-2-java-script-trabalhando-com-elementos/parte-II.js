let eu = document.querySelector('#elementoOndeVoceEsta');
let pai = document.querySelector('#pai');

//1
let irmao = document.createElement('div');
pai.appendChild(irmao);
//2
let meuFilho = document.createElement('div');
eu.appendChild(meuFilho);
//3
let sobrinho = document.createElement('div')
primeiroFilho.appendChild(sobrinho);
//4
let visita = sobrinho.parentElement.lastElementChild.previousElementSibling
