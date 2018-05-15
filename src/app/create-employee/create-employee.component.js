"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeComponent = {
    template: require('./create-employee.component.html'),
    controller: (function () {
        function CreateEmployeeComponent(ApiService, $location) {
            this.EmployeesService = ApiService;
            this.$location = $location;
        }
        CreateEmployeeComponent.prototype.save = function () {
            var _this = this;
            this.EmployeesService.createEmployee(this.employee)
                .then(function (success) {
                _this.$location.path('/employees');
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        return CreateEmployeeComponent;
    }())
};
