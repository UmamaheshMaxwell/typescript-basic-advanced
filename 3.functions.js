console.clear();
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
function getAddition(num1, num2) {
    return num1 + num2;
}
console.log(getAddition(1, 2));
var mySum = function (num1, num2) {
    return num1 + num2;
};
console.log(mySum(1, 2));
var myAddition = function (num1, num2) {
    return num1 + num2;
};
console.log(myAddition(3, 5));
console.log(myAddition(10, "Hello"));
var mynewAdd = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mynewAdd(10, 20));
console.log(mynewAdd("30", "40"));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getName("John", "Galt"));
//console.log(getName("John"))
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Scott", "Desatnick"));
console.log(getFullName("Johngalt"));
console.log(getFullName());
function getData(firstName, lastName) {
    if (!lastName) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getData("Adam", "Colson"));
console.log(getData("Adam"));
function myVoid(name, id) {
    console.log(name + ':' + id);
}
console.log(myVoid("Tuan Bui", 1));
var display = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(display('Uma', "Mahesh"));
