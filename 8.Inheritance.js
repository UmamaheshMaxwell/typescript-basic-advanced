var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name, code) {
        this.name = name;
        this.code = code;
    }
    return School;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, studentName, grade, name, code) {
        var _this = _super.call(this, name, code) || this;
        _this.id = id;
        _this.studentName = studentName;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.getStudent = function () {
        return this.studentName + " is from " + this.name + " and his grade is " + this.grade;
    };
    return Student;
}(School));
var student1 = new Student(1, "Scott", "A+", "Education First", "EF");
console.log(student1.getStudent());
