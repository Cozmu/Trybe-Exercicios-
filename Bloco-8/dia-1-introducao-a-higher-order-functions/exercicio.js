//1
const dev = () => {
    return {
        nomeCompleto: 'Jorge Wellington',
        email: '@',
    }
}

const newEmployees = (novoFuncionario) => {
    let funcionarios = {
        id1: '',
    }
    // Object.values(novoFuncionario)
    let x = novoFuncionario.nomeCompleto;
    funcionarios.id1 = x;

    return funcionarios;
}
console.log(newEmployees(dev));
//2
const NuApostado = () => {
    return 1;
};

const sorteio = (n) => {
    let x = Math.floor(Math.random() * 2);
    if (x === n) {
        return 'Parabéns, você ganhou!'
    } else {
        return 'Tente novamente'
    }
}
console.log(sorteio(NuApostado()));