interface UserInterface {
    name: string
    email: string
    age: number
    register();
    payInvoice();
}

class UserDetails implements UserInterface {
    name: string
    email: string
    age: number

    constructor(name: string, email: string, age: number){
        this.name = name
        this.email = email
        this.age = age
    }
    register(){
        return `${this.email} is registered`
    }

    payInvoice(){
        return `${this.name} paid the invoice generated`
    }
}

let userObj = new UserDetails("Adam Colson", "adam@ef.com", 45)
console.log(userObj.register())
console.log(userObj.payInvoice())