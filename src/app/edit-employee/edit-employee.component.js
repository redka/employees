"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditEmployeeComponent = {
    template: require('./edit-employee.component.html'),
    controller: (function () {
        function EditEmployeeComponent(ApiService, $location) {
            this.EmployeesService = ApiService;
            this.$location = $location;
            this.idParam = this.$location.path().split("/");
            this.getEmployee();
        }
        EditEmployeeComponent.prototype.getEmployee = function () {
            var _this = this;
            console.log(this.idParam);
            this.EmployeesService.getEmployee(this.idParam[2])
                .then(function (success) {
                _this.employee = success['data'];
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        EditEmployeeComponent.prototype.edit = function () {
            var _this = this;
            this.EmployeesService.updateEmployee(this.employee)
                .then(function () {
                _this.$location.path('/employees');
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        return EditEmployeeComponent;
    }())
};
