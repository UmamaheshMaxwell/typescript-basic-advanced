var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    }
    return User;
}());
var user1 = new User("Srujana", "srujana@abc.com", 25);
console.log(user1.name);
console.log(user1.email);
console.log(user1.age);
var user2 = new User("Gurunag", "gurunag@abc.com", 25);
console.log(user2.name);
console.log(user2.email);
console.log(user2.age);
var user3 = new User("Harsha", "harsha@abc.com", 25);
console.log(user3.name);
console.log(user3.email);
console.log(user3.age);
var user4 = new User("Anand", "anand@abc.com", 25);
console.log(user4.name);
console.log(user4.email);
console.log(user4.age);
