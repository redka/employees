import * as angular from 'angular';
import { EmployeesComponent } from './employees.component';

export const EmployeesModule = angular
    .module('app.employees', [])
    .component('employees', EmployeesComponent)
    .name;
