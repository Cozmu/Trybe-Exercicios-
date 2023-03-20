console.log('funcionando');

class Person {
  constructor(
    private _name:string,
    private _birthDate:Date,
  ) {
    this.name = _name, 
    this.birthDate = _birthDate
  };

  get name():string {
    return this._name;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  private validateName(name:string):void {
    if (name.length < 3) throw new Error('O nome dete ter no minimo tres caracteres');
  }

  set name(value:string) {
    this.validateName(value)
    this._name = value;
  }

  private getAge(date:Date):number {
    const ageInMs = new Date().getTime() - date.getTime();
    const oneYearInMs:number = 31_536_000_000;
    return Math.floor(ageInMs/oneYearInMs);
  }

  private validateBirthDate(birthDate: Date):void {
    if (birthDate.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (this.getAge(birthDate) > 120) throw new Error('A pessoa não pode ter mais que 120 anos!');
  }

  set birthDate(value:Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }
}

const newPerson = new Person('jorge', new Date("1999/01/01"));
// console.log(newPerson.name);
// console.log(newPerson.birthDate);


class Student extends Person {
  constructor(
    private _enrollment: string,
    private _examsGrades: number[],
    private _assignmentsGrades: number[],
    birthDate: Date,
    name: string,
  ) {
    super(name, birthDate);
    this.enrollment = _enrollment
    this.examsGrades = _examsGrades;
    this.assignmentsGrades = _assignmentsGrades;
  }

  get sumGrades():number {
    const notaTotal = [...this._examsGrades, ...this._assignmentsGrades];
    return notaTotal.reduce((anterior, atual) => {
      return atual + anterior
    }, 0);
  }

  get sumAverageGrade():number {
    const notas = this._examsGrades.length + this._assignmentsGrades.length;
    return Math.round(this.sumGrades / notas);
  }

  get generateEnrollment():string {
    return this._enrollment;
  }

  private validateEnrollment(enrollment:string):void {
    if (enrollment.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    };
  }

  set enrollment(value: string) {
    this.validateEnrollment(value);
    this._enrollment = value; 
  }

  private validateExamsGrades(note:number[]):void {
    if (note.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    };
  }

  set examsGrades(note:number[]) {
    this.validateExamsGrades(note);
    this._examsGrades = note; // ue mas nao fina repetido??
  }
  
  private validateAssignmentsGrades(note:number[]):void {
    if (note.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    };
  }

  set assignmentsGrades(note: number[]) {
    this.validateAssignmentsGrades(note);
    this._assignmentsGrades = note;
  }
}


const aluno1 = new Student('aaaaaaaaaaaaaaaaaaaaaaa', [10, 8, 2, 3], [3, 2], new Date("1999/01/01"), 'jorge');
console.log(aluno1);



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
// console.log(cliente1.totalPedido);
// console.log(cliente1.calculaDesconto);


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
// console.log(newDate.visualizacao);
