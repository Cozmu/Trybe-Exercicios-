let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
        bestInTheWorld: [
            {
                2006: 1,
            },
            {
                2007: 1,
            },
            {
                2008: 1,
            },
            {
                2009: 1,
            },
            {
                2010: 1,
            },
            {
                2018: 1,
            },
        ]
    }
}
//let indicadaAMelhorDoMundo = bestInTheWorld[0];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')
console.log('A jogadora possue ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.medals.bestInTheWorld.length + ' vezes')
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.medals.bestInTheWorld.length + ' vezes')