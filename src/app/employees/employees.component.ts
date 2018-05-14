import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";
import {ConfirmDeleteService} from "../shared/services/confirm-delete.service";

export const EmployeesComponent = {
  template: require('./employees.component.html'),
  controller: class EmployeesComponent {
    employees: Employee[];
    EmployeesService: ApiService;
    ConfirmDeleteService: ConfirmDeleteService;

    constructor(ApiService, ConfirmDeleteService) {
      this.EmployeesService = ApiService;
      this.ConfirmDeleteService = ConfirmDeleteService;
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

    // delete(item) {
    //   this.ConfirmDeleteService.show(item, () => {
    //     console.log('delete confirm', item);
    //   });
    // }
  }
};
