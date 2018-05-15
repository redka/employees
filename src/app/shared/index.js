"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var api_service_1 = require("./services/api.service");
var confirm_delete_directive_1 = require("./directives/confirm-delete.directive");
var pagination_service_1 = require("./services/pagination.service");
exports.SharedModule = angular
    .module('app.shared', [])
    .service('ApiService', api_service_1.ApiService)
    .service('PaginationService', pagination_service_1.PaginationService)
    .directive('confirmDelete', confirm_delete_directive_1.ConfirmDeleteDirective.factory())
    .name;
