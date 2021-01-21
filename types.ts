console.log("Hello from Typescript")

let myString: string;
myString ="Hello World"
console.log(myString)

let myNum: number;
myNum = 1;
console.log(myNum)

let myBool: boolean;
myBool = false;
console.log(myBool)

let myVar: any
myVar = "hello"
myVar = 1
myVar = true;
console.log(myVar)

let strArry : string[]
strArry =["Hello", "World", "Welcome"]
console.log(strArry)

let numArray: number[]
numArray = [1,2,3,4]
console.log(numArray)

let studentId: number =1;

let studentName: string ="Uma"

let student: [string, number, string] = [studentName, studentId, "Welcome"];
console.log(student)

let employee: any = ["string", 1, "hello"]
console.log(employee)

function sayHello(): number {
    return 1
}

console.log(sayHello())

let value1: null = null
let value2: undefined

console.log(value1)
console.log(value2)
