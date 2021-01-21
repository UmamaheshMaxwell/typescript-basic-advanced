enum Direction1 {
    Up =1,
    Down,
    Left,
    Right
}

console.log(Direction1)
console.log(Direction1.Up)

enum Direction2 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction2)
console.log(Direction2.Up)

enum Direction3 {
    Up =10,
    Down,
    Left,
    Right
}

console.log(Direction3)
console.log(Direction3.Up)


enum Week {
    Sunday =1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(Week)

enum UserResponse {
    No =0,
    Yes=1
}

console.log(UserResponse)
console.log(UserResponse.Yes)

/*
    String Enums
*/

enum Direction4 {
    Up="UP",
    Down="DOWN",
    Left="LEFT",
    Right="RIGHT"
}

console.log(Direction4)
console.log(Direction4.Up)
console.log(Direction4.Down)
console.log(Direction4.Left)
console.log(Direction4.Right)

/*
    Hetrogenous Enums
*/

enum Weekend {
    Friday="FRIDAY",
    Saturday =1,
    Sunday =2
}

console.log(Weekend)
console.log(Weekend.Friday)
console.log(Weekend.Saturday)

console.log(Weekend["Friday"])
console.log(Weekend[1])
console.log(Weekend[2])

var day: any = Weekend.Saturday
console.log(day)
