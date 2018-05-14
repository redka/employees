import * as angular from 'angular';
import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";

export const CreateEmployeeComponent = {
  template: require('./create-employee.component.html'),
  controller: class CreateEmployeeComponent {
    employee: Employee;
    EmployeesService: ApiService;
    $location: angular.ILocationService;

    constructor(ApiService, $location) {
      this.EmployeesService = ApiService;
      this.$location = $location;
    }

    save() {
      this.EmployeesService.createEmployee(this.employee)
        .then((success) => {
          this.$location.path('/employees');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
