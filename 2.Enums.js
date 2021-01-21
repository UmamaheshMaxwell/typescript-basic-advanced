var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
console.log(Direction2.Up);
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 10] = "Up";
    Direction3[Direction3["Down"] = 11] = "Down";
    Direction3[Direction3["Left"] = 12] = "Left";
    Direction3[Direction3["Right"] = 13] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3);
console.log(Direction3.Up);
var Week;
(function (Week) {
    Week[Week["Sunday"] = 1] = "Sunday";
    Week[Week["Monday"] = 2] = "Monday";
    Week[Week["Tuesday"] = 3] = "Tuesday";
    Week[Week["Wednesday"] = 4] = "Wednesday";
    Week[Week["Thursday"] = 5] = "Thursday";
    Week[Week["Friday"] = 6] = "Friday";
    Week[Week["Saturday"] = 7] = "Saturday";
})(Week || (Week = {}));
console.log(Week);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
console.log(UserResponse);
console.log(UserResponse.Yes);
/*
    String Enums
*/
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "UP";
    Direction4["Down"] = "DOWN";
    Direction4["Left"] = "LEFT";
    Direction4["Right"] = "RIGHT";
})(Direction4 || (Direction4 = {}));
console.log(Direction4);
console.log(Direction4.Up);
console.log(Direction4.Down);
console.log(Direction4.Left);
console.log(Direction4.Right);
/*
    Hetrogenous Enums
*/
var Weekend;
(function (Weekend) {
    Weekend["Friday"] = "FRIDAY";
    Weekend[Weekend["Saturday"] = 1] = "Saturday";
    Weekend[Weekend["Sunday"] = 2] = "Sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend);
console.log(Weekend.Friday);
console.log(Weekend.Saturday);
console.log(Weekend["Friday"]);
console.log(Weekend[1]);
console.log(Weekend[2]);
var day = Weekend.Saturday;
console.log(day);
