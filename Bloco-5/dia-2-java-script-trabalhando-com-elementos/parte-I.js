//1
let eu = document.querySelector('#elementoOndeVoceEsta');
//2 
let pai = eu.parentElement;
pai.style.Color = 'red'
//3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
primeiroFilhoDoFilho.innerHTML = 'Ola, isso ira funcionar?'
//4
let primeiroFilho = pai.firstElementChild;
//5
let irAteFilhoDoPai = eu.previousElementSibling;
//6
let atençao = eu.nextSibling;
//7 
let terceiroFilho = eu.nextElementSibling;
//8
let terceiroFIlhoDopai = pai.lastElementChild.previousElementSibling;