import * as angular from 'angular';

import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";

export const ProfileEmployeeComponent = {
  template: require('./profile-employee.component.html'),
  controller: class ProfileEmployeeComponent {
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
      this.EmployeesService.getEmployee(this.idParam[this.idParam.length - 1])
        .then((success) => {
          this.employee = success['data'];
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
