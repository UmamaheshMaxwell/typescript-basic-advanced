function createStudent<T>(obj1:User1, obj2: User2) : User1 {
    let value1 = obj1

    //code

    let value2 = obj2
    // code

    return obj2
}

class User1 {}
class User2 {}
class User3 {}
class User4 {}

var user1 = new User1()
var user2 = new User2()
var user3 = new User3()
var user4 = new User4()

var userObj1 = createStudent(user1, user2)
var userObj2 = createStudent(user3, user4)