"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var employees_component_1 = require("./employees.component");
exports.EmployeesModule = angular
    .module('app.employees', [])
    .component('employees', employees_component_1.EmployeesComponent)
    .name;
