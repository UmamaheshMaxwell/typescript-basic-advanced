function showToDo(todo) {
    console.log(todo.title + " : " + todo.text);
}
var myToDo = { title: 'typescript', text: 'Javascript superset' };
showToDo(myToDo);
function showTodoNew(todo) {
    this.title = todo.title;
    this.text = todo.text;
    this.getData = todo.getData;
}
var newMyTodo = {
    title: 'Angular',
    text: 'Javascript Framework',
    getData: function (value1, value2) {
        return value1 + value2;
    }
};
showTodoNew(newMyTodo);
var showTodoNewObj = new showTodoNew(newMyTodo);
console.log(showTodoNewObj.getData(10, 20));
function getFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var obj = new getFullName("john", "galt");
console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);
