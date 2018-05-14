import * as angular from 'angular';
import { CreateEmployeeComponent } from './create-employee.component';

export const CreateEmployeeModule = angular
    .module('app.createEmployee', [])
    .component('createEmployee', CreateEmployeeComponent)
    .name;
