"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var angular_ui_router_1 = require("angular-ui-router");
var ngMaterial = require("angular-material");
var _1 = require("./app/");
angular.bootstrap(document, [
    _1.AppModule,
    angular_ui_router_1.default,
    ngMaterial
]);
