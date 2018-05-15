"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var profile_employee_component_1 = require("./profile-employee.component");
exports.ProfileEmployeeModule = angular
    .module('app.profileEmployee', [])
    .component('profileEmployee', profile_employee_component_1.ProfileEmployeeComponent)
    .name;
