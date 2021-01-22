var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.display = function () {
        this.register();
    };
    return User;
}());
var user = new User("Johngalt", "john@john.com", 38);
user.display();
//console.log(user.name) will throw error
