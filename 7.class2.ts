class User {
 private name: string
 private email: string
 protected age: number

    constructor(name: string, email: string, age: number){
        this.name = name
        this.email = email
        this.age = age
     }
    private register(){
        console.log(this.name + ' is now registered')
    }

    display(){
        this.register()
    }
}

let user = new User("Johngalt", "john@john.com", 38)
user.display()
//console.log(user.name) will throw error