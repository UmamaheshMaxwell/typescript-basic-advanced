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
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var salesEmployee = /** @class */ (function (_super) {
    __extends(salesEmployee, _super);
    function salesEmployee(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        _this.dept = _this.department;
        return _this;
    }
    salesEmployee.prototype.getSalesEmpDetails = function () {
        // console.log(this.age)
        return this.empName + " : " + this.empCode + " : " + this.department;
    };
    return salesEmployee;
}(Employee));
var salesEmpObj = new salesEmployee("Tuan Bui", "TUAN007", "Technical");
console.log(salesEmpObj.empName);
console.log(salesEmpObj.getSalesEmpDetails());
// console.log(salesEmpObj.department)
// console.log(salesEmpObj.empCode)
console.log(salesEmpObj.dept);
