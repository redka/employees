"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var login_component_1 = require("./login.component");
exports.LoginModule = angular
    .module('app.login', [])
    .component('login', login_component_1.LoginComponent)
    .name;
