class Employee {
    public empName: String
    protected empCode: String
    private age: string

    constructor(name: string, code: string){
        this.empName = name
        this.empCode = code
    }
}

class salesEmployee extends Employee {
    private department: string
    public dept: string

    constructor(name: string, code: string, department: string){
        super(name, code)
        this.department = department
        this.dept = this.department
    }

    getSalesEmpDetails(){
       // console.log(this.age)
        return `${this.empName} : ${this.empCode} : ${this.department}`
    }
}

let salesEmpObj = new salesEmployee("Tuan Bui", "TUAN007", "Technical")
console.log(salesEmpObj.empName)
console.log(salesEmpObj.getSalesEmpDetails())
// console.log(salesEmpObj.department)
// console.log(salesEmpObj.empCode)
console.log(salesEmpObj.dept)