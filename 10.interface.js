var UserDetails = /** @class */ (function () {
    function UserDetails(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    UserDetails.prototype.register = function () {
        return this.email + " is registered";
    };
    UserDetails.prototype.payInvoice = function () {
        return this.name + " paid the invoice generated";
    };
    return UserDetails;
}());
var userObj = new UserDetails("Adam Colson", "adam@ef.com", 45);
console.log(userObj.register());
console.log(userObj.payInvoice());
