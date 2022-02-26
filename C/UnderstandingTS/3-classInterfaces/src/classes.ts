abstract class Department {
    nome: string; //public padrao
    private employees: string[]= [];
    protected rg: string = '';

    constructor(n: string, private lastName: string, private readonly  cpf: string){//aqui temos duas forma de inicializar ou criar uma field
        this.nome= n ;
    }

    describe(this: Department){  //o this aqui não é um parametro, é interpretado pelo ts como uma dica sobre o que isso deve ser referido
        console.log(`Department : ${this.nome} Last: ${this.lastName}  ${this.printEmployeeInformation()} cpf: ${this.cpf}`)
    }

    abstract describeAll(this: Department): void 

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class D extends Department {
    describeAll(this: Department): void {
        throw new Error("Method not implemented.");
    }
    constructor(n: string, lastName: string, cpf: string) {
        super(n, lastName, cpf);
    }
}

let accounting = new D('Accounting', 'dp', '21212');

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




//INHERITANCE
class ITDepartment extends Department {

    static count = 0

    constructor(n: string, lastName: string, cpf: string, private admin: string[], private setor: Number) {
        super(n, lastName, cpf);
        ITDepartment.count++;
    }

    get setorN (){
        return this.setor;
    }

    set setorN (v: Number){
        this.setor = v;
    }

    addAdm(v: string){
        this.admin.push(v)
    }

    static validationSetor(n:Number){
        if (n < 100) {
            return true;
        }
        return false;
    }

    describeAll(this: Department): void {
        throw new Error("Method not implemented.");
    }
}

let it = new ITDepartment('jo', 'car', '6156', ['1','2'], 10);

console.log("lklkl ", it)
console.log( it.setorN)
it.setorN=1000;
console.log( it.setorN)

console.log(ITDepartment.validationSetor(it.setorN))

let itD = new ITDepartment('kkk','klk','321',[],12)

console.log(ITDepartment.count)



//SINGLETONS - instancias privadas - se vc tiver a intenção de instanciar apenas uma vez uma classe. quem sabe pode ser util
class Single extends ITDepartment {
    
    private static  instance: Single;

    private constructor(n: string, lastName: string, cpf: string, admin: string[], setor: Number) {
        super(n, lastName, cpf, admin, setor)
    }

    static getInstance (n: string, lastName: string, cpf: string, admin: string[], setor: Number){
        if(this.instance){
            return this.instance
        }

        this.instance = new Single(n, lastName, cpf, admin, setor)
        return this.instance;
    }

}

let single = Single.getInstance('lk','kkkkk', '616', [],65);
let single2 = Single.getInstance('josue', 'car', '11111',['lk'],89);

console.log(single, single2)

