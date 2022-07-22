let listaDeTarefas = ['estudar conteúdo', 'assistir aula ao vivo','participar da monitoria e fazer os exercícios','participar do fechamento','estudar até a hora de dormir'];
listaDeTarefas.unshift('beber cafe pra da uma acordada');
listaDeTarefas.push('Ler alguns capítulos de Vagabond antes de dormir');
console.log(listaDeTarefas);

//.unshift - add na frente
//.push - add atraz
//.leaght - mostra quantidade mas tambem pode ser usado em outras aplicações
//(sort) - mostra em ordem alfabetica
//.pop - remove ultimo
//.shift - remove primeiro
//.indexOf - mostra posição do conteúdo escolhido 
let indexOf = listaDeTarefas.indexOf('Ler alguns capítulos de Vagabond antes de dormir')
console.log(indexOf)
