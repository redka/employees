"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileEmployeeComponent = {
    template: require('./profile-employee.component.html'),
    controller: (function () {
        function ProfileEmployeeComponent(ApiService, $location) {
            this.EmployeesService = ApiService;
            this.$location = $location;
            this.idParam = this.$location.path().split("/");
            this.getEmployee();
        }
        ProfileEmployeeComponent.prototype.getEmployee = function () {
            var _this = this;
            console.log(this.idParam);
            this.EmployeesService.getEmployee(this.idParam[this.idParam.length - 1])
                .then(function (success) {
                _this.employee = success['data'];
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        return ProfileEmployeeComponent;
    }())
};
