let fraseUm = () => 'Acordando!!';
let fraseDois = () => 'Bora tomar café!!';
let fraseTres = () => 'Partiu dormir!!';

let doingThings = (frase) => frase();

console.log(doingThings(fraseUm));
console.log(doingThings(fraseDois));
console.log(doingThings(fraseTres));