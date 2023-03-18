console.log('funcionando');

class estudante {
  private _matricula: string;
  private _nome: string;
  private _notaProva: number[];
  private _notaTrabalho: number[];

  constructor(m: string, n: string, np: number[], nt: number[]) {
    this._matricula = m;
    this._nome = n;
    this._notaProva = np;
    this._notaTrabalho = nt;
  }

  get notasProvas():string[] {
    return this._notaProva.map((nota) => `Nota de prova => ${nota}`)
  }

  get somaNota() {
    const notaTotal = [...this._notaProva, ...this._notaTrabalho];
    return notaTotal.reduce((anterior, atual) => {
      return atual + anterior
    }, 0);
  }

  get mediaNota() {
    const notas = this._notaProva.length + this._notaTrabalho.length;
    return Math.round(this.somaNota / notas)
  }
}

const aluno1 = new estudante('01-01-2001', 'jorge', [10, 8, 6, 8], [3, 2]);
console.log(aluno1.notasProvas);
console.log(aluno1.somaNota);
console.log(aluno1.mediaNota);


interface Ipedido {
  nome: string;
  preco: number;
}

class Cliente {
  private _cliente: string;
  private _pedido: Ipedido[];
  private _formaPagamento: string;
  private _desconto: number;

  constructor (
    cliente: string,
    pedido: Ipedido[],
    formaPagamento: string,
    desconto: number
  ) {
    this._cliente = cliente,
    this._desconto = desconto,
    this._formaPagamento = formaPagamento,
    this._pedido = pedido
  }

  get totalPedido():number {
    const [x] = this._pedido.map((e) => {
      let somatotal = 0;     
      somatotal += e.preco;
      return somatotal;
    })
    return x
  }

  get calculaDesconto():number {
    return this.totalPedido * (1 - this._desconto)
  }

}

const cliente1 = new Cliente('Maria', [{nome:'pizza', preco: 30}], 'cartao', 0.10);
console.log(cliente1.totalPedido);
console.log(cliente1.calculaDesconto);


class data {
  private _dia: number;
  private _mes: number;
  private _ano: number;
  constructor (
    dia:number,
    mes:number,
    ano:number
  ) {
    if (!data.verificaDate(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  private static verificaDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }

  get visualizacao():string {
    return `${this._dia}/${this._mes}/${this._ano}`
  }
} 

const newDate = new data(2001, 12, 3);
console.log(newDate.visualizacao);
