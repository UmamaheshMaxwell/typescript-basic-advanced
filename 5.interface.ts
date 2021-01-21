function showToDo(todo: {title: string, text: String}){
    console.log(todo.title + " : " + todo.text)
}

let myToDo = {title: 'typescript', text: 'Javascript superset'}

showToDo(myToDo)

interface Todo {
    title: string;
    text: string
    getData(value1, value2): number
}

function showTodoNew(todo: Todo){
    this.title = todo.title;
    this.text = todo.text;
    this.getData = todo.getData;
}

let newMyTodo = {
    title: 'Angular', 
    text: 'Javascript Framework',
    getData: function(value1, value2): number{
        return value1 + value2
    }
}


showTodoNew(newMyTodo)


let showTodoNewObj = new showTodoNew(newMyTodo);
console.log(showTodoNewObj.getData(10,20))


function getFullName(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var obj = new getFullName("john", "galt");
console.log(obj)
console.log(obj.firstName)
console.log(obj.lastName)