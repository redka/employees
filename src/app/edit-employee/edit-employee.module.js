"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var edit_employee_component_1 = require("./edit-employee.component");
exports.EditEmployeeModule = angular
    .module('app.editEmployee', [])
    .component('editEmployee', edit_employee_component_1.EditEmployeeComponent)
    .name;
