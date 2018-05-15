///<reference path="../../../node_modules/@types/angular-ui-router/index.d.ts" />
import * as angular from 'angular';

import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";

export const EditEmployeeComponent = {
  template: require('./edit-employee.component.html'),
  controller: class EditEmployeeComponent {
    employee: Employee;
    EmployeesService: ApiService;
    $location: angular.ILocationService;
    idParam: any;

    constructor(ApiService, $location) {
      this.EmployeesService = ApiService;
      this.$location = $location;
      this.idParam = this.$location.path().split("/");
      this.getEmployee();
    }

    getEmployee() {
      console.log(this.idParam)
      this.EmployeesService.getEmployee(this.idParam[2])
        .then((success) => {
          this.employee = success['data'];
        })
        .catch(err => {
          console.log(err);
        });
    }

    edit() {
      this.EmployeesService.updateEmployee(this.employee)
        .then(() => {
          this.$location.path('/employees');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
