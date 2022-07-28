/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */
//1
function conteudoP() {
    const conteudo = document.getElementsByTagName('p')[1];
    conteudo.innerText = 'Ola sou o Jorge';
}
conteudoP();

//2
function corM() {
    let quadradoM = document.getElementsByClassName('main-content')[0];
    quadradoM.style.background = 'rgb(76,164,109)';
}
corM();

//3
function corP () {
    let quadradoP = document.getElementsByClassName('center-content')[0];
    quadradoP.style.background = 'white';
}
corP(); 

//4
function textHUM() {
    let titulo = document.getElementsByTagName('h1')[0];
    titulo.innerHTML = 'Exercício 5.1 - JavaScript';
}
textHUM();

//5
function caixaAlta (){
    let alta = document.getElementsByTagName('p');
    for (let index = 0; index < alta.length; index += 1) {
        alta[index].innerText = alta[index].innerText.toUpperCase();  
    }
}
caixaAlta();

//6
function console() {
    let log = document.getElementsByTagName('p');
    console.log(log);
}
console();

//ALL



function all() {
    
}




