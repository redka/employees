import {ApiService} from "../shared/services/api.service";
import {Employee} from "../shared/services/employee.interface";

export const EmployeesComponent = {
  template: require('./employees.component.html'),
  controller: class EmployeesComponent {
    employees: Employee[];
    fullEmployees: Employee[];
    EmployeesService: ApiService;
    searchEmployee: string;
    $timeout: angular.ITimeoutService;

    public total_pages: number;
    public current_page: number;
    public total_count: number;
    public per_page: number;
    public paginLine: any;


    constructor(ApiService, $timeout) {
      this.EmployeesService = ApiService;
      this.getEmployees();
      this.$timeout = $timeout;
    }


    generatePagin() {
      this.total_count = this.fullEmployees.length;
      this.current_page = 1;
      this.per_page = 5;
      this.total_pages = this.total_count / this.per_page;

      this.paginLine = this.setPaginLine(this.current_page, this.total_pages);
    }


    getEmployees() {
      this.EmployeesService.getAllEmployees()
        .then((success) => {
          console.log(success)
          if(success['status'] != 204) {
            this.fullEmployees = success['data'];
            this.employees = this.fullEmployees.slice(this.current_page, 5);
            this.generatePagin();
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
          this.generatePagin();
        })
        .catch(err => {
          console.log(err);
        });
    }

    search() {
      console.log('searchEmployee', this.searchEmployee);
      this.EmployeesService.getAllEmployees(this.searchEmployee)
        .then((success) => {
          if(success['status'] != 204) {
            this.employees = [];
            this.$timeout(() => {
              this.employees = success['data'];
              this.generatePagin();
            }, 600);

          } else {
            alert('No Content');
          }

        })
        .catch(err => {
          console.log(err);
        });
    }

    setPaginLine(current = 1, total = 5) {
      let min, max;
      if (total === 0) {
        return this.range(1, 2);
      } else if (current > total) {
        if (total <= 5) {
          return this.range(1, total + 1);
        }
        return this.range(1, 6);
      }

      min = current < 6 ? 1 : current - 5;
      max = total - current < 6 ? total : current + 6;
      return this.range(min, max + 1);
    }

    range(min, max) {
      const result = [];

      for (let i = min; i < max; i++) {
        result.push(i);
      }

      return result;
    }

    isCanNext() {
      return this.current_page < this.total_pages;
    }

    isCanPrevious() {
      return this.current_page > 1;
    }

    loadPage(page = 1) {
      if (page > this.total_pages || page < 0) {
        return false;
      }
      // this.state.go('.', {page: page});
    }

    loadNext(direction = 1) {
      const newPage = this.current_page + direction;
      if (newPage < 1 || newPage > this.total_pages) {
        return false;
      }
      // this.state.go('.', {page: newPage});
    }


  }
};
