//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
 console.log('Bem-vinda,', info.personagem)

//2
 info.recorrente = 'Sim';
 console.log(info);

 //3
for(let key in info){
    console.log(key)
}
for ( let key in info){
    console.log(key + ':', info[key])
}

let a = ['carro', 25, true]
for(let valor of a){ //nao funciona em objeto
    console.log(valor);
}

//4
for ( let key in info){
    console.log(info[key])
}

//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente:'Sim',
}
for(let key in info2){
    console.log(info[key], 'e', info2[key]);
}
