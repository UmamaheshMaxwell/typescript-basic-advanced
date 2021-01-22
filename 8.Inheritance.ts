class School {
    name: string
    code: string

    constructor(name: string, code: string){
        this.name = name
        this.code = code
    }
}

class Student extends School {
    id: number
    studentName: string
    grade: string

    constructor(id: number, studentName: string, grade: string,
                name: string, code: string){
        super(name, code)
        this.id =id;
        this.studentName= studentName
        this.grade = grade
    }

    getStudent(){
        return `${this.studentName} is from ${this.name} and his grade is ${this.grade}`
    }
}

let student1 = new Student(1, "Scott", "A+", "Education First", "EF")
console.log(student1.getStudent())