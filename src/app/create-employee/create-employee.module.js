"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var create_employee_component_1 = require("./create-employee.component");
exports.CreateEmployeeModule = angular
    .module('app.createEmployee', [])
    .component('createEmployee', create_employee_component_1.CreateEmployeeComponent)
    .name;
