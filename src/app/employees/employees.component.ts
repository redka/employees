import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";

export const EmployeesComponent = {
  template: require('./employees.component.html'),
  controller: class EmployeesComponent {
    employees: Employee[];
    EmployeesService: ApiService;

    constructor(ApiService) {
      this.EmployeesService = ApiService;
      this.getEmployees();
    }

    getEmployees() {
      this.EmployeesService.getAllEmployees()
        .then((success) => {
          console.log(success)
          if(success['status'] != 204) {
            this.employees = success['data'];
          } else {
            alert('No Content');
          }

        })
        .catch(err => {
          console.log(err);
        });
    }

    delete(id) {
      this.EmployeesService.deleteEmployee(id)
        .then((success) => {
          let index = success['data'].index;
          this.employees.splice(index, 1);

        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
