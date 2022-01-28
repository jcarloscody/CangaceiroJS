class Department {
    nome: string; //public padrao
    private employees: string[]= [];

    constructor(n: string, private lastName: string, private readonly cpf: string){//aqui temos duas forma de inicializar ou criar uma field
        this.nome= n ;
    }

    describe(this: Department){  //o this aqui não é um parametro, é interpretado pelo ts como uma dica sobre o queisso deve ser referido
        console.log(`Department : ${this.nome} Last: ${this.lastName}  ${this.printEmployeeInformation()}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

let accounting = new Department('Accounting', 'dp', '21212');

console.log(accounting)

accounting.describe()


//se liga 
let accountingCopy = {
    nome:'vanilhaa',
    describe : accounting.describe  //está passando apenas a descrição da função, mas não a execução da funcao do objeto accounting. desta forma o this vai se referir ao objeto literal. para isto é importante colocar o this nos methods
}
//accountingCopy.describe()

accounting.addEmployee('josue')
accounting.addEmployee('max')

accounting.printEmployeeInformation()






