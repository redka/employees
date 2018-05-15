"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppRouting($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('employees', {
        url: '/employees',
        component: 'employees',
        data: {
            authorizedOnly: true
        }
    })
        .state('editEmployee', {
        url: '/employees/:id',
        component: 'editEmployee',
        data: {
            authorizedOnly: true
        }
    })
        .state('createEmployee', {
        url: '/employees/create',
        component: 'createEmployee',
        data: {
            authorizedOnly: true
        }
    })
        .state('login', {
        url: '/login',
        component: 'login'
    });
    $urlRouterProvider.otherwise('/employees');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}
exports.AppRouting = AppRouting;
