import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";
import {PaginationService} from "../shared/services/pagination.service";

export const EmployeesComponent = {
  template: require('./employees.component.html'),
  controller: class EmployeesComponent {
    employees: Employee[];
    fullEmployees: Employee[];
    EmployeesService: ApiService;
    PaginationService: PaginationService;
    searchEmployee: string;
    $timeout: angular.ITimeoutService;
    public pager: any;



    constructor(ApiService, PaginationService, $timeout) {
      this.EmployeesService = ApiService;
      this.PaginationService = PaginationService;
      this.getEmployees();
      this.$timeout = $timeout;
      this.pager = {};
    }

    getEmployees() {
      this.EmployeesService.getAllEmployees()
        .then((success) => {
          console.log(success)
          if(success['status'] != 204) {
            this.fullEmployees = success['data'];
            this.setPage(1);
          } else {
            alert('No Content');
          }

        })
        .catch(err => {
          console.log(err);
        });
    }

    setPage(page) {
      this.employees = [];
      if (page < 1 || page > this.pager.totalPages) {
        return;
      }

      this.$timeout(() => {
        this.pager = this.PaginationService.getPages(this.fullEmployees.length, page, 5);
        this.employees = this.fullEmployees.slice(this.pager.startIndex, this.pager.endIndex + 1);
      }, 400);
    }

    delete(id) {
      this.EmployeesService.deleteEmployee(id)
        .then((success) => {
          this.employees = [];
          let index = success['data'].index;
          this.fullEmployees.splice(index, 1);
          this.setPage(1);
        })
        .catch(err => {
          console.log(err);
        });
    }

    search() {
      this.EmployeesService.getAllEmployees(this.searchEmployee)
        .then((success) => {
          if(success['status'] != 204) {
            this.employees = [];
            this.$timeout(() => {
              this.fullEmployees = success['data'];
              this.setPage(1);
            }, 400);

          } else {
            alert('No Content');
          }

        })
        .catch(err => {
          console.log(err);
        });
    }

  }
};
