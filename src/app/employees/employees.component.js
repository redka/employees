"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesComponent = {
    template: require('./employees.component.html'),
    controller: (function () {
        function EmployeesComponent(ApiService, PaginationService, $timeout) {
            this.EmployeesService = ApiService;
            this.PaginationService = PaginationService;
            this.getEmployees();
            this.$timeout = $timeout;
            this.pager = {};
        }
        EmployeesComponent.prototype.getEmployees = function () {
            var _this = this;
            this.EmployeesService.getAllEmployees()
                .then(function (success) {
                console.log(success);
                if (success['status'] != 204) {
                    _this.fullEmployees = success['data'];
                    _this.setPage(1);
                }
                else {
                    alert('No Content');
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        EmployeesComponent.prototype.setPage = function (page) {
            if (page < 1 || page > this.pager.totalPages) {
                return;
            }
            this.pager = this.PaginationService.getPages(this.fullEmployees.length, page, 5);
            this.employees = this.fullEmployees.slice(this.pager.startIndex, this.pager.endIndex + 1);
        };
        EmployeesComponent.prototype.delete = function (id) {
            var _this = this;
            this.EmployeesService.deleteEmployee(id)
                .then(function (success) {
                var index = success['data'].index;
                _this.fullEmployees.splice(index, 1);
                _this.setPage(1);
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        EmployeesComponent.prototype.search = function () {
            var _this = this;
            this.EmployeesService.getAllEmployees(this.searchEmployee)
                .then(function (success) {
                if (success['status'] != 204) {
                    _this.fullEmployees = [];
                    _this.$timeout(function () {
                        _this.fullEmployees = success['data'];
                        _this.setPage(1);
                    }, 600);
                }
                else {
                    alert('No Content');
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        return EmployeesComponent;
    }())
};
