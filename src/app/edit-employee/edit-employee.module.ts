import * as angular from 'angular';
import { EditEmployeeComponent } from './edit-employee.component';

export const EditEmployeeModule = angular
    .module('app.editEmployee', [])
    .component('editEmployee', EditEmployeeComponent)
    .name;
