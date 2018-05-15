"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-material/angular-material");
var ngCookies = require("angular-cookies");
var ngMockE2E = require("angular-mocks/ngMockE2E");
var app_component_1 = require("./app.component");
var _1 = require("./employees/");
var _2 = require("./login/");
var _3 = require("./shared/");
var app_routing_1 = require("./app.routing");
var app_run_1 = require("./app.run");
var edit_employee_module_1 = require("./edit-employee/edit-employee.module");
var create_employee_module_1 = require("./create-employee/create-employee.module");
var app_run_fake_1 = require("./app.run-fake");
var profile_employee_module_1 = require("./profile-employee/profile-employee.module");
exports.AppModule = angular
    .module('app', [
    'ui.router',
    ngCookies,
    ngMockE2E,
    _1.EmployeesModule,
    _2.LoginModule,
    _3.SharedModule,
    edit_employee_module_1.EditEmployeeModule,
    create_employee_module_1.CreateEmployeeModule,
    profile_employee_module_1.ProfileEmployeeModule
])
    .component('appRoot', app_component_1.AppComponent)
    .config(app_routing_1.AppRouting)
    .run(app_run_1.AppRun)
    .run(app_run_fake_1.AppRunFakeBack)
    .name;
