let faixaEtaria = 'adulto';

switch (faixaEtaria) {
    case 'adolescente':
        // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

        console.log('Consulte a classificação do filme');
        // Quando a pessoa for adolescente essa será a mensagem impressa no console.

        break;

    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
    case 'adulto':
        // Após implementar a lógica de um case, você pode abrir outro case.
        // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

        console.log('A pessoa adulta é classificada para assistir qualquer filme')
        //caso seja adulto essa mensagem deverá aparecer no terminal

        break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
        // Repetimos o mesmo processo para o case "idoso"
        console.log('A pessoa idosa é classificada para assistir qualquer filme');
        break
    default:
        // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
        // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
        console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado,
    //não precisamos interromper o funcionamento do mesmo.


} //"??????????????"

mes = 'março';
let estacaoDoAno = '';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}
console.log(estacaoDoAno)

let horario = 15;
let momento = '';

switch (horario) {
    case 13:
        momento = 'assincrono';
        break;
    case 14:
        momento = 'sincrono';
        break;
    case 15:
        momento = 'assincrono';
        break;
    case 16:
        momento = 'sincrono';
        break;
    case 17:
        momento = 'sincrono';
        break;
    case 18:
        momento = 'assincrono';
        break;
    case 19:
        momento = 'sincrono';
        break;
    default:
}
console.log(momento);

let nota = 10
    let situacao = '';

switch (nota) {
    case 1:
        situacao = 'reprovado';
        break;
    case 2:
        situacao = 'reprovado';
        break;
    case 3:
        situacao = 'reprovado';
        break;
    case 4:
        situacao = 'reprovado';
        break;
    case 5:
        situacao = 'reprovado';
        break;
    case 6:
        situacao = 'lista';
        break;
    case 7:
        situacao = 'aprovado';
        break;
    case 8:
        situacao = 'aprovado';
        break;
    case 9:
        situacao = 'aprovado';
        break;
    case 10:
        situacao = 'aprovada';
        break;
    default :
    situacao = 'não se aplica';
    break;
}
console.log(situacao);